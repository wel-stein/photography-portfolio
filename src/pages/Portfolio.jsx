import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GALLERY, FILTERS } from "../data";
import PageHeader from "../components/PageHeader";
import Lightbox from "../components/Lightbox";

export default function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "All";
  const [showAll, setShowAll] = useState(false);
  const [lb, setLb] = useState({ open: false, idx: 0, items: [] });
  const returnFocus = useRef(null);

  const setFilter = (f) => {
    if (f === "All") setSearchParams({});
    else setSearchParams({ filter: f });
    setShowAll(false);
  };

  const filtered = filter === "All" ? GALLERY : GALLERY.filter((i) => i.cat === filter);
  const visible  = showAll ? filtered : filtered.slice(0, 12);

  const openLb = (items, idx, el) => {
    returnFocus.current = el ?? null;
    setLb({ open: true, idx, items });
  };
  const closeLb = () => setLb((l) => ({ ...l, open: false }));
  const navLb   = (d) => setLb((l) => ({ ...l, idx: (l.idx + d + l.items.length) % l.items.length }));

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A curated"
        em="collection."
        sub="Each image is a chapter in a story worth returning to. Click any image to explore fullscreen."
      />

      <section className="px-7 md:px-[60px] pb-20 md:pb-[120px]">
        <div className="flex flex-wrap gap-1 justify-center mb-14">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
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

      <Lightbox
        open={lb.open}
        idx={lb.idx}
        items={lb.items}
        onClose={closeLb}
        onNav={navLb}
        returnFocusRef={returnFocus}
      />
    </>
  );
}
