import Header from "./components/Header";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />

      <Hero />
      
      <Work />

      <About />

      <Contact />
    </div>
  );
}
