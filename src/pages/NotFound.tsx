import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
    <p className="font-hand text-2xl text-ink/60">oops</p>
    <h1 className="font-display text-[10rem] leading-none text-ink">404</h1>
    <p className="font-hand text-3xl text-ink/70 mb-8">This page isn't in the notebook.</p>
    <Link
      to="/"
      className="px-7 py-3 bg-ink text-paper font-mono text-xs font-bold uppercase tracking-widest shadow-[4px_4px_0_0_#f6c945] hover:bg-[#e5484d] transition-colors"
    >
      Back home
    </Link>
  </div>
);

export default NotFound;
