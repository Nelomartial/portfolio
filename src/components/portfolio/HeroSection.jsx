// components/portfolio/HeroSection.jsx
// Full-screen landing section. Displays the name "Cyrille Nelo", a scrolling marquee of professional roles,
// a short tagline, ambient background glows, and an animated scroll indicator.

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const roles = [
  "Quantitative Analyst",
  "Algorithmic Trader",
  "Data Scientist",
  "AI Engineer",
  "Data Engineer",
  "Software Engineer",
];

const marqueeItems = [...roles, ...roles, ...roles, ...roles];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00d4ff] opacity-[0.03] blur-[120px] glow-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#a855f7] opacity-[0.03] blur-[100px] glow-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Top tag */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8"
      >
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#555] border border-[#1a1a1a] px-4 py-2 rounded-full">
          Portfolio / 2026
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.04em] text-center leading-[0.9]"
      >
        <span className="text-[#f5f5f5]">Cyrille Nelo</span>
        <br />
        <span className="gradient-text">Nelo</span>
      </motion.h1>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-full mt-12 overflow-hidden border-t border-b border-[#1a1a1a] py-4"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((role, i) => (
            <span key={i} className="flex items-center mx-6">
              <span className="font-mono text-sm md:text-base text-[#888] tracking-wide">
                {role}
              </span>
              <span className="ml-6 h-1 w-1 rounded-full bg-[#00d4ff] opacity-60" />
            </span>
          ))}
        </div>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-10 text-[#555] text-sm md:text-base max-w-md text-center leading-relaxed px-4"
      >
        Building at the intersection of mathematics, data, and software.
        <br />
        From signal to system.
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-[#333]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
