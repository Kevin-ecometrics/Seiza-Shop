import Hero from "./Hero";
import About from "./About";
import Product from "./Product";
import Navbar from "./Navbar";
import Benefits from "./Benefits";
import Footer from "./Footer";
import UseMode from "./UseMode";

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
