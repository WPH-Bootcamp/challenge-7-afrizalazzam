const iconModules = import.meta.glob<string>(
  "../../assets/img/services/*.{png,svg,webp,jpg}",
  { eager: true, import: "default" }
);
const iconFor = (file: string): string | undefined => {
  const entry = Object.entries(iconModules).find(([p]) => p.endsWith(`/${file}`));
  return entry?.[1];
};

const services = [
  { icon: "web.png", title: "Web Development", desc: "Build fast, scalable, and SEO-friendly websites." },
  { icon: "mobile.png", title: "Mobile App Development", desc: "Native & cross-platform apps tailored to user needs." },
  { icon: "uiux.png", title: "UI/UX Design", desc: "Delight users with intuitive and beautiful interfaces" },
  { icon: "cloud.png", title: "Cloud Solutions", desc: "Secure and flexible cloud infrastructure for your growth." },
  { icon: "software.png", title: "Software Development", desc: "Custom solutions built around your business logic." },
  { icon: "infrastructure.png", title: "IT Infrastructure", desc: "Scale your backend with reliable tech foundations." },
  { icon: "cybersecurity.png", title: "Cybersecurity Services", desc: "Stay protected with enterprise-grade security." },
  { icon: "qa.png", title: "QA Solutions", desc: "Ensure performance with rigorous testing frameworks." },
  { icon: "consulting.png", title: "IT Consulting & Support", desc: "Make smarter tech decisions with expert guidance." },
];

function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Smart IT Solutions That Grow With You
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const src = iconFor(s.icon);
            return (
              <div
                key={s.title}
                className="rounded-2xl border border-line bg-subtle p-6 transition-colors duration-200 hover:border-brand-400"
              >
                {src ? (
                  <img src={src} alt={s.title} className="h-12 w-12 object-contain" />
                ) : (
                  <div className="h-12 w-12 rounded-xl bg-brand-100 dark:bg-brand-500/15" />
                )}
                <h3 className="mt-4 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;