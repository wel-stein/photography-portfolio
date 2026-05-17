export default function PageHeader({ eyebrow, title, em, sub }) {
  return (
    <header className="px-7 md:px-[60px] pt-[120px] md:pt-[160px] pb-12 md:pb-20 text-center">
      <p className="sec-label sec-label-center text-[10px] tracking-[0.28em] uppercase text-gold font-medium inline-flex items-center gap-4 mb-4">
        {eyebrow}
      </p>
      <h1 className="font-serif text-[clamp(40px,4.5vw,68px)] font-light leading-[1.1]">
        {title}
        {em && (
          <>
            <br />
            <em className="italic text-gold-light">{em}</em>
          </>
        )}
      </h1>
      {sub && (
        <p className="text-[15px] leading-[1.7] text-ink-muted max-w-[560px] mx-auto mt-6">
          {sub}
        </p>
      )}
    </header>
  );
}
