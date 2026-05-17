import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { PACKAGES, ADDONS } from "../data";

export default function Investment() {
  return (
    <>
      <PageHeader
        eyebrow="Investment"
        title="Find your"
        em="perfect collection."
        sub="Every package is a starting point — we tailor each proposal to your unique story, timeline, and vision."
      />

      <section className="px-7 md:px-[60px] pb-20 md:pb-[120px]">
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
              <Link
                to="/contact"
                className={`block text-center mt-11 text-[11px] tracking-[0.18em] uppercase px-8 py-3.5 no-underline font-medium transition-all ${
                  p.style === "sol"
                    ? "bg-gold text-bg hover:bg-gold-light"
                    : "border border-line-strong text-gold hover:bg-gold hover:text-bg"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20">
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
    </>
  );
}
