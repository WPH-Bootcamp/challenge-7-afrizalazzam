import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { navLinks } from "../../data/navigation";
import ThemeToggle from "../ui/ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const mobileMenu = isOpen
    ? createPortal(
        <div className="fixed inset-0 z-[9999] flex flex-col bg-white px-6 py-4 dark:bg-black">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={closeMenu}
              className="cursor-pointer p-1 text-ink"
              aria-label="Close menu"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <ul className="mt-6 flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line">
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-4 text-base font-medium text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Button href="#contact" fullWidth onClick={closeMenu}>
              Let&apos;s Talk
            </Button>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-line bg-canvas/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-none items-center justify-between px-5 py-4 lg:px-12">
          <Logo />

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-ink transition-colors hover:text-brand-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <Button href="#contact">Let&apos;s Talk</Button>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="cursor-pointer p-1 text-ink"
              aria-label="Open menu"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {mobileMenu}
    </>
  );
}

export default Navbar;