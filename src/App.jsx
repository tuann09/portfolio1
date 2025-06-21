import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import Hero from "./sections/Hero.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";


const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <Skills />
      <Contact />
      <Footer />

    </>
  );
};

export default App;
