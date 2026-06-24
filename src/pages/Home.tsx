import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import TrustedBy from "../components/sections/TrustedBy";
import About from "../components/sections/About";
import Process from "../components/sections/Process";
import Services from "../components/sections/Services";
import Industry from "../components/sections/Industry";
import Projects from "../components/sections/Projects";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/Faq";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

/**
 * Home — menyusun seluruh section company profile
 * dalam urutan sesuai requirement assignment.
 */
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Process />
        <Services />
        <Industry />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>

    </>
  );
}

export default Home;
