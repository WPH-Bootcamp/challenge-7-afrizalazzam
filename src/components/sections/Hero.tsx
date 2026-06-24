import Button from "../ui/Button";
import HeroIllustration from "./HeroIllustration";

function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto grid max-w-none items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:gap-6 lg:px-12 lg:py-20">
        <div className="order-1 max-w-xl">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Your Tech Partner for{" "}
            <span className="text-gradient-brand">Smarter Growth</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>
          <div className="mt-8">
            <Button href="#contact" className="px-12 py-3.5">
              Let&apos;s Talk
            </Button>
          </div>
        </div>

        <div className="order-2">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

export default Hero;