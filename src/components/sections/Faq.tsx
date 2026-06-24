import { useState } from "react";

const images = import.meta.glob<string>(
  "../../assets/img/faq/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const consultImg = Object.values(images)[0];

const faqs = [
  { q: "What services do you offer?", a: "We provide custom web/app development, cloud solutions, UX/UI design, and more." },
  { q: "How do I know if this is right for my business?", a: "If you want to build, scale, or modernize digital products, we can help — book a quick call and we'll assess your needs." },
  { q: "How much does a project cost?", a: "It depends on scope and complexity. After understanding your requirements, we provide a transparent estimate." },
  { q: "How long does it take?", a: "Timelines vary by scope — a landing page may take 1–2 weeks, while larger apps take 1–3 months." },
  { q: "Can I start with a small project first?", a: "Absolutely. Many clients start small to build trust before scaling up." },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const toggle = (i: number) => setOpen((p) => (p === i ? null : i));

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:max-w-sm lg:text-5xl">
            Need Help? Start Here.
          </h2>
          <p className="text-base text-muted lg:max-w-xs lg:text-right">
            Everything you need to know — all in one place.
          </p>
        </div>
        <hr className="mt-6 border-line" />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
          <div>
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-ink sm:text-lg">{item.q}</span>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-ink">
                      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      {!isOpen && <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}
                    </svg>
                  </button>
                  {isOpen && (
                    <p className="pb-5 text-sm leading-relaxed text-muted sm:text-base">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>

          <aside className="self-start rounded-3xl bg-brand-500 p-6 text-white">
            <h3 className="text-2xl font-extrabold leading-tight">Let&apos;s talk it through</h3>
            <p className="mt-2 text-sm text-white/90">book a free consultation with our team.</p>
            <div className="mt-5 overflow-hidden rounded-xl">
              {consultImg ? (
                <img src={consultImg} alt="Consultation" className="aspect-[4/3] w-full object-cover" />
              ) : (
                <div className="aspect-[4/3] w-full bg-white/20" />
              )}
            </div>
            
            <a href="#contact"
              className="mt-5 block rounded-full bg-black py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
            >
              Free Consultation
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Faq;