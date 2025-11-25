"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import EmailSection from "./EmailSection"; // adjust path if needed

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        {/* Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-4xl font-bold text-yellow-400">
            Let's Work Together
          </h2>
          <p className="text-lg text-yellow-300">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </motion.div>

        {/* Radix Dialog for Email */}
        <Dialog.Root>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <Dialog.Trigger asChild>
              <motion.button
                whileHover={{
                  y: [-2, -6, 0], // jump effect
                  transition: { duration: 0.4, repeat: 1, repeatType: "mirror" },
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-purple-500 text-white rounded-lg transition-transform duration-300 font-medium flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Send Email
              </motion.button>
            </Dialog.Trigger>
          </motion.div>

          {/* Dialog Overlay */}
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Dialog Content */}
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-xl p-8 max-w-3xl w-full shadow-lg">
            <Dialog.Title>
              <VisuallyHidden>Contact Form</VisuallyHidden>
            </Dialog.Title>
            <EmailSection />
            <Dialog.Close className="absolute top-4 right-4 text-white hover:text-yellow-400 font-bold text-xl">
              ×
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Root>

        {/* Social Links */}
        {/* Social Links */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="flex gap-6 justify-center pt-8"
>
  {[
    {
      icon: <Github size={20} />,
      href: "https://github.com/sophiya003",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/sophiya-khadka-a10b78263/",
      label: "LinkedIn",
    },
    {
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5 text-yellow-400"
      >
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.5.2.9.4 1.3.8s.6.8.8 1.3c.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.5-.4.9-.8 1.3s-.8.6-1.3.8c-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.5-.2-.9-.4-1.3-.8s-.6-.8-.8-1.3c-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.5.4-.9.8-1.3s.8-.6 1.3-.8c.4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.7.4 4 .7c-.8.3-1.5.7-2.2 1.4C1 3.2.6 3.9.3 4.7.1 5.3 0 6.3 0 7c-.1 1.3-.1 1.7-.1 5s0 3.7.1 5c.1.7.3 1.7.6 2.3.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.7.3 1.7.5 2.3.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c.7-.1 1.7-.3 2.3-.6.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.7.5-1.7.6-2.3.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-.7-.3-1.7-.6-2.3-.3-.8-.7-1.5-1.4-2.2-.7-.7-1.4-1.1-2.2-1.4-.7-.3-1.7-.5-2.3-.6C15.7 0 15.3 0 12 0z" />
        <path d="M12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.3a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
      </svg>,
      href: "https://www.instagram.com/__sophiiiiyaaaas/",
      label: "Instagram",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:sophiyakhadka003@gmail.com",
      label: "Email",
    },
  ].map(({ icon, href, label }, idx) => (
    <motion.a
      key={idx}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 border border-yellow-500 rounded-lg"
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      <span className="text-yellow-400">{icon}</span>
    </motion.a>
  ))}
</motion.div>

      </div>
    </section>
  );
}
