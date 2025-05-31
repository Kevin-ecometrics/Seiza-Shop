import Hero from "./home/Hero";
import About from "./home/About";
import Product from "./home/Product";
import Navbar from "./Navbar";
import Benefits from "./home/Benefits";
import Footer from "./Footer";
import UseMode from "./home/UseMode";
import ProductPackages from "./home/ProductPackages";
import Testimonials from "./home/Testimonials";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <UseMode />
      <About />
      <Benefits />
      <ProductPackages />
      <Testimonials />
      <Product />
      <Footer />
    </div>
  );
}

export default page;
