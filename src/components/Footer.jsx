import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line px-7 md:px-[60px] pt-14 md:pt-[60px] pb-8">
      <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] grid-cols-2 gap-10 md:gap-14 pb-12 border-b border-line">
        <div className="col-span-2 md:col-span-1">
          <div className="font-serif text-2xl text-gold tracking-[0.1em] mb-4">LUMIÈRE STUDIO</div>
          <p className="text-sm leading-[1.7] text-ink-muted max-w-[280px]">
            Fine art wedding and portrait photography for those who believe their moments deserve to live forever in light.
          </p>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.25em] uppercase text-gold mb-5">Navigate</div>
          <ul className="list-none flex flex-col gap-3">
            <li><Link to="/portfolio"  className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Portfolio</Link></li>
            <li><Link to="/about"      className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">About Us</Link></li>
            <li><Link to="/investment" className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Investment</Link></li>
            <li><Link to="/contact"    className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.25em] uppercase text-gold mb-5">Services</div>
          <ul className="list-none flex flex-col gap-3">
            <li><Link to="/portfolio?filter=Wedding"     className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Wedding Photography</Link></li>
            <li><Link to="/portfolio?filter=Portrait"    className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Bridal Portraits</Link></li>
            <li><Link to="/portfolio?filter=Engagement"  className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Engagement Sessions</Link></li>
            <li><Link to="/portfolio?filter=Editorial"   className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Editorial</Link></li>
            <li><Link to="/portfolio?filter=Destination" className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Destination Weddings</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.25em] uppercase text-gold mb-5">Legal</div>
          <ul className="list-none flex flex-col gap-3">
            <li><a href="#" className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Privacy Policy</a></li>
            <li><a href="#" className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Terms of Service</a></li>
            <li><a href="#" className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Licensing</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 pt-7">
        <span className="text-xs text-gold-dim">© 2026 Lumière Studio. All rights reserved.</span>
        <div className="flex gap-4">
          {[
            { abbr: "ig", title: "Instagram" },
            { abbr: "pt", title: "Pinterest" },
            { abbr: "fb", title: "Facebook" },
          ].map((s) => (
            <a
              key={s.abbr}
              href="#"
              title={s.title}
              className="w-9 h-9 border border-line flex items-center justify-center text-xs text-ink-muted no-underline transition-colors hover:border-gold hover:text-gold"
            >
              {s.abbr}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
