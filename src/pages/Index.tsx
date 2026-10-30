import { useEffect } from "react";
import HeroPortfolio from "@/components/HeroPortfolio";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import ToolboxSection from "@/components/ToolboxSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <HeroPortfolio />
      <AboutSection />
      <WorkSection />
      <ExperienceSection />
      <ToolboxSection />
      <ContactSection />
    </div>
  );
};

export default Index;
