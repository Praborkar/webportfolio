import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "ReactJS",
      organization: "Infosys",
      year: "2024",
      // link: "",
      // type: "view",
      featured: true
    },
    {
      title: "Database Management System - Science Graduatest",
      organization: "Infosys",
      year: "2024", 
      // link: "#",
      // type: "download",
      featured: true
    },
    {
      title: "Java Programming Fundamentals",
      organization: "Infosys",
      year: "2024",
      // link: "#",
      // type: "view",
      featured: true
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      organization: "Coursera",
      year: "2023",
      // link: "#",
      // type: "download",
      featured: true
    },
    {
      title: "Object Oriented Programming in Java",
      organization: "Coursera",
      year: "2023",
      // link: "#",
      // type: "download",
      featured: true
    },
    {
      title: "Data Analysis with Pandas and Python",
      organization: "Infosys",
      year: "2025",
      // link: "#",
      // type: "download",
      featured: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Professional Certifications
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Certifications & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className={`h-full transition-all duration-500 hover:shadow-lg border-2 ${
                cert.featured 
                  ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-transparent' 
                  : 'border-border hover:border-primary/50'
              }`}>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        {cert.featured && (
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        )}
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {cert.title}
                        </h3>
                      </div>
                      <p className="text-primary font-semibold mb-2 text-lg">
                        {cert.organization}
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{cert.year}</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cert.featured 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {cert.year}
                    </div>
                  </div>
                  
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-all duration-300 font-medium group/button"
                  >
                    {cert.type === "download" ? (
                      <>
                        <Download className="w-4 h-4 group-hover/button:translate-y-0.5 transition-transform" />
                        Download Certificate
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 transition-transform" />
                        View Certificate
                      </>
                    )}
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;