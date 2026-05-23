import { Hero } from "./_home-sections/Hero";
import { SocialProof } from "./_home-sections/SocialProof";
import { FeaturedWork } from "./_home-sections/FeaturedWork";
import { ServicesSummary } from "./_home-sections/ServicesSummary";
import { Process } from "./_home-sections/Process";
import { FinalCTA } from "./_home-sections/FinalCTA";
import { Contact } from "./_home-sections/Contact";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <SocialProof />
      <FeaturedWork />
      <ServicesSummary />
      <Process />
      <FinalCTA />
      <Contact />
      <Footer />
    </main>
  );
}
