import PageHeader from "../components/PageHeader";
import { TESTI } from "../data";

const PROCESS = [
  { num: "01", title: "Consultation",   body: "We begin with an unhurried conversation — in person, by video, or phone. We want to understand your story, your vision, and what matters most to you." },
  { num: "02", title: "Planning",       body: "Together we curate your shot list, coordinate your timeline, and scout locations. We handle every detail so you can be fully present on your day." },
  { num: "03", title: "The Experience", body: "On the day we work with quiet confidence — unobtrusive and fully present. Our goal is images that feel real, not staged." },
  { num: "04", title: "Delivery",       body: "Your gallery is delivered within 6–8 weeks, each image hand-edited to luminous perfection. Albums and prints follow on your chosen timeline." },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the Studio"
        title="Where light"
        em="meets memory."
        sub="A small atelier of four photographers, working with no more than 40 couples per year, traveling the world chasing extraordinary light."
      />

      {/* BIO */}
      <section className="px-7 md:px-[60px] pb-20 md:pb-[120px] grid md:grid-cols-2 grid-cols-1 gap-16 md:gap-[100px] items-center">
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
          <h2 className="font-serif text-[clamp(32px,3vw,46px)] font-light leading-[1.15] mb-6">
            A studio built on <em className="italic text-gold-light">reverence.</em>
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
      <section className="px-7 md:px-[60px] py-20 md:py-[120px] bg-surface border-y border-line">
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
          {PROCESS.map((s, i) => (
            <div key={i} className="px-9 py-12 border border-line bg-bg transition-colors hover:border-line-strong">
              <div className="font-serif text-[64px] font-light text-gold-dim leading-none mb-5 opacity-60">{s.num}</div>
              <div className="font-serif text-[22px] text-ink mb-3.5">{s.title}</div>
              <div className="text-[13px] leading-[1.75] text-ink-muted">{s.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-7 md:px-[60px] py-20 md:py-[120px]">
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
            <div key={i} className="px-9 py-11 border border-line bg-surface relative">
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
    </>
  );
}
