import type { Service } from "../types";

/** Daftar layanan perusahaan */
export const services: Service[] = [
  {
    id: "web",
    icon: "🌐",
    title: "Web Development",
    description:
      "Aplikasi web modern, cepat, dan scalable dengan teknologi terkini.",
  },
  {
    id: "mobile",
    icon: "📱",
    title: "Mobile Apps",
    description:
      "Aplikasi mobile native & cross-platform untuk iOS dan Android.",
  },
  {
    id: "cloud",
    icon: "☁️",
    title: "Cloud Solutions",
    description:
      "Infrastruktur cloud yang andal, aman, dan mudah dikembangkan.",
  },
  {
    id: "ai",
    icon: "🤖",
    title: "AI Integration",
    description:
      "Integrasi kecerdasan buatan untuk otomatisasi dan insight bisnis.",
  },
  {
    id: "uiux",
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Desain antarmuka yang indah, intuitif, dan berfokus pada pengguna.",
  },
  {
    id: "consult",
    icon: "💡",
    title: "Tech Consulting",
    description:
      "Strategi teknologi untuk membantu bisnis tumbuh lebih cepat.",
  },
];
