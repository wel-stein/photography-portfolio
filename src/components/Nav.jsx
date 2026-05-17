import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const fn = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [menuOpen]);

  const opaque = scrolled || !isHome;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[200] flex items-center justify-between transition-all duration-300 border-b ${
          opaque
            ? "py-4 px-6 md:px-[60px] bg-[rgba(14,12,10,0.94)] backdrop-blur-[14px] border-line"
            : "py-7 px-6 md:px-[60px] border-transparent"
        }`}
      >
        <Link to="/" className="font-serif text-[22px] tracking-[0.12em] text-gold no-underline flex flex-col leading-none">
          LUMIÈRE STUDIO
          <span className="text-[10px] font-sans tracking-[0.25em] text-ink-muted mt-[3px]">
            Fine Art Photography
          </span>
        </Link>

        <ul className="hidden md:flex gap-10 list-none">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `nav-link text-[11px] tracking-[0.18em] uppercase no-underline transition-colors hover:text-gold-light ${
                    isActive ? "text-gold" : "text-ink-muted"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-block text-[11px] tracking-[0.18em] uppercase border border-line-strong text-gold px-6 py-2.5 no-underline transition-colors hover:bg-gold hover:text-bg"
        >
          Book a Consultation
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] border border-line-strong text-gold bg-transparent"
        >
          <span className="block w-4 h-px bg-gold" />
          <span className="block w-4 h-px bg-gold" />
          <span className="block w-4 h-px bg-gold" />
        </button>
      </nav>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`md:hidden fixed inset-0 z-[300] bg-bg/95 backdrop-blur-md flex flex-col items-center justify-center transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="absolute top-7 right-6 text-3xl text-gold bg-transparent border-none cursor-pointer font-extralight leading-none"
        >
          ×
        </button>
        <ul className="flex flex-col gap-7 items-center mb-12 list-none">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-[15px] tracking-[0.22em] uppercase text-ink-muted no-underline transition-colors hover:text-gold-light"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="text-[11px] tracking-[0.18em] uppercase border border-line-strong text-gold px-8 py-3 no-underline transition-colors hover:bg-gold hover:text-bg"
        >
          Book a Consultation
        </Link>
      </div>
    </>
  );
}
