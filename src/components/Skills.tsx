import { Code, Database, Globe, Server, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const skills = [
  {
    category: 'Frontend Development',
    icon: Globe,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'Express', 'Python', 'REST APIs'],
  },
  {
    category: 'Database',
    icon: Database,
    skills: ['MongoDB', 'Firebase'],
  },
  {
    category: 'Programming Languages',
    icon: Code,
    skills: ['JavaScript', 'C++', 'Python', 'SQL'],
  },
  {
    category: 'Others',
    icon: Terminal,
    skills: ['Git', 'GitHub', 'Windows', 'VS Code', 'Postman'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of my skills on which I have been working on for the past 2 years.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="border border-purple-600 rounded-lg p-6 bg-gray-900 shadow-md hover:shadow-purple-500/30 transition duration-300"
                variants={fadeInUp}
                whileHover={{ y: -6 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-800 border border-gray-600 rounded-full text-sm text-gray-200 hover:bg-purple-700 hover:border-purple-700 transition duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
