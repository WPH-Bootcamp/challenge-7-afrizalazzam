import { useState, useEffect } from "react";

const avatars = import.meta.glob<string>(
  "../../assets/img/testimonials/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const avatarFor = (file: string): string | undefined =>
  Object.entries(avatars).find(([p]) => p.endsWith(`/${file}`))?.[1];

const base = {
  name: "Sarah Tan",
  role: "Product Manager at Finovate",
  quote:
    "The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.",
  avatar: "sarah.png",
};
const testimonials = [base, base, base];

function Stars() {
  return (
    <div className="flex justify-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="22" height="22" viewBox="0 0 24 24" className="text-amber-400" fill="currentColor">
          <path d="M12 2l3 6.5 7 .8-5.2 4.7 1.4 6.9L12 17.8 5.4 20.9l1.4-6.9L1.6 9.3l7-.8L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestiCard({ t }: { t: typeof base }) {
  const src = avatarFor(t.avatar);
  return (
    <div className="relative rounded-2xl border border-line bg-subtle px-7 pb-14 pt-12 text-center shadow-lg shadow-black/5">
      <svg width="40" height="32" viewBox="0 0 44 34" className="absolute left-6 top-6 text-brand-500" fill="currentColor" aria-hidden="true">
        <path d="M0 34V19C0 9 6 1 17 0l2 5c-6 2-9 6-9 11h7v18H0zm24 0V19C24 9 30 1 41 0l2 5c-6 2-9 6-9 11h7v18H24z" />
      </svg>

      <Stars />
      <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink">
        &ldquo;{t.quote}&rdquo;
      </p>
      <p className="mt-6 font-semibold text-ink">{t.name}</p>
      <p className="mt-1 text-sm font-medium text-brand-500">{t.role}</p>

      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2">
        {src ? (
          <img src={src} alt={t.name} className="h-14 w-14 rounded-full border-4 border-canvas object-cover" />
        ) : (
          <div className="h-14 w-14 rounded-full border-4 border-canvas bg-line" />
        )}
      </div>
    </div>
  );
}

function Arrow({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "left" ? "Previous" : "Next"}
      className={`absolute top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-line bg-subtle text-ink shadow-sm transition-colors hover:bg-brand-500 hover:text-white ${
        dir === "left" ? "left-0 -translate-x-1/2 lg:-translate-x-[150%]" : "right-0 translate-x-1/2 lg:translate-x-[150%]"
      }`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;
  const go = (i: number) => setActive((i + n) % n);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), 5000);
    return () => clearInterval(id);
  }, [paused, n]);

  return (
    <section id="testimonials" className="overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            What Partners Say About Working With Us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        <div
          className="relative mx-auto mt-16 max-w-xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Arrow dir="left" onClick={() => go(active - 1)} />
          <Arrow dir="right" onClick={() => go(active + 1)} />

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full shrink-0 px-1 pb-10">
                  <TestiCard t={t} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === active ? "bg-brand-500" : "bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;