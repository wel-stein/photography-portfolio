import { useEffect, useRef } from "react";

export default function Lightbox({ open, idx, items, onClose, onNav, returnFocusRef }) {
  const lastFocus = useRef(null);

  useEffect(() => {
    if (!open) return;
    const fn = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft")  onNav(-1);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [open, onClose, onNav]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (open) {
      lastFocus.current = document.activeElement;
    } else if (lastFocus.current) {
      const el = returnFocusRef?.current ?? lastFocus.current;
      setTimeout(() => el?.focus?.(), 0);
    }
  }, [open, returnFocusRef]);

  const current = items[idx];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current ? `Image viewer — ${current.title}` : "Image viewer"}
      aria-hidden={!open}
      className={`fixed inset-0 z-[1000] bg-[rgba(5,4,3,0.97)] flex items-center justify-center transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <span className="fixed top-8 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.18em] text-ink-muted">
        {idx + 1} / {items.length}
      </span>
      <button
        type="button"
        onClick={onClose}
        className="fixed top-7 right-9 text-3xl text-gold cursor-pointer bg-transparent border-none font-extralight leading-none z-10"
        aria-label="Close"
      >
        ×
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNav(-1); }}
        className="fixed top-1/2 -translate-y-1/2 left-2 md:left-7 w-[52px] h-[52px] flex items-center justify-center bg-[rgba(14,12,10,0.75)] border border-line text-gold text-[22px] cursor-pointer transition-colors hover:bg-gold hover:text-bg z-10"
        aria-label="Previous"
      >
        ‹
      </button>
      <div onClick={(e) => e.stopPropagation()}>
        {current && (
          <img
            className="max-w-[96vw] md:max-w-[80vw] max-h-[84vh] object-contain block"
            src={current.src}
            alt={current.title}
          />
        )}
      </div>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNav(1); }}
        className="fixed top-1/2 -translate-y-1/2 right-2 md:right-7 w-[52px] h-[52px] flex items-center justify-center bg-[rgba(14,12,10,0.75)] border border-line text-gold text-[22px] cursor-pointer transition-colors hover:bg-gold hover:text-bg z-10"
        aria-label="Next"
      >
        ›
      </button>
      {current && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-center">
          <div className="font-serif text-xl text-ink italic">{current.title}</div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-gold mt-1">{current.tag}</div>
        </div>
      )}
    </div>
  );
}
