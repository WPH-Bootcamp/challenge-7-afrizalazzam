import type { CardProps } from "../../types";

/**
 * Card wrapper generik. Pakai `children` agar fleksibel —
 * bisa diisi konten apa saja (service, project, testimonial, dll).
 */
function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
