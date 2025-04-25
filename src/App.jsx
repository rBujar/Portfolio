import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/porfolio/Portfolio";
import Contacts from "./components/contact/Contacts";

const App = () => {
  return (
    <div className="container">
      <section id="#home">
        <Hero />
      </section>
      <section id="#services">
        <Services />
      </section>
      <section id="#portfolio">
        <Portfolio />
      </section>
      <section id="#contact">
        <Contacts />
      </section>
    </div>
  );
};

export default App;
