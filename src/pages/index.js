import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks";
import Meta from "../components/Meta";
import Products from "../components/Products";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <>
      <Meta />

      <main>
        <Hero />

        <HowItWorks />

        <Products />

        <Reviews />
      </main>
    </>
  );
}
