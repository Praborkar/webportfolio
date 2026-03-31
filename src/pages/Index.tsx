import React, { useEffect } from "react";
import SpaceBackground from "@/components/SpaceBackground";
import HeroPortfolio from "@/components/HeroPortfolio";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ResumeSection from "@/components/ResumeSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <SpaceBackground />
      <div className="relative z-10">
        <HeroPortfolio />
        <ProjectsSection />
        <SkillsSection />
        <ResumeSection />
        <EducationSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
