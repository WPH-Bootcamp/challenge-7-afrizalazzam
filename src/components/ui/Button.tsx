import type { ButtonProps } from "../../types";


const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "text-white bg-brand-500 hover:bg-brand-600 shadow-lg shadow-brand-500/30",
  secondary: "text-brand-600 border border-brand-500 hover:bg-brand-50",
  ghost: "text-ink hover:text-brand-600",
};

function Button({
  variant = "primary",
  children,
  href,
  onClick,
  className = "",
  fullWidth = false,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 cursor-pointer";

  const classes = `${base} ${variantClasses[variant]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  // Render sebagai anchor jika href ada (untuk navigasi smooth-scroll)
  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;
