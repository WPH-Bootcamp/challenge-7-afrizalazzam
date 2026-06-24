import { useState } from "react";


const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdldawe";

const icons = import.meta.glob<string>(
  "../../assets/img/contact/*.{png,svg,webp}",
  { eager: true, import: "default" }
);
const iconFor = (file: string): string | undefined =>
  Object.entries(icons).find(([p]) => p.endsWith(`/${file}`))?.[1];

const serviceOptions = [
  "Web Development", "Mobile App Development", "UI/UX Design",
  "Cloud Solutions", "Software Development", "Other",
];

type Status = "idle" | "sending" | "success" | "error";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  const toggleService = (s: string) =>
    setServices((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message, services: services.join(", "), _replyto: email }),
      });
      if (res.ok) {
        setStatus("success");
        setName(""); setEmail(""); setMessage(""); setServices([]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-transparent px-4 py-3 text-ink placeholder:text-muted focus:border-brand-500 focus:outline-none";

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Ready to Start? Let&apos;s Talk.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
            Tell us what you need, and we&apos;ll get back to you soon.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label htmlFor="c-name" className="mb-2 block text-sm font-bold text-ink">Name</label>
            <input id="c-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="c-email" className="mb-2 block text-sm font-bold text-ink">Email</label>
            <input id="c-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className={inputClass} />
          </div>
          <div>
            <label htmlFor="c-msg" className="mb-2 block text-sm font-bold text-ink">Message</label>
            <textarea id="c-msg" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message" className={`${inputClass} resize-none`} />
          </div>

          <div>
            <p className="mb-3 text-sm font-bold text-ink">Services</p>
            <div className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-flow-col sm:grid-rows-3">
              {serviceOptions.map((opt) => {
                const checked = services.includes(opt);
                return (
                  <label key={opt} className="flex cursor-pointer items-center gap-3">
                    <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggleService(opt)} />
                    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${checked ? "border-brand-500 bg-brand-500" : "border-line"}`}>
                      {checked && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12l5 5 9-11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm text-ink sm:text-base">{opt}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <button type="submit" disabled={status === "sending"} className="w-full cursor-pointer rounded-full bg-brand-500 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:opacity-60">
            {status === "sending" ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      {(status === "success" || status === "error") && (
        <Modal status={status} onClose={() => setStatus("idle")} />
      )}
    </section>
  );
}

function Modal({ status, onClose }: { status: "success" | "error"; onClose: () => void }) {
  const ok = status === "success";
  const icon = iconFor(ok ? "success.png" : "error.png");
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-5" onClick={onClose}>
      <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-zinc-900" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-center bg-subtle py-8">
          {icon ? <img src={icon} alt="" className="h-20 w-20 object-contain" /> : <span className="text-5xl">{ok ? "📩" : "⚠️"}</span>}
        </div>
        <div className="px-6 py-7 text-center">
          <h3 className="text-lg font-bold text-ink">
            {ok ? "Message Received!" : "Oops! Something went wrong."}
          </h3>
          <p className="mx-auto mt-2 max-w-xs text-sm text-muted">
            {ok ? "Thanks for reaching out — we'll get back to you as soon as possible."
                : "We couldn't send your message. Please try again or check your connection."}
          </p>
          <button type="button" onClick={ok ? () => { onClose(); window.scrollTo({ top: 0, behavior: "smooth" }); } : onClose} className="mt-6 w-full cursor-pointer rounded-full bg-brand-500 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
            {ok ? "Back to Home" : "Try Again"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;