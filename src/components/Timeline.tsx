import { motion } from "framer-motion";

interface EducationItem {
  institution: string;
  degree: string;
  dates: string;
  grade: string;
  description: string;
  logo?: string; // optional if you want logos later
}

const educationList: EducationItem[] = [
  {
    institution: "ABES Engineering College, Ghaziabad",
    degree: "B.Tech in Computer Science and Engineering (Data Science)",
    dates: "2022 – 2026",
    grade: "6.9 CGPA",
    description: "Currently pursuing my Bachelor's degree with specialization in Data Science. Focused on full stack development and real-world problem-solving.",
  },
  {
    institution: "Hazi Mohd Amin Inter College, Basti",
    degree: "Intermediate (12th), PCM Stream",
    dates: "2019 – 2021",
    grade: "80%",
    description: "Completed Class 12 with a focus on Physics, Chemistry, and Mathematics. Developed early interest in programming and web technologies.",
  },
  {
    institution: "Shri Ram Piyare Chaudhary Inter college,Basti",
    degree: "High School (10th), Science",
    dates: "2017 – 2019",
    grade: "83%",
    description: "Completed my Class 10 education with a strong academic foundation and a growing curiosity towards computers and logic building.",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </p>

        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              className="border border-purple-600 rounded-lg p-6 bg-gray-800 shadow-md hover:shadow-purple-500/30 transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                <p className="text-sm text-gray-400">{edu.degree}</p>
                <p className="text-sm text-gray-400 mb-2">{edu.dates}</p>
                <p className="text-white font-medium">
                  <span className="font-semibold">Grade:</span> {edu.grade}
                </p>
                <p className="text-gray-300 mt-2">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
