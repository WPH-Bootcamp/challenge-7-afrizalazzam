import { useState } from "react";

const images = import.meta.glob<string>(
  "../../assets/img/industry/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const imgFor = (file: string): string | undefined =>
  Object.entries(images).find(([p]) => p.endsWith(`/${file}`))?.[1];

const tabs = [
  {
    label: "Fintech",
    img: "fintech.png",
    text: "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
  },
  {
    label: "E-Commerce",
    img: "ecommerce.png",
    text: "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
  },
  {
    label: "Healthcare",
    img: "healthcare.png",
    text: "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
  },
];

function Industry() {
  const [active, setActive] = useState(0);
  const current = tabs[active];
  const src = imgFor(current.img);

  return (
    <section id="industry" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Built for Your Industry
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
          We&apos;ve helped companies across industries launch smarter, faster,
          and more securely.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-12">
          <div className="flex flex-col gap-1">
            {tabs.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`cursor-pointer border-l-2 py-2 pl-4 text-left text-lg font-semibold transition-colors ${
                    isActive
                      ? "border-brand-500 text-ink"
                      : "border-line text-muted hover:text-ink"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <div>
            <p className="max-w-2xl text-base leading-relaxed text-ink sm:text-lg">
              {current.text}
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-line">
              {src ? (
                <img src={src} alt={current.label} className="aspect-video w-full object-cover" />
              ) : (
                <div className="aspect-video w-full bg-subtle" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Industry;