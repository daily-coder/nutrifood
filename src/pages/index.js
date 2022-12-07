import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks";
import Meta from "../components/Meta";
import Products from "../components/Products";

export default function Home() {
  return (
    <div>
      <Meta />

      <Hero />

      <HowItWorks />

      <Products />
    </div>
  );
}
