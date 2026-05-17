import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", partner: "", email: "", date: "", type: "", message: "" });

  const fc = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const fs = (e) => { e.preventDefault(); setDone(true); };

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Begin your"
        em="story with us."
        sub="Every inquiry receives a personal response within 24 hours. We are currently accepting bookings for 2026 and 2027."
      />

      <section className="px-7 md:px-[60px] pb-20 md:pb-[120px] grid md:grid-cols-2 grid-cols-1 gap-16 md:gap-[100px]">
        <div>
          <h2 className="font-serif text-[clamp(28px,2.6vw,40px)] font-light leading-[1.15] mb-8">
            Where to <em className="italic text-gold-light">find us.</em>
          </h2>
          <div className="flex flex-col gap-6">
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
                onClick={() => { setDone(false); setForm({ name: "", partner: "", email: "", date: "", type: "", message: "" }); }}
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
    </>
  );
}
