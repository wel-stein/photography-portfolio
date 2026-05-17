import { Link, useNavigate } from "react-router-dom";
import { HERO, COLS } from "../data";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen grid md:grid-cols-2 grid-cols-1 overflow-hidden">
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
            <Link
              to="/portfolio"
              className="bg-gold text-bg text-[11px] tracking-[0.18em] uppercase px-10 py-4 no-underline font-medium transition-all hover:bg-gold-light hover:-translate-y-px"
            >
              View Portfolio
            </Link>
            <Link
              to="/investment"
              className="btn-ghost text-[11px] tracking-[0.18em] uppercase text-ink-muted no-underline inline-flex items-center gap-2.5 transition-colors hover:text-gold"
            >
              Explore Investment
            </Link>
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
      <section className="px-7 md:px-[60px] py-20 md:py-[100px]">
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
              onClick={() => navigate(`/portfolio?filter=${encodeURIComponent(c.cat)}`)}
              className="img-zoom relative overflow-hidden cursor-pointer aspect-[3/4] text-left bg-transparent border-0 p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              aria-label={`View ${c.name} collection`}
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

      {/* ABOUT TEASER */}
      <section className="px-7 md:px-[60px] py-20 md:py-[120px] bg-surface border-y border-line grid md:grid-cols-2 grid-cols-1 gap-16 md:gap-[100px] items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1000&q=85"
            alt="Photographer"
            className="w-full aspect-[4/5] object-cover brightness-[0.88] saturate-[0.9]"
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
            Lumière Studio was founded on a single belief: that photography at its finest is not documentation — it is art. We travel the world chasing extraordinary light and extraordinary love.
          </p>
          <Link
            to="/about"
            className="btn-ghost inline-flex items-center gap-2.5 text-[11px] tracking-[0.18em] uppercase text-gold no-underline transition-colors hover:text-gold-light mt-4"
          >
            Read Our Story
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-7 md:px-[60px] py-20 md:py-[120px] text-center">
        <p className="sec-label sec-label-center text-[10px] tracking-[0.28em] uppercase text-gold font-medium inline-flex items-center gap-4 mb-4">
          Begin
        </p>
        <h2 className="font-serif text-[clamp(36px,3.8vw,58px)] font-light leading-[1.1]">
          Ready to write<br />
          <em className="italic text-gold-light">your story?</em>
        </h2>
        <p className="text-[15px] leading-[1.7] text-ink-muted max-w-[500px] mx-auto mt-6 mb-10">
          We're currently accepting bookings for 2026 and 2027. Every inquiry receives a personal response within 24 hours.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-gold text-bg text-[11px] tracking-[0.18em] uppercase px-12 py-4 no-underline font-medium transition-all hover:bg-gold-light hover:-translate-y-px"
        >
          Book a Consultation
        </Link>
      </section>
    </>
  );
}
