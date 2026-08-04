import Hero from "../components/landing/Hero";
import Categories from "../components/landing/Categories";
import FeaturedProducts from "../components/landing/FeaturedProducts";
import About from "../components/landing/About";
import Contact from "../components/landing/Contact";
import { useProductContext } from "../context/useProductContext";

const Landing = () => {
  const { products } = useProductContext();

  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts products={products} />
      <About />
      <Contact />
    </>
  );
};

export default Landing;
