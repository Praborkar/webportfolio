import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express.js", "FastAPI", "PHP", "REST API", "MongoDB", "MySQL"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Vercel", "Bootstrap", "Framer Motion", "EmailJS", "TMDB API"]
    },
    {
      title: "Web3 & Blockchain",
      skills: ["Solana", "Rust", "TypeScript", "Meteora SDK", "Dynamic Bonding Curve"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-portfolio-indigo">Technologies</span>
          </h2>
          <p className="text-xl text-portfolio-light max-w-3xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="bg-portfolio-navy/20 rounded-lg p-8 border border-portfolio-indigo/20 hover:border-portfolio-indigo/40 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-portfolio-indigo mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-portfolio-indigo/10 text-portfolio-light rounded-full text-sm border border-portfolio-indigo/30 hover:bg-portfolio-indigo/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;