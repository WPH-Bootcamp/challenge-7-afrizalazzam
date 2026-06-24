import heroLight from "../../assets/img/hp_light.png";
import heroDark from "../../assets/img/hp_dark.png";

function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:mr-0">
      <img
        src={heroLight}
        alt="Tech solution illustration"
        className="h-auto w-full select-none dark:hidden"
        draggable={false}
      />
      <img
        src={heroDark}
        alt="Tech solution illustration"
        className="hidden h-auto w-full select-none dark:block"
        draggable={false}
      />
    </div>
  );
}

export default HeroIllustration;