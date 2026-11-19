import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";
import RonAvatar from "@/components/RonAvatar";
import { RON_OPEN_EVENT } from "@/lib/ron";

type Message = { role: "user" | "assistant"; content: string };

const GREETING: Message = {
  role: "assistant",
  content:
    "Hi, I'm Ron, Prabor's AI assistant. Ask me about his apps, work experience or how to get in touch.",
};

const suggestions = ["What has Prabor built?", "Is he open to work?", "What's his tech stack?"];

const TypingDots = () => (
  <div className="flex items-center gap-1 px-3 py-3 bg-paper shadow-[2px_3px_0_rgba(0,0,0,0.15)]" aria-label="Ron is typing">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-2 h-2 rounded-full bg-ink/70"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const RonChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  const send = async (text: string) => {
    const question = text.trim();
    if (!question || busy) return;

    const next: Message[] = [...messages, { role: "user", content: question }];
    setMessages(next);
    setInput("");
    setBusy(true);

    try {
      // Only send the real conversation; the local greeting is not sent back to the model.
      const history = next.filter((m, i) => !(i === 0 && m === GREETING));
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.reply) {
        throw new Error(data.error || "Ron could not answer just now. Please email prabork@gmail.com.");
      }
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Ron could not answer just now.";
      setMessages((m) => [...m, { role: "assistant", content: message }]);
    } finally {
      setBusy(false);
    }
  };

  // Keep a reference to the latest send so the window listener below never uses stale state.
  const sendRef = useRef(send);
  sendRef.current = send;

  // Other sections (e.g. the "Talk to Ron" button) open the chat and can send a question.
  useEffect(() => {
    const onOpen = (e: Event) => {
      setOpen(true);
      const question = (e as CustomEvent<{ question?: string }>).detail?.question;
      if (question) sendRef.current(question);
    };
    window.addEventListener(RON_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(RON_OPEN_EVENT, onOpen);
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            role="dialog"
            aria-label="Chat with Ron"
            initial={{ opacity: 0, y: 20, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            exit={{ opacity: 0, y: 20, rotate: 2 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="relative w-[min(22rem,calc(100vw-2rem))] flex flex-col bg-[#f7e3a1] text-ink shadow-[0_10px_28px_rgba(0,0,0,0.25)] border-2 border-ink"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#c5d4f7] opacity-90 -rotate-2" />

            <header className="flex items-center justify-between gap-3 px-4 py-3 border-b-2 border-ink">
              <div className="flex items-center gap-3">
                <RonAvatar className="w-11 h-11" showStatus />
                <div>
                  <p className="font-display text-2xl leading-none uppercase">Ron</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest opacity-70">
                    AI assistant · online
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="p-1 hover:text-[#e5484d] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </header>

            <div ref={listRef} aria-live="polite" className="flex-1 max-h-[45vh] min-h-[12rem] overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((m, i) =>
                m.role === "user" ? (
                  <div key={i} className="flex justify-end">
                    <p className="max-w-[85%] px-3 py-2 font-hand text-xl leading-snug whitespace-pre-wrap bg-[#bfe8d0] shadow-[2px_3px_0_rgba(0,0,0,0.15)]">
                      {m.content}
                    </p>
                  </div>
                ) : (
                  <div key={i} className="flex items-end gap-2">
                    <RonAvatar className="w-7 h-7" />
                    <p className="max-w-[80%] px-3 py-2 font-hand text-xl leading-snug whitespace-pre-wrap bg-paper shadow-[2px_3px_0_rgba(0,0,0,0.15)]">
                      {m.content}
                    </p>
                  </div>
                ),
              )}

              {busy && (
                <div className="flex items-end gap-2">
                  <RonAvatar className="w-7 h-7" />
                  <TypingDots />
                </div>
              )}

              {messages.length === 1 && !busy && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="font-mono text-[10px] uppercase tracking-wider border-2 border-ink px-2 py-1 bg-paper hover:bg-[#f472b6] transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={onSubmit} className="flex items-center gap-2 px-4 py-3 border-t-2 border-ink">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={1000}
                placeholder="ask Ron anything..."
                aria-label="Message Ron"
                className="flex-1 min-w-0 bg-transparent border-b-2 border-ink/60 focus:border-ink outline-none py-1 font-hand text-xl placeholder:text-ink/40"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                aria-label="Send message"
                className="p-2 bg-ink text-paper disabled:opacity-40 hover:bg-[#e5484d] transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close chat with Ron" : "Chat with Ron, the AI assistant"}
        className="flex items-center gap-2 pl-1.5 pr-4 py-1.5 bg-ink text-paper border-2 border-ink shadow-[4px_5px_0_#f472b6] hover:-translate-y-0.5 transition-transform font-mono text-xs font-bold uppercase tracking-widest"
      >
        <span className="rounded-full bg-paper/10 p-0.5">
          <RonAvatar className="w-9 h-9" showStatus />
        </span>
        {open ? "Close" : "Ask Ron"}
      </button>
    </div>
  );
};

export default RonChat;
