import logo from "../../assets/img/logo.png";

function Logo() {
  return (
    <a href="#hero" className="flex items-center gap-2.5">
      <img src={logo} alt="Your Logo" className="h-8 w-auto" />
      <span className="text-lg font-extrabold tracking-tight text-ink">
        Your Logo
      </span>
    </a>
  );
}

export default Logo;