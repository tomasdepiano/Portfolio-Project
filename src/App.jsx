import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Portfolio">
        <Parallax />
      </section>
      <Portfolio />

      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
