

"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, FileText, Github } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

const MIN_CARDS_FOR_SCROLL = 3
const projects = [
  {
    id: 1,
    title: "Full-Stack Journal App",
    description:
      "A full-stack Journal App with React, Next.js, Shadcn UI, Tailwind CSS, Clerk Authentication, and NeonDB. Manage entries securely, with modern UI components and real-time database integration.",
    image: "/Logo.png",
    tags: ["Next.js", "React", "TailwindCSS", "Shadcn UI", "Clerk", "NeonDB"],
    link: "https://journal-eight-murex.vercel.app/",
    github:"https://github.com/sophiya003/Journal/tree/main/my-app"
  },
  {
    id: 2,
    title: "Calendly Clone",
    description:
      "Full-stack booking platform inspired by Calendly, built with Next.js and React. Book appointments in real-time and manage schedules efficiently",
    image: "/sche.png",
    tags: ["Next.js", "React", "Prisma", "Clerk", "TailwindCSS"],
    link: "https://calendar-topaz-three.vercel.app/",
    github: "https://github.com/sophiya003/Scheduler",
  },
  {
    id: 3,
    title: "AI Finance Platform",
    description:
      "Full-stack AI-powered finance management platform built with Next.js 15, Tailwind CSS, Gemini AI, Prisma, Clerk Authentication, Inngest, Arcjet, and Shadcn UI. Includes budgeting, transactions, AI receipt scanning, automated insights, and email alerts.",
    image: "/next.jpeg",
    tags: ["Next.js", "Tailwind", "Gemini AI", "Prisma", "Clerk", "Shadcn UI"],
    github: "https://github.com/sophiya003/paisa",
  },
  {
    id: 4,
    title: "Abhaya - Personal Safety App",
    description:
      "A cross-platform mobile security app designed to enhance personal safety through emergency alerts, real-time GPS location sharing, and instant communication. Features shake-to-alert mechanism, parent-child monitoring, nearby emergency services locator, and trusted contacts management for quick crisis response.",
    image: "/ues.png",
    tags: ["Flutter", "Firebase", "Dart"],
    github: "https://github.com/sophiya003/security/tree/master",
    pdf: "/docs/Abhaya.pdf",
  },
 {
  id: 5,
  title: "Flutter Multi Vendor App",
  description:
    "A full-featured multi-vendor food delivery application built using Flutter, Firebase, and Dart. The app allows multiple restaurants or shops to operate within a single platform, each managing their own menus and products. Users can browse vendors, place orders, track delivery status in real time, and enjoy a smooth, modern UI experience. Features include Firebase authentication, real-time database updates, cloud storage, push notifications, Google Maps-based live tracking, an organized cart & checkout system, and vendor/admin dashboards for efficient management. Designed to be scalable, clean, and production-ready with a beautiful interface and seamless cross-platform performance.",
  image: "/image.png",
  tags: ["Flutter", "Firebase", "Dart"],
  github: "https://github.com/Pujakadayat/Winkel",
  pdf: "/docs/W-Report.pdf",
},

 {
  id: 7,
  title: "Kakshya - School Management System",
  description:
    "A comprehensive web-based School Management System built with the MERN stack. Features role-based dashboards for admins, teachers, and students with attendance tracking, grade management, notice boards, and real-time communication. Streamlines academic operations with centralized student data and automated administrative processes.",
  image: "/classroom.png",
  tags: ["MongoDB", "Express.js", "React", "Node.js"],
  github: "https://github.com/sophiya003/Classroom",
  pdf: "/docs/Kakshya.pdf",
},
  {
    id: 8,
    title: "Streamlit Data visualization Dashboard",
    description:
      "Data Mining & Climate Dashboard — A Streamlit-based dashboard that ingests, processes, and visualizes climate data (e.g., Nepal GIS daily data) to provide interactive insights on environmental trends. I built the project using Python to perform data cleaning, exploratory analysis, and time-series visualizations. This work demonstrates my skills in data engineering, real-world data handling, and creating intuitive data-driven applications.",
    image: "/data.jpg",
    tags: ["Python", "Streamlit", "Pandas"],
    github: "https://github.com/sophiya003/datamining",
  },
  {
    id: 9,
    title: "Helmet Detection using YOLO",
    description:
      "A real-time computer vision system built with YOLO to detect whether individuals are wearing helmets in images or video streams. Designed for safety monitoring applications, using Python and OpenCV for fast and accurate object detection.",
    image: "/helmet.jpg",
    tags: ["Python", "YOLO", "OpenCV"],
    github: "https://github.com/sophiya003/helmet_cv",
  },
]
const tabs = ["All", "Next.js", "React", "Flutter", "Python"]
function ProjectCard({ project }: any) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.03 }}
      className="flex-shrink-0 w-1/3 group relative rounded-2xl overflow-hidden border border-transparent bg-gradient-to-r from-yellow-200/40 via-yellow-300/30 to-purple-600/40 backdrop-blur-sm py-12 px-6 text-yellow-200 transition-all duration-300 hover:shadow-lg"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="bg-white/10 dark:bg-black/30 backdrop-blur-lg rounded-2xl overflow-hidden">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-sm text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 bg-white/10 text-gray-200 text-xs rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-purple-300 hover:text-yellow-300 transition-all">
                View Live <ExternalLink size={16} />
              </a>
            )}
            {project.pdf && (
              <a href={project.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-yellow-300 transition-all">
                <FileText size={16} /> Report
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-all">
                <Github size={16} /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedTab, setSelectedTab] = useState("All")
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(true)

  const filteredProjects =
    selectedTab === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTab))

  const showScrollArrows = filteredProjects.length > MIN_CARDS_FOR_SCROLL

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current && sliderRef.current.children.length > 0) {
      const firstChild = sliderRef.current.children[0] as HTMLElement
      const cardWidth = firstChild.offsetWidth + 24
      sliderRef.current.scrollBy({
        left: direction === "left" ? -cardWidth * 3 : cardWidth * 3,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    if (isScrolling && showScrollArrows && sliderRef.current) {
      const intervalId = setInterval(() => scroll("right"), 60000)
      return () => clearInterval(intervalId)
    }
  }, [isScrolling, selectedTab, showScrollArrows])

  const handleMouseEnter = () => setIsScrolling(false)
  const handleMouseLeave = () => setIsScrolling(true)

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-left text-white">Featured Projects</h2>

        <div className="flex flex-wrap gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedTab === tab
                  ? "bg-gradient-to-r from-yellow-400 to-purple-600 text-white shadow-md"
                  : "bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {showScrollArrows && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-purple-500/50 backdrop-blur-md text-white shadow-lg hover:scale-110 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          {showScrollArrows && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-purple-500/50 backdrop-blur-md text-white shadow-lg hover:scale-110 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          )}

          <div ref={sliderRef} className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar" style={{ scrollSnapType: "x mandatory" }}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
