import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const HERO = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=85",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=85",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&q=85",
];

const COLS = [
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=85", name: "Weddings",    count: "128 stories",  cat: "Wedding" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=85", name: "Portraits",   count: "74 sessions",  cat: "Portrait" },
  { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=85", name: "Engagements", count: "96 couples",   cat: "Engagement" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=85", name: "Editorial",   count: "38 features",  cat: "Editorial" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=85", name: "Destination", count: "52 locations", cat: "Destination" },
];

const GALLERY = [
  // WEDDINGS
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=85", title: "Amara & James",     tag: "Destination Wedding", cat: "Wedding" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=900&q=85", title: "Ceremony Aisle",    tag: "Wedding Ceremony",    cat: "Wedding" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=85", title: "Villa Florencia",   tag: "Wedding",             cat: "Wedding" },
  { src: "https://images.unsplash.com/photo-1538488881038-e252a119ace7?w=900&q=85", title: "Golden Hour",       tag: "Wedding Film",        cat: "Wedding" },
  { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=85", title: "The Harlow Suite",  tag: "Reception",           cat: "Wedding" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=85", title: "Sofia & Elias",     tag: "Wedding",             cat: "Wedding" },
  { src: "https://images.unsplash.com/photo-1607748851687-ba9a10438561?w=800&q=85", title: "Château de Vaux",   tag: "Wedding",             cat: "Wedding" },
  { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=85", title: "Garden Ceremony",   tag: "Wedding",             cat: "Wedding" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85", title: "First Dance",       tag: "Wedding Reception",   cat: "Wedding" },
  { src: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=800&q=85", title: "The Vow",           tag: "Wedding Ceremony",    cat: "Wedding" },

  // PORTRAITS
  { src: "https://images.unsplash.com/photo-1494955870693-c7a50f7b4f57?w=800&q=85", title: "Sofia Laurent",     tag: "Bridal Portrait",     cat: "Portrait" },
  { src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800&q=85", title: "Isabelle",          tag: "Fine Art Portrait",   cat: "Portrait" },
  { src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=85", title: "Naomi",             tag: "Portrait",            cat: "Portrait" },
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=85", title: "Margot",            tag: "Editorial Portrait",  cat: "Portrait" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=85", title: "Juliette",          tag: "Bridal",              cat: "Portrait" },
  { src: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=800&q=85", title: "Camille",           tag: "Portrait",            cat: "Portrait" },
  { src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=85", title: "Eloise",            tag: "Studio Portrait",     cat: "Portrait" },

  // ENGAGEMENTS
  { src: "https://images.unsplash.com/photo-1441015401724-70d16b783f5d?w=900&q=85", title: "Naomi & Lucas",     tag: "Engagement",          cat: "Engagement" },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85", title: "Priya & Marcus",    tag: "Engagement",          cat: "Engagement" },
  { src: "https://images.unsplash.com/photo-1522678893758-b2bf7e8aa2af?w=800&q=85", title: "Elena & Marco",     tag: "Engagement",          cat: "Engagement" },
  { src: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=800&q=85",  title: "Iris & Tom",        tag: "Engagement",          cat: "Engagement" },
  { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=85", title: "Ava & Henry",       tag: "Engagement",          cat: "Engagement" },

  // EDITORIAL
  { src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=85", title: "Vogue Bride",       tag: "Editorial",           cat: "Editorial" },
  { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=85", title: "Couture Shoot",     tag: "Editorial",           cat: "Editorial" },
  { src: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=85", title: "Harper's Feature",  tag: "Editorial",           cat: "Editorial" },
  { src: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800&q=85", title: "Essence of White",  tag: "Editorial",           cat: "Editorial" },
  { src: "https://images.unsplash.com/photo-1485518882345-15568b007407?w=800&q=85", title: "Atelier Light",     tag: "Editorial",           cat: "Editorial" },

  // DESTINATION
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=85", title: "Amalfi Coast",      tag: "Destination Wedding", cat: "Destination" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85", title: "Swiss Alps",        tag: "Destination Elopement", cat: "Destination" },
  { src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=85", title: "Santorini",         tag: "Destination Wedding", cat: "Destination" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=85", title: "Lake Como",         tag: "Destination",         cat: "Destination" },
];

const PACKAGES = [
  {
    tier: "Essentials", name: "Pearl", price: "2,800", note: "Starting investment",
    feat: false, cta: "Enquire", style: "out",
    feats: [
      "6 hours of coverage",
      "1 lead photographer",
      "400+ hand-edited images",
      "Private online gallery",
      "Downloadable high-res files",
      "Personal printing license",
    ],
  },
  {
    tier: "Most Requested", name: "Opulent", price: "5,400", note: "Signature collection",
    feat: true, cta: "Reserve Your Date", style: "sol",
    feats: [
      "10 hours of full coverage",
      "Lead photographer + 2nd shooter",
      "700+ hand-edited images",
      "Cinematic highlight film",
      "Premium flush-mount album",
      "Fine art print set (12 images)",
      "Engagement session included",
    ],
  },
  {
    tier: "Exclusive", name: "Couture", price: "9,200", note: "All-inclusive",
    feat: false, cta: "Enquire", style: "out",
    feats: [
      "Unlimited coverage — all day",
      "Lead photographer + 2 shooters",
      "1200+ curated gallery",
      "Full-length wedding film",
      "Heirloom leather album (30 pages)",
      "Canvas wall art (3 pieces)",
      "Bridal boudoir session",
      "Personal concierge support",
    ],
  },
];

const ADDONS = [
  { name: "Bridal Boudoir",   price: "From $680",   desc: "Intimate, tasteful, empowering. A private session designed for you." },
  { name: "Fine Art Album",   price: "From $1,200", desc: "Heirloom-quality flush-mount albums, hand-crafted in Florence." },
  { name: "Canvas Artwork",   price: "From $340",   desc: "Museum-quality canvas prints delivered ready to hang." },
  { name: "Second Shooter",   price: "$480/day",    desc: "Additional photographer for full-day coverage from every angle." },
  { name: "Rehearsal Dinner", price: "From $1,100", desc: "Document the intimate moments before the big day begins." },
  { name: "Rush Delivery",    price: "$600",        desc: "Full edited gallery within 2 weeks of your event." },
];

const TESTI = [
  {
    stars: 5,
    body: "Working with Lumière was the single most worthwhile decision we made for our wedding. Every photograph felt like a painting. Guests still ask about them years later.",
    name: "Alexandra & William T.", event: "Chateau Wedding — Tuscany",
    av: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=200&q=80",
  },
  {
    stars: 5,
    body: "I booked the Opulent package and was genuinely moved when I saw the gallery. My portrait session alone was worth every penny. I've never felt so beautifully seen.",
    name: "Naomi Chen", event: "Bridal Portrait Session",
    av: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&q=80",
  },
  {
    stars: 5,
    body: "The Couture experience is exactly that — couture. From the initial consultation to the heirloom album delivery, every moment was thoughtful, unhurried, and extraordinary.",
    name: "Marcus & Priya V.", event: "Estate Wedding — Hampshire",
    av: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&q=80",
  },
];

const FILTERS = ["All", "Wedding", "Portrait", "Engagement", "Editorial", "Destination"];

/* ─────────────────────────────────────────────
   APP
───────────────────────────────────────────── */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter]     = useState("All");
  const [showAll, setShowAll]   = useState(false);
  const [lb, setLb]             = useState({ open: false, idx: 0, items: [] });
  const [menuOpen, setMenuOpen] = useState(false);
  const [done, setDone]         = useState(false);
  const [form, setForm]         = useState({ name: "", partner: "", email: "", date: "", type: "", message: "" });
  const lbReturnFocus           = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (!lb.open && !menuOpen) return;
    const fn = (e) => {
      if (e.key === "Escape") {
        if (lb.open) closeLb();
        else if (menuOpen) setMenuOpen(false);
      }
      if (!lb.open) return;
      if (e.key === "ArrowRight") nav(1);
      if (e.key === "ArrowLeft")  nav(-1);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [lb.open, menuOpen]);

  useEffect(() => {
    const lock = lb.open || menuOpen;
    document.body.style.overflow = lock ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lb.open, menuOpen]);

  const openLb  = (items, idx, el) => {
    lbReturnFocus.current = el ?? null;
    setLb({ open: true, idx, items });
  };
  const closeLb = () => {
    setLb((l) => ({ ...l, open: false }));
    setTimeout(() => lbReturnFocus.current?.focus(), 0);
  };
  const nav     = (d) => setLb((l) => ({ ...l, idx: (l.idx + d + l.items.length) % l.items.length }));

  const filtered = filter === "All" ? GALLERY : GALLERY.filter((i) => i.cat === filter);
  const visible  = showAll ? filtered : filtered.slice(0, 12);

  const fc = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const fs = (e) => { e.preventDefault(); setDone(true); };

  return (
    <>
      {/* NAV */}
      <nav
        className={`fixed inset-x-0 top-0 z-[200] flex items-center justify-between transition-all duration-300 border-b ${
          scrolled
            ? "py-4 px-6 md:px-[60px] bg-[rgba(14,12,10,0.94)] backdrop-blur-[14px] border-line"
            : "py-7 px-6 md:px-[60px] border-transparent"
        }`}
      >
        <a href="#top" className="font-serif text-[22px] tracking-[0.12em] text-gold no-underline flex flex-col leading-none">
          LUMIÈRE STUDIO
          <span className="text-[10px] font-sans tracking-[0.25em] text-ink-muted mt-[3px]">
            Fine Art Photography
          </span>
        </a>
        <ul className="hidden md:flex gap-10 list-none">
          {[
            { href: "#collections", label: "Portfolio" },
            { href: "#about",       label: "About" },
            { href: "#packages",    label: "Investment" },
            { href: "#contact",     label: "Contact" },
          ].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link text-[11px] tracking-[0.18em] uppercase text-ink-muted no-underline transition-colors hover:text-gold-light"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-block text-[11px] tracking-[0.18em] uppercase border border-line-strong text-gold px-6 py-2.5 no-underline transition-colors hover:bg-gold hover:text-bg"
        >
          Book a Consultation
        </a>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] border border-line-strong text-gold"
        >
          <span className="block w-4 h-px bg-gold" />
          <span className="block w-4 h-px bg-gold" />
          <span className="block w-4 h-px bg-gold" />
        </button>
      </nav>

      {/* MOBILE MENU */}
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
          {[
            { href: "#collections", label: "Portfolio" },
            { href: "#about",       label: "About" },
            { href: "#packages",    label: "Investment" },
            { href: "#contact",     label: "Contact" },
          ].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-[15px] tracking-[0.22em] uppercase text-ink-muted no-underline transition-colors hover:text-gold-light"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="text-[11px] tracking-[0.18em] uppercase border border-line-strong text-gold px-8 py-3 no-underline transition-colors hover:bg-gold hover:text-bg"
        >
          Book a Consultation
        </a>
      </div>

      {/* HERO */}
      <section id="top" className="min-h-screen grid md:grid-cols-2 grid-cols-1 overflow-hidden">
        <div className="md:hidden relative h-[60vh] overflow-hidden">
          <img
            src={HERO[0]}
            alt="Bride and groom in soft light"
            loading="eager"
            className="w-full h-full object-cover brightness-[0.6] saturate-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg" />
        </div>
        <div className="flex flex-col justify-center z-[2] px-7 md:px-20 pt-12 md:pt-[160px] pb-20">
          <p className="hero-eyebrow text-[11px] tracking-[0.25em] uppercase text-gold mb-8 flex items-center gap-4">
            Fine Art Wedding &amp; Portrait Photography
          </p>
          <h1 className="font-serif text-[clamp(52px,5.5vw,86px)] font-light leading-[1.05] text-ink mb-8">
            Every love story<br />
            deserves to be<br />
            <em className="italic text-gold-light">beautifully told.</em>
          </h1>
          <p className="text-[15px] leading-[1.75] text-ink-muted max-w-[380px] mb-14">
            Timeless imagery crafted with intention — for couples and individuals who believe their moments deserve to live forever in art.
          </p>
          <div className="flex gap-5 items-center">
            <a
              href="#collections"
              className="bg-gold text-bg text-[11px] tracking-[0.18em] uppercase px-10 py-4 no-underline font-medium transition-all hover:bg-gold-light hover:-translate-y-px"
            >
              View Portfolio
            </a>
            <a
              href="#packages"
              className="btn-ghost text-[11px] tracking-[0.18em] uppercase text-ink-muted no-underline inline-flex items-center gap-2.5 transition-colors hover:text-gold"
            >
              Explore Investment
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden hidden md:block">
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-[60%_40%] gap-[3px]">
            <div className="hero-cell overflow-hidden col-span-2">
              <img src={HERO[0]} alt="Wedding" loading="eager" className="w-full h-full object-cover brightness-[0.75] saturate-[0.9]" />
            </div>
            <div className="hero-cell overflow-hidden">
              <img src={HERO[1]} alt="Couple" loading="eager" className="w-full h-full object-cover brightness-[0.75] saturate-[0.9]" />
            </div>
            <div className="hero-cell overflow-hidden">
              <img src={HERO[2]} alt="Portrait" loading="eager" className="w-full h-full object-cover brightness-[0.75] saturate-[0.9]" />
            </div>
          </div>
          <div className="absolute bottom-12 -left-[60px] bg-surface border border-line px-8 py-6 flex gap-10 z-[3]">
            {[
              { n: "380+", l: "Weddings" },
              { n: "12",   l: "Years" },
              { n: "40+",  l: "Destinations" },
            ].map((s) => (
              <div key={s.l}>
                <span className="font-serif text-4xl font-light text-gold leading-none block">{s.n}</span>
                <span className="text-[10px] tracking-[0.18em] uppercase text-ink-muted block mt-1.5">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="px-7 md:px-[60px] py-20 md:py-[100px]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-14">
          <div>
            <p className="sec-label text-[10px] tracking-[0.28em] uppercase text-gold font-medium flex items-center gap-4 mb-4">
              Browse by Collection
            </p>
            <h2 className="font-serif text-[clamp(36px,3.8vw,58px)] font-light leading-[1.1]">
              A world of<br />
              <em className="italic text-gold-light">beautiful moments.</em>
            </h2>
          </div>
          <p className="max-w-[300px] text-sm leading-[1.7] text-ink-muted">
            Five distinct collections spanning weddings, portraits, engagements, editorial, and destination work across four continents.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-1.5">
          {COLS.map((c, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setFilter(c.cat);
                setShowAll(false);
                document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
              }}
              className="img-zoom relative overflow-hidden cursor-pointer aspect-[3/4] text-left"
            >
              <img
                src={c.src}
                alt={c.name}
                loading="lazy"
                className="w-full h-full object-cover brightness-[0.7] saturate-[0.8]"
              />
              <div className="absolute inset-x-0 bottom-0 px-5 py-6 bg-gradient-to-t from-[rgba(14,12,10,0.9)] to-transparent">
                <span className="font-serif text-[18px] text-ink block">{c.name}</span>
                <span className="text-[10px] tracking-[0.16em] uppercase text-gold block mt-1">{c.count}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-7 md:px-[60px] pb-20 md:pb-[120px] border-t border-line">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 pt-20 md:pt-[100px] mb-14">
          <div>
            <p className="sec-label text-[10px] tracking-[0.28em] uppercase text-gold font-medium flex items-center gap-4 mb-4">
              Gallery
            </p>
            <h2 className="font-serif text-[clamp(36px,3.8vw,58px)] font-light leading-[1.1]">
              A curated<br />
              <em className="italic text-gold-light">collection.</em>
            </h2>
          </div>
          <div>
            <p className="max-w-[300px] text-sm leading-[1.7] text-ink-muted">
              Each image is a chapter in a story worth returning to. Click any image to explore fullscreen.
            </p>
            <div className="flex flex-wrap gap-1 mt-7">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => { setFilter(f); setShowAll(false); }}
                  className={`text-[11px] tracking-[0.14em] uppercase px-5 py-2 border cursor-pointer font-sans font-normal transition-all ${
                    filter === f
                      ? "bg-gold text-bg border-gold"
                      : "bg-transparent text-ink-muted border-line hover:bg-gold hover:text-bg hover:border-gold"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="masonry">
          {visible.map((item, i) => (
            <button
              type="button"
              key={`${filter}-${i}`}
              onClick={(e) => openLb(filtered, filtered.indexOf(item), e.currentTarget)}
              aria-label={`Open ${item.title} — ${item.tag}`}
              className="relative overflow-hidden group block w-full text-left bg-transparent border-0 p-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full block brightness-[0.82] saturate-[0.88] transition-all duration-500 group-hover:scale-[1.04] group-hover:brightness-[0.95] group-hover:saturate-[1.05]"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end px-[18px] py-5 bg-gradient-to-t from-[rgba(14,12,10,0.82)] via-[rgba(14,12,10,0.4)] to-transparent">
                <div className="font-serif text-base text-ink">{item.title}</div>
                <div className="text-[9px] tracking-[0.18em] uppercase text-gold mt-1">{item.tag}</div>
              </div>
            </button>
          ))}
        </div>

        {!showAll && filtered.length > 12 && (
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="block mx-auto mt-14 bg-transparent border border-line-strong text-gold text-[11px] tracking-[0.18em] uppercase px-12 py-3.5 cursor-pointer transition-colors hover:bg-gold hover:text-bg"
          >
            Load More — {filtered.length - 12} Remaining
          </button>
        )}
      </section>

      {/* PARALLAX DIVIDER */}
      <div className="relative h-[300px] md:h-[480px] overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=65"
          alt=""
          aria-hidden="true"
          className="absolute -inset-[10%] w-[120%] h-[120%] object-cover brightness-[0.35] saturate-[0.65]"
        />
        <div className="absolute inset-10 border border-[rgba(201,169,110,0.22)] pointer-events-none z-[3]" />
        <div className="relative z-[2] text-center px-10">
          <blockquote className="font-serif text-[clamp(26px,4vw,50px)] font-light italic text-ink leading-[1.35] max-w-[800px]">
            "Photography is the story I fail to put into words."
          </blockquote>
          <cite className="not-italic block font-sans text-[11px] tracking-[0.2em] uppercase text-gold mt-6">
            — Destin Sparks
          </cite>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="px-7 md:px-[60px] py-20 md:py-[120px] bg-surface border-y border-line grid md:grid-cols-2 grid-cols-1 gap-16 md:gap-[100px] items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1000&q=85"
            alt="Photographer"
            className="w-full aspect-[4/5] object-cover brightness-[0.88] saturate-[0.9]"
          />
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=85"
            alt="Studio"
            className="hidden md:block absolute -bottom-8 -right-8 w-[55%] aspect-square object-cover border-4 border-bg brightness-[0.84]"
          />
          <div className="absolute top-10 -left-7 w-[90px] h-[90px] bg-gold flex flex-col items-center justify-center">
            <span className="font-serif text-[28px] text-bg leading-none">12</span>
            <span className="text-[9px] tracking-[0.12em] uppercase text-bg mt-1">Years</span>
          </div>
        </div>
        <div>
          <p className="sec-label text-[10px] tracking-[0.28em] uppercase text-gold font-medium flex items-center gap-4 mb-4">
            About the Studio
          </p>
          <h2 className="font-serif text-[clamp(36px,3.8vw,58px)] font-light leading-[1.1]">
            Where light<br />
            meets <em className="italic text-gold-light">memory.</em>
          </h2>
          <p className="text-[15px] leading-[1.8] text-ink-muted my-6">
            Lumière Studio was founded on a single belief: that photography at its finest is not documentation — it is art. We travel the world chasing extraordinary light and extraordinary love, bringing the same reverence to an intimate portrait session as to a grand destination wedding.
          </p>
          <p className="text-[15px] leading-[1.8] text-ink-muted my-6">
            Our team of four photographers works with no more than 40 couples per year — because every love story deserves our undivided attention. We believe the best images happen when you forget we're there.
          </p>
          <div className="flex gap-4 flex-wrap my-7">
            {["Vogue Weddings", "Harper's Bazaar Bride", "Martha Stewart Weddings", "Style Me Pretty"].map((p, i) => (
              <span key={i} className="text-xs tracking-[0.1em] border border-line px-3.5 py-[7px] text-ink-muted italic font-serif">
                {p}
              </span>
            ))}
          </div>
          <span className="font-serif text-[32px] italic text-gold-light font-light block mb-1">Céline Dupont</span>
          <span className="text-[11px] tracking-[0.2em] uppercase text-ink-muted">Lead Photographer &amp; Founder</span>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-7 md:px-[60px] py-20 md:py-[120px]">
        <div className="text-center mb-20">
          <p className="sec-label sec-label-center text-[10px] tracking-[0.28em] uppercase text-gold font-medium inline-flex items-center gap-4 mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-[clamp(36px,3.8vw,58px)] font-light leading-[1.1]">
            Your journey,<br />
            <em className="italic text-gold-light">from first hello to forever.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-0.5 gap-2">
          {[
            { num: "01", title: "Consultation",   body: "We begin with an unhurried conversation — in person, by video, or phone. We want to understand your story, your vision, and what matters most to you." },
            { num: "02", title: "Planning",       body: "Together we curate your shot list, coordinate your timeline, and scout locations. We handle every detail so you can be fully present on your day." },
            { num: "03", title: "The Experience", body: "On the day we work with quiet confidence — unobtrusive and fully present. Our goal is images that feel real, not staged." },
            { num: "04", title: "Delivery",       body: "Your gallery is delivered within 6–8 weeks, each image hand-edited to luminous perfection. Albums and prints follow on your chosen timeline." },
          ].map((s, i) => (
            <div key={i} className="px-9 py-12 border border-line bg-surface transition-colors hover:border-line-strong">
              <div className="font-serif text-[64px] font-light text-gold-dim leading-none mb-5 opacity-60">{s.num}</div>
              <div className="font-serif text-[22px] text-ink mb-3.5">{s.title}</div>
              <div className="text-[13px] leading-[1.75] text-ink-muted">{s.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="px-7 md:px-[60px] py-20 md:py-[120px] border-t border-line">
        <div className="text-center mb-20">
          <p className="sec-label sec-label-center text-[10px] tracking-[0.28em] uppercase text-gold font-medium inline-flex items-center gap-4 mb-4">
            Investment
          </p>
          <h2 className="font-serif text-[clamp(36px,3.8vw,58px)] font-light leading-[1.1]">
            Find your<br />
            <em className="italic text-gold-light">perfect collection.</em>
          </h2>
          <p className="text-[15px] leading-[1.7] text-ink-muted max-w-[500px] mx-auto mt-5">
            Every package is a starting point — we tailor each proposal to your unique story, timeline, and vision.
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0.5 gap-3">
          {PACKAGES.map((p, i) => (
            <div
              key={i}
              className={`relative p-11 border transition-colors ${
                p.feat
                  ? "bg-surface2 border-gold-dim"
                  : "bg-surface border-line hover:border-line-strong"
              }`}
            >
              {p.feat && (
                <span className="absolute -top-px left-1/2 -translate-x-1/2 bg-gold text-[9px] tracking-[0.2em] uppercase text-bg px-5 py-1.5 font-medium whitespace-nowrap">
                  Most Popular
                </span>
              )}
              <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-5">{p.tier}</p>
              <h3 className="font-serif text-[32px] font-light text-ink mb-2">{p.name}</h3>
              <div className="font-serif text-[52px] font-light text-gold leading-none mb-1">
                <sup className="text-2xl align-super">$</sup>
                {p.price}
              </div>
              <p className="text-xs text-ink-muted tracking-[0.08em] mb-9">{p.note}</p>
              <div className="h-px bg-line mb-7" />
              <ul className="list-none flex flex-col gap-3.5">
                {p.feats.map((f, j) => (
                  <li key={j} className="pkg-feat text-sm text-ink-muted leading-[1.5] flex gap-3.5 items-start">
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center mt-11 text-[11px] tracking-[0.18em] uppercase px-8 py-3.5 no-underline font-medium transition-all ${
                  p.style === "sol"
                    ? "bg-gold text-bg hover:bg-gold-light"
                    : "border border-line-strong text-gold hover:bg-gold hover:text-bg"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-[72px]">
          <p className="sec-label text-[10px] tracking-[0.28em] uppercase text-gold font-medium flex items-center gap-4 mb-4">
            À La Carte Add-Ons
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-12">
            {ADDONS.map((a, i) => (
              <div key={i} className="border border-line p-7 bg-surface">
                <div className="font-serif text-lg text-ink mb-2">{a.name}</div>
                <div className="text-[13px] text-gold tracking-[0.06em]">{a.price}</div>
                <div className="text-xs text-ink-muted leading-[1.6] mt-2">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center mt-14 text-[13px] text-ink-muted tracking-[0.04em]">
          All packages include initial consultation · Payment plans available · International travel welcome
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-7 md:px-[60px] py-20 md:py-[120px] bg-surface border-y border-line">
        <div className="text-center mb-14">
          <p className="sec-label sec-label-center text-[10px] tracking-[0.28em] uppercase text-gold font-medium inline-flex items-center gap-4 mb-4">
            Kind Words
          </p>
          <h2 className="font-serif text-[clamp(36px,3.8vw,58px)] font-light leading-[1.1]">
            From those who<br />
            <em className="italic text-gold-light">trusted us.</em>
          </h2>
        </div>
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=70"
          alt="Wedding moment"
          loading="lazy"
          className="w-full aspect-[21/7] object-cover object-[center_40%] brightness-[0.72] saturate-[0.8] mb-14"
        />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {TESTI.map((t, i) => (
            <div key={i} className="px-9 py-11 border border-line bg-bg relative">
              <div className="text-gold text-xs tracking-[3px] mb-5">{"★".repeat(t.stars)}</div>
              <p className="font-serif text-[17px] italic leading-[1.7] text-ink-muted">"{t.body}"</p>
              <div className="mt-7 flex items-center gap-4">
                <img
                  src={t.av}
                  alt={t.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover grayscale-[20%] border-2 border-line-strong"
                />
                <div>
                  <div className="text-[13px] text-ink tracking-[0.04em]">{t.name}</div>
                  <div className="text-[10px] tracking-[0.12em] uppercase text-gold mt-0.5">{t.event}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-7 md:px-[60px] py-20 md:py-[120px] grid md:grid-cols-2 grid-cols-1 gap-16 md:gap-[100px]">
        <div>
          <p className="sec-label text-[10px] tracking-[0.28em] uppercase text-gold font-medium flex items-center gap-4 mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-[clamp(36px,3.8vw,58px)] font-light leading-[1.1]">
            Begin your<br />
            <em className="italic text-gold-light">story with us.</em>
          </h2>
          <p className="text-[15px] leading-[1.8] text-ink-muted mt-6 mb-12">
            We'd love to hear about your vision. Every inquiry receives a personal response within 24 hours. We are currently accepting bookings for 2026 and 2027.
          </p>
          <div className="flex flex-col gap-6 mt-12">
            {[
              { icon: "✦", label: "Email",         val: "hello@lumierestudio.com" },
              { icon: "◎", label: "Studio",        val: "Paris · New York · London\nAvailable worldwide" },
              { icon: "◇", label: "Consultations", val: "In-person, video, or phone\nTue–Sat · 10am–6pm" },
            ].map((c, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-10 h-10 border border-line flex-shrink-0 flex items-center justify-center text-sm text-gold">
                  {c.icon}
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-gold mb-1">{c.label}</div>
                  <div className="text-sm text-ink-muted leading-[1.5] whitespace-pre-line">{c.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {done ? (
            <div className="flex flex-col justify-center h-full gap-4">
              <div className="text-[52px] font-serif text-gold font-light">✦</div>
              <h3 className="font-serif text-[36px] font-light text-ink leading-[1.2]">Thank you for reaching out.</h3>
              <p className="text-[15px] text-ink-muted leading-[1.7] max-w-[380px]">
                We've received your inquiry and will respond personally within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setDone(false)}
                className="bg-gold text-bg text-[11px] tracking-[0.18em] uppercase px-10 py-4 font-medium border-none cursor-pointer transition-all hover:bg-gold-light hover:-translate-y-px mt-3 self-start"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={fs}>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="f-name" className="text-[10px] tracking-[0.2em] uppercase text-gold">Your Name</label>
                  <input id="f-name" name="name" className="f-input" placeholder="Elena Marchetti" value={form.name} onChange={fc} required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="f-partner" className="text-[10px] tracking-[0.2em] uppercase text-gold">Partner's Name</label>
                  <input id="f-partner" name="partner" className="f-input" placeholder="Marco Ricci" value={form.partner} onChange={fc} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="f-email" className="text-[10px] tracking-[0.2em] uppercase text-gold">Email Address</label>
                <input id="f-email" name="email" type="email" className="f-input" placeholder="hello@youremail.com" value={form.email} onChange={fc} required />
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="f-date" className="text-[10px] tracking-[0.2em] uppercase text-gold">Event Date</label>
                  <input id="f-date" name="date" className="f-input" placeholder="June 2026" value={form.date} onChange={fc} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="f-type" className="text-[10px] tracking-[0.2em] uppercase text-gold">Session Type</label>
                  <select
                    id="f-type"
                    name="type"
                    className="f-input"
                    value={form.type}
                    onChange={fc}
                    style={{ color: form.type ? "#f5f0e8" : "#7a6340" }}
                  >
                    <option value="" disabled>Select type…</option>
                    <option>Wedding</option>
                    <option>Engagement</option>
                    <option>Portrait</option>
                    <option>Editorial</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="f-message" className="text-[10px] tracking-[0.2em] uppercase text-gold">Your Vision</label>
                <textarea
                  id="f-message"
                  name="message"
                  className="f-input f-input-area"
                  placeholder="Share your story, venue ideas, and anything that feels important…"
                  value={form.message}
                  onChange={fc}
                />
              </div>
              <button
                type="submit"
                className="bg-gold text-bg border-none text-[11px] tracking-[0.18em] uppercase px-12 py-[18px] cursor-pointer self-start font-medium transition-all hover:bg-gold-light hover:-translate-y-px"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
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
              <li><a href="#collections" className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Portfolio</a></li>
              <li><a href="#about" className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">About Us</a></li>
              <li><a href="#packages" className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Investment</a></li>
              <li><a href="#contact" className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-gold mb-5">Services</div>
            <ul className="list-none flex flex-col gap-3">
              <li><a href="#gallery" className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Wedding Photography</a></li>
              <li><a href="#gallery" className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Bridal Portraits</a></li>
              <li><a href="#gallery" className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Engagement Sessions</a></li>
              <li><a href="#gallery" className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Editorial</a></li>
              <li><a href="#gallery" className="text-[13px] text-ink-muted no-underline transition-colors hover:text-gold-light">Destination Weddings</a></li>
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

      {/* LIGHTBOX */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={lb.items[lb.idx] ? `Image viewer — ${lb.items[lb.idx].title}` : "Image viewer"}
        aria-hidden={!lb.open}
        className={`fixed inset-0 z-[1000] bg-[rgba(5,4,3,0.97)] flex items-center justify-center transition-opacity duration-300 ${
          lb.open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeLb}
      >
        <span className="fixed top-8 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.18em] text-ink-muted">
          {lb.idx + 1} / {lb.items.length}
        </span>
        <button
          type="button"
          onClick={closeLb}
          className="fixed top-7 right-9 text-3xl text-gold cursor-pointer bg-transparent border-none font-extralight leading-none z-10"
          aria-label="Close"
        >
          ×
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); nav(-1); }}
          className="fixed top-1/2 -translate-y-1/2 left-2 md:left-7 w-[52px] h-[52px] flex items-center justify-center bg-[rgba(14,12,10,0.75)] border border-line text-gold text-[22px] cursor-pointer transition-colors hover:bg-gold hover:text-bg z-10"
          aria-label="Previous"
        >
          ‹
        </button>
        <div onClick={(e) => e.stopPropagation()}>
          {lb.items[lb.idx] && (
            <img
              className="max-w-[96vw] md:max-w-[80vw] max-h-[84vh] object-contain block"
              src={lb.items[lb.idx].src}
              alt={lb.items[lb.idx].title}
            />
          )}
        </div>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); nav(1); }}
          className="fixed top-1/2 -translate-y-1/2 right-2 md:right-7 w-[52px] h-[52px] flex items-center justify-center bg-[rgba(14,12,10,0.75)] border border-line text-gold text-[22px] cursor-pointer transition-colors hover:bg-gold hover:text-bg z-10"
          aria-label="Next"
        >
          ›
        </button>
        {lb.items[lb.idx] && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-center">
            <div className="font-serif text-xl text-ink italic">{lb.items[lb.idx].title}</div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-gold mt-1">{lb.items[lb.idx].tag}</div>
          </div>
        )}
      </div>
    </>
  );
}
