import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* 👤 Large Circular Profile Image with Glow */}
          <motion.div
            className="flex justify-center md:ml-6"
            variants={fadeInUp}
          >
            <div className="relative w-80 h-80">
              <img
                src="\Rajesh Sharma .jpg" // ✅ Ensure the image is optimized and in public/
                alt="Rajesh Sharma"
                className="w-full h-full object-cover rounded-full border-[6px] border-purple-600 shadow-xl shadow-purple-700/30"
                loading="lazy"
              />
              {/* Optional Glowing Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-purple-400 blur-md animate-pulse opacity-30" />
            </div>
          </motion.div>

          {/* 🧑‍💻 About Text Section */}
          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-300" variants={fadeInUp}>
              Hello! I'm <span className="text-white font-semibold">Rajesh Sharma</span>, a dedicated <span className="text-indigo-400">Full Stack MERN Developer</span> with a passion for building responsive and efficient web applications that solve real-world problems.
            </motion.p>

            <motion.p className="text-lg text-gray-300" variants={fadeInUp}>
              I'm also skilled in <span className="text-blue-400 font-semibold">java</span> and <span className="text-green-400 font-semibold">Python</span>, with a strong grasp of data structures, algorithms, and backend systems. Whether it's frontend UI or backend APIs, I love crafting smooth and scalable digital experiences.
            </motion.p>

            <motion.p className="text-lg text-gray-300" variants={fadeInUp}>
              I’m always curious to learn and grow as a developer. With a problem-solving mindset and a focus on clean, maintainable code, I aim to build software that makes a positive impact.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
