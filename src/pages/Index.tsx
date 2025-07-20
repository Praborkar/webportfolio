import React, { useEffect } from "react";
import HeroPortfolio from "@/components/HeroPortfolio";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ResumeSection from "@/components/ResumeSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <HeroPortfolio />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ResumeSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default Index;
