const logoModules = import.meta.glob<string>(
  "../../assets/img/logo-company/*.{png,jpg,jpeg,svg,webp}",
  { eager: true, import: "default" }
);

const logos = Object.entries(logoModules)
  .map(([path, src]) => ({
    src,
    name: path.split("/").pop()!.replace(/\.[^.]+$/, ""),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

/** Satu baris logo. */
function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-x-10 pr-10 sm:gap-x-14 sm:pr-14"
    >
      {logos.map((logo) => (
        <li key={logo.name}>
          <img
            src={logo.src}
            alt={logo.name}
            loading="lazy"
            // (3) tambah dark:opacity-70 dark:invert dark:hover:opacity-100
            className="h-7 w-auto object-contain opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 dark:opacity-70 dark:invert dark:hover:opacity-100 sm:h-8"
          />
        </li>
      ))}
    </ul>
  );
}

function TrustedBy() {
  return (
    // (1) border-gray-100 -> border-line   (2) bg-white -> bg-canvas
    <section className="border-y border-line bg-canvas py-10">
      <div className="mx-auto max-w-none px-5 lg:px-12">
        <p className="text-center text-sm font-semibold text-ink sm:text-base">
          Trusted by Global Innovators &amp; Leading Brands
        </p>

        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            <LogoRow />
            <LogoRow ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;