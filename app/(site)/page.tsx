import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import NextGames from "@/components/NextGames";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

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
