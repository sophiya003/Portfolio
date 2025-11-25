// SkillsSection.jsx
"use client";

import { FaDatabase, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiFirebase, SiFlutter, SiMongodb, SiNextdotjs, SiSupabase, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Neon (PostgreSQL)", icon: <FaDatabase /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Python", icon: <FaPython /> },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-16 text-white overflow-hidden">
   
     

      <div className="max-w-6xl mx-auto px-4">
        {/* Heading aligned left */}
        <h2 className="text-4xl font-bold mb-12">My Skills</h2>

        {/* Grid of skill cards aligned to start */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-start">
          {skills.map((skill) => (
            <div
              key={skill.name}
              // 🔑 1 & 3: Apply custom 'skill-card' class for square size, black BG, and gradient border
              className="skill-card hover:scale-105 transition-transform duration-300"
            >
              <div 
                // 🔑 2: Apply custom 'skill-icon-gradient' class for gradient icon color
                className="text-5xl mb-3 skill-icon-gradient"
              >
                {skill.icon}
              </div>
              <p className="text-base font-medium text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}