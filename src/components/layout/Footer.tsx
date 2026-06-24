import Logo from "../ui/Logo";
import { navLinks } from "../../data/navigation";

/**
 * Footer — logo, deskripsi singkat, link navigasi, & copyright.
 */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Your tech partner for smarter growth. We deliver tailored IT
              solutions to help you scale with confidence.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-sm font-bold text-ink">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-brand-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-sm font-bold text-ink">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>hello@yourcompany.com</li>
              <li>+62 812 3456 7890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6 text-center text-sm text-muted">
          © {year} Your Logo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
