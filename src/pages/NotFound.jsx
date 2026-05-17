import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="px-7 md:px-[60px] min-h-[80vh] flex flex-col items-center justify-center text-center">
      <p className="font-serif text-[120px] font-light text-gold-dim leading-none opacity-60">404</p>
      <h1 className="font-serif text-[clamp(32px,3vw,46px)] font-light mt-4 mb-3">
        Page not <em className="italic text-gold-light">found.</em>
      </h1>
      <p className="text-[15px] text-ink-muted max-w-[420px] mb-8">
        The page you're looking for doesn't exist, or has moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-gold text-bg text-[11px] tracking-[0.18em] uppercase px-12 py-4 no-underline font-medium transition-all hover:bg-gold-light hover:-translate-y-px"
      >
        Return Home
      </Link>
    </section>
  );
}
