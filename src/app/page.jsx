import Hero from "./home/Hero";
import About from "./home/About";
import Product from "./home/Product";
import Navbar from "./Navbar";
import Benefits from "./home/Benefits";
import Footer from "./Footer";
import UseMode from "./home/UseMode";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <UseMode />
      <Benefits />
      <Product />
      <Footer />
    </div>
  );
}

export default page;
