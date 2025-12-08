import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-r mt-12 from-yellow-200/40 via-yellow-300/30 to-purple-600/40 backdrop-blur-sm py-12 px-6 overflow-hidden text-yellow-200">
      {/* Soft gradient top border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-purple-500"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Section 1: Logo + About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Image src="/sophiya.png" alt="Logo" width={40} height={40} />
              <span className="font-semibold text-yellow-300 text-xl">Sophiya Khadka</span>
            </div>
            <p className="text-sm text-yellow-100/90">
              Full-stack developer crafting beautiful web experiences.
            </p>
          </motion.div>

          {/* Section 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4 text-yellow-300">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-yellow-100 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-yellow-100 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-yellow-100 transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-yellow-100 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Section 3: Connect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4 text-yellow-300">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/sophiya003" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-100 transition-colors">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/sophiya-khadka-a10b78263" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-100 transition-colors">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/__sophiiiiyaaaas/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-100 transition-colors">Instagram</a></li>
              <li><a href="mailto:sophiyakhadka003@gmail.com" className="hover:text-yellow-100 transition-colors">Email</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-yellow-300/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-yellow-100/90"
        >
          <p>
            Sophiya Khadka. Made with ❤️ by Sophiya
            +977 9843970225
          </p>
         
        </motion.div>
      </div>
    </footer>
  );
}
