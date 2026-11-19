import { defineConfig, loadEnv, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// `vite dev` does not run Vercel functions, so serve /api/chat (Ron) from api/chat.ts locally.
// GOOGLE_API_KEY is read from .env (server-side only, never sent to the browser).
function ronApiDevPlugin(): Plugin {
  return {
    name: "ron-api-dev",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/api/chat", async (req, res) => {
        // Copy server-side keys (GOOGLE_API_KEY, optional ANTHROPIC_API_KEY) from .env into process.env.
        const env = loadEnv(server.config.mode, process.cwd(), "");
        for (const key of ["GOOGLE_API_KEY", "ANTHROPIC_API_KEY"]) {
          if (env[key] && !process.env[key]) process.env[key] = env[key];
        }

        let raw = "";
        for await (const chunk of req) raw += chunk;
        let body: unknown = {};
        try {
          body = raw ? JSON.parse(raw) : {};
        } catch {
          body = {};
        }
        (req as any).body = body;

        // Minimal stand-in for the Vercel response helpers used by api/chat.ts.
        const shim = {
          setHeader: (name: string, value: string) => res.setHeader(name, value),
          status(code: number) {
            res.statusCode = code;
            return this;
          },
          json(payload: unknown) {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(payload));
            return this;
          },
        };

        try {
          const mod = await server.ssrLoadModule(path.resolve(__dirname, "api/chat.ts"));
          await mod.default(req, shim);
        } catch (err) {
          console.error("Ron dev API failed", err);
          shim.status(500).json({ error: "Ron could not answer just now. Please try again or email prabork@gmail.com." });
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ronApiDevPlugin(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
