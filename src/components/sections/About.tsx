const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Years of Experience" },
  { value: "10+", label: "Industry Awards Won" },
  { value: "100%", label: "Client Satisfaction Rate" },
];

function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-none px-5 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
            From strategy to execution, we deliver solutions that grow your
            business.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 justify-items-center gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex aspect-square w-full max-w-[260px] flex-col items-center justify-center rounded-full border border-line bg-subtle p-6 text-center"
            >
              <span className="text-4xl font-extrabold text-brand-500 sm:text-5xl">
                {s.value}
              </span>
              <span className="mt-2 text-sm font-medium text-ink sm:text-base">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;