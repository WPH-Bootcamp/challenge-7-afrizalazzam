const steps = [
  { n: 1, title: "Discovery & Consultation", desc: "Understand Your Needs & Goals" },
  { n: 2, title: "Planning & Strategy", desc: "Build a Clear, Scalable Roadmap" },
  { n: 3, title: "Design & Prototyping", desc: "Craft UX That Converts" },
  { n: 4, title: "Development & Implementation", desc: "Deliver With Speed & Precision" },
  { n: 5, title: "Testing & Optimization", desc: "Ensure Quality at Every Step" },
  { n: 6, title: "Launch & Growth", desc: "Scale, Measure & Improve Continuously" },
];

function Process() {
  return (
    <section id="process" className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Our Process
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Garis: kiri di mobile, tengah di desktop */}
          <div className="pointer-events-none absolute bottom-0 top-0 left-5 w-px bg-line lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-6">
            {steps.map((step, i) => {
              const left = i % 2 === 0; // 1,3,5 -> kiri
              return (
                <div key={step.n} className="relative flex items-center">
                  <div className="absolute left-5 top-1/2 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white lg:left-1/2">
                    {step.n}
                  </div>

                  <div
                    className={`ml-12 w-full lg:w-[calc(50%_-_2.5rem)] ${
                      left ? "lg:ml-0 lg:mr-auto" : "lg:ml-auto"
                    }`}
                  >
                    <div className="relative rounded-xl border border-line bg-subtle p-5">
                      <h3 className="pr-8 font-bold text-ink">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted">{step.desc}</p>
                      <svg
                        width="18" height="18" viewBox="0 0 24 24" fill="none"
                        className="absolute right-4 top-5 text-ink/60"
                        aria-hidden="true"
                      >
                        <path d="M6 15l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;