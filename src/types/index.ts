import type { ReactNode } from "react";

/* ============================================================
   Shared TypeScript types/interfaces
   Centralized di sini agar reusable di multiple files.
   ============================================================ */

/** Variant styling untuk Button */
export type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  /** Render sebagai <a> jika href diisi, selain itu <button> */
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  type?: "button" | "submit";
}

/** Satu item link pada navigasi */
export interface NavLink {
  label: string;
  href: string;
}

/** Kartu layanan / service */
export interface Service {
  id: string;
  title: string;
  description: string;
  /** Nama emoji/icon sederhana untuk placeholder */
  icon: string;
}

/** Project / portfolio item */
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

/** Testimonial dari client */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

/** Item FAQ (pertanyaan + jawaban) */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/** Logo brand pada section "Trusted by" */
export interface BrandLogo {
  name: string;
  /** SVG/text wordmark sederhana */
  label: string;
}

/** Generic props untuk wrapper Card */
export interface CardProps {
  children: ReactNode;
  className?: string;
}
