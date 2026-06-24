const images = import.meta.glob<string>(
  "../../assets/img/projects/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const imgFor = (file: string): string | undefined =>
  Object.entries(images).find(([p]) => p.endsWith(`/${file}`))?.[1];

const projects = [
  { img: "portofolio1.png", category: "Landing Page", title: "Portofolio 1" },
  { img: "portofolio2.png", category: "Landing Page", title: "Portofolio 2" },
  { img: "portofolio3.png", category: "Landing Page", title: "Portofolio 3" },
];

function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            From Vision to Launch! Projects We&apos;re Proud Of
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
            Take a closer look at our recent work powering startups, enterprises,
            and everything in between.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((p) => {
            const src = imgFor(p.img);
            return (
              <article key={p.title}>
                <div className="overflow-hidden rounded-2xl border border-line bg-subtle">
                  {src ? (
                    <img src={src} alt={p.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  ) : (
                    <div className="aspect-[4/3] w-full" />
                  )}
                </div>
                <p className="mt-4 text-sm font-semibold text-brand-500">{p.category}</p>
                <h3 className="mt-1 text-xl font-bold text-ink">{p.title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;