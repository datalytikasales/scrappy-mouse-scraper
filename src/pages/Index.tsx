import { Hero } from "@/components/Hero";
import { ScrapForm } from "@/components/ScrapForm";
import { FilesList } from "@/components/FilesList";
import { PricingSection } from "@/components/PricingSection";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <main className="py-20">
        <ScrapForm />
        <FilesList />
      </main>
      <PricingSection />
      <ProjectsCarousel />
      <Footer />
    </div>
  );
};

export default Index;