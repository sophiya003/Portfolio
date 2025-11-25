"use client"

import { motion } from "framer-motion"
import { Award, Briefcase, GraduationCap } from "lucide-react"

export default function About() {
  // Certificates list
  const certificates = [
    {
      name: "Responsive Web Design - FreeCodeCamp",
      link: "https://www.freecodecamp.org/certification/sophiyakhadka/responsive-web-design",
    },
    {
      name: "Frontend Development Libraries",
      link: "https://www.freecodecamp.org/certification/sophiyakhadka/front-end-development-libraries",
    },
    { name: "Data Analyst Foundations", file: "Udemy 3.pdf" },
    { name: "Deep RL Learning Using Python", file: "udemy certificate.pdf" },
    { name: "Coursera", file: "Coursera.pdf" },
  ]

  // Card component with glowing gradient border
  const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="rounded-xl p-[2px] bg-gradient-to-r from-yellow-400 to-purple-600 hover:scale-[1.04] transition-all duration-300 shadow-md">
      <div className="bg-background rounded-xl p-6 h-full border border-white/5">
        {children}
      </div>
    </div>
  )

  return (
    <section
      id="about"
      className="py-20 px-6 bg-card/30 relative overflow-hidden"
    >
    

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            className="space-y-6 text-muted-foreground"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed">
              Hello! I'm Sophiya Khadka an undergraduate Computer Science student at Kathmandu
              University with a passion for building clean, modern, and
              user-focused digital experiences. I love turning ideas into
              functional products through hands-on projects, experimentation,
              and constant learning.
            </p>

            <p className="text-lg leading-relaxed">
              My work spans web development with React and Next.js, mobile app
              development with Flutter, and data visualization using Python
              tools like Streamlit. I enjoy solving real-world problems,
              exploring UI/UX, and writing code that is both readable and
              scalable.
            </p>

            <p className="text-lg leading-relaxed">
              Beyond coding, I enjoy watercolor painting, visiting art museums,
              traveling, and spending time with friends. These creative hobbies
              inspire my design sense and help me bring fresh perspectives to my
              work.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Education */}
            <Card>
              <h3 className="text-white font-semibold mb-3 text-lg flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                Education
              </h3>
              <p className="text-sm text-muted-foreground">
                B.Sc. in Computer Science <br />
                Kathmandu University — Ongoing
              </p>
            </Card>

            {/* Projects & Experience */}
            <Card>
              <h3 className="text-white font-semibold mb-3 text-lg flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-purple-400" />
                Projects & Experience
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Developed multiple semester and personal projects across web,
                mobile, and ML development. <br />
                <span className="font-medium text-purple-300">
                  Tech stack:
                </span>{" "}
                React, Next.js, Flutter, Python, Streamlit
              </p>
            </Card>

            {/* Certifications */}
            <Card>
              <h3 className="text-white font-semibold mb-3 text-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                Certifications
              </h3>

              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                {certificates.map((cert, idx) => {
                  const href = cert.link || `/certs/${cert.file}`

                  return (
                    <li key={idx}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-purple-400 underline transition-colors"
                      >
                        {cert.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
