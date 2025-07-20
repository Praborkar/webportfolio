import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "Noida Institute of Engineering and Technology",
      duration: "2022 - 2026",
      description: "Specialized in Software Engineering and Web Development. Graduating with honors, focusing on modern web technologies and database systems.",
      achievements: ["Over CGPA - 7.34", "Photography Club Member", "Published research paper on projects", "Participated in hackathons", "Completed multiple virtual internships"]
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Kendriya Vidyalaya",
      duration: "2021 - 2022",
      description: "Science stream with Mathematics, Physics, and Chemistry. Foundation in Computer Science.",
      achievements: ["80% in 12th grade", "Mathematics Olympiad participant", "Active in school tech club", "Volunteered for community service"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 bg-portfolio-navy/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education & <span className="text-portfolio-indigo">Academic Background</span>
          </h2>
          <p className="text-xl text-portfolio-light max-w-3xl mx-auto">
            Academic journey and foundational learning experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-portfolio-indigo/30"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-portfolio-indigo rounded-full border-4 border-black z-10"></div>

              {/* Content card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-black rounded-lg p-8 border border-portfolio-indigo/20 hover:border-portfolio-indigo/40 transition-all duration-500"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-portfolio-indigo/20 p-3 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-portfolio-indigo" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-portfolio-indigo font-medium mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-2 text-portfolio-light text-sm mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-portfolio-light mb-4">
                    {edu.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm">Key Achievements:</h4>
                    {edu.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-portfolio-indigo rounded-full"></div>
                        <span className="text-portfolio-light text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;