import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import NextGames from "@/components/NextGames";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

/* Initial template
<main>
      <Hero />
      <Brands />
      <NextGames />
      <Feature />
      <About />
      <Contact />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Blog />
    </main>
  */

export const metadata: Metadata = {
  title: "Squanch - Crowdsourced Sports Commentary",
  description: "This is Home for Squanch",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <NextGames />
      <Feature />
      <About />
      <FAQ />
      <Contact />
    </main>
  );
}
