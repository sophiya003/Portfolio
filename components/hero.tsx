"use client";

import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    // Trigger file download from public/docs
    const link = document.createElement("a");
    link.href = "/docs/cv.pdf"; 
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Trigger confetti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section className="lg:py-24 px-6 mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-6 justify-center">

        {/* --- Left Column: Text --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-8 text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span>Hello, I am </span>
            <br />
            <TypeAnimation
              sequence={[
                "Sophiya Khadka",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600"
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-lg mx-auto sm:mx-0">
            I craft beautiful, performant web experiences that solve real problems. Specializing in React, Next.js, and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">

            {/* Continuous bouncing button */}
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-3 w-full sm:w-auto text-white font-medium rounded-lg bg-gradient-to-r from-yellow-400 to-purple-600 hover:opacity-90 text-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
            >
              View My Work
            </motion.button>

            {/* Download CV with confetti */}
            <button
              onClick={downloadCV}
              className="px-8 py-3 w-full sm:w-auto font-medium rounded-lg text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600 border-2 border-yellow-400 hover:text-white text-center"
            >
              Download CV
            </button>
          </div>
        </motion.div>

        {/* --- Right Column: Photo --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-4 flex justify-center mt-6 sm:mt-0"
        >
          <div className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0">
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]">
              <Image
                src="/dp.jpg"
                alt="Sophiya's photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
