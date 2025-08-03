import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowDown } from 'lucide-react';
import { gradientBg, gradientHover, gradientText } from '../utils/gradients';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gray-900 overflow-hidden">
      
      {/* Background Orbs */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -top-48 -left-48 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-48 -right-48 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="space-y-10">
          {/* ✍️ Full Typewriter Line */}
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
            variants={fadeInUp}
          >
            <span className={`${gradientText} font-extrabold`}>
              <Typewriter
                words={["Hi, I'm Rajesh Sharma — Full Stack MERN Developer"]}
                typeSpeed={60}
                cursor
                cursorStyle="|"
                loop={false}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
            variants={fadeInUp}
          >
            🚀 Passionate <span className="text-white font-semibold">B.Tech student</span> building scalable, full-stack web apps using the <span className="text-green-400 font-semibold">MERN stack</span>. Turning code into real-world impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeInUp}
          >
            <motion.a
              href="#projects"
              className={`px-8 py-3 text-lg font-medium rounded-full text-white ${gradientBg} ${gradientHover} transition-all duration-300 shadow-md`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚧 View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 text-lg font-medium rounded-full text-white border-2 border-white/20 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✉️ Contact Me
            </motion.a>
          </motion.div>
        </div>

        {/* ⬇️ Scroll Down Arrow to About Me */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-white/70 hover:text-white transition duration-300" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70" />
    </section>
  );
}
