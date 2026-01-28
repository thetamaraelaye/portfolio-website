import { Code } from "lucide-react";
import { motion } from "motion/react";

const Hero = () => (
  <header className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-900 via-purple-800 to-purple-900 text-white relative">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-2xl mb-4 text-purple-300">Hi, my name is</h2>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1.2,
          transition: { duration: 1, ease: "easeInOut" },
        }}
      >
        <h1 className="text-2xl lg:text-7xl font-bold mb-6">
          Tamara Elayelagha
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 800,
            damping: 20,
            duration: 1,
            delay: 1.8,
          },
        }}
        className="text-xl lg:text-4xl text-purple-200 mb-8"
      >
        I&apos;m a problem-solver who loves to travel and try new things.
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 800,
            damping: 20,
            duration: 1,
            delay: 1.5,
          },
        }}
        className="text-sm max-w-2xl mx-auto text-purple-200"
      >
        I&apos;m a Fullstack Developer and Technical Writer passionate about solving complex problems, exploring new places through travel, and embracing innovative technologies to create exceptional digital experiences and streamline processes.
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, delay: 2 },
        }}
        className="mt-8"
      >
        <a
          href="/Tamara Elayelagha CV (5).pdf"
          download
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
        >
          Download My CV
        </a>
      </motion.div>
       <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <motion.div className="animate-bounce">
          <Code size={50} className="animate-bounce" />
        </motion.div>{" "}
      </motion.div>
    </div>
  </header>
);

export default Hero;
