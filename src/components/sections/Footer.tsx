import Logo from "../../assets/img/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.26 8.26 0 0 0 4.83 1.54V6.78a4.85 4.85 0 0 1-1.06-.09z" />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="px-5 pb-6 pt-4 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-2xl bg-surface px-8 py-10 lg:px-12 lg:py-12">

        {/* ── Desktop top row / Mobile stacked ── */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          {/* Heading */}
          <h2 className="max-w-xs text-4xl font-extrabold uppercase leading-tight tracking-tight text-ink lg:text-5xl">
            Let&apos;s Discuss<br />Your Ideas
          </h2>

          {/* Logo — hidden on mobile (shown above on mobile layout) */}
          <div className="hidden items-center gap-2 lg:flex">
            <img src={Logo} alt="Logo" className="h-8 w-auto object-contain" />
          </div>

          {/* Logo — mobile only, shown at top */}
          <div className="order-first flex items-center gap-2 lg:hidden">
            <img src={Logo} alt="Logo" className="h-7 w-auto object-contain" />
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-line" />

        {/* Bottom row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Nav links */}
          <nav className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-ink transition-colors hover:text-brand-500 lg:text-base"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-brand-500 hover:text-brand-500"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;