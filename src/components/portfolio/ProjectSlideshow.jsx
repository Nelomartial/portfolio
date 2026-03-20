// components/portfolio/ProjectSlideshow.jsx
// Visual gallery section. Displays projects as a full-width animated slideshow with nav arrows,
// dot indicators, and a thumbnail strip at the bottom for quick navigation.

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const PROJECT_IMAGES = [
  {
    id: "1",
    title: "Statistical Arbitrage Engine",
    category: "Quant",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    summary: "A pairs trading system using cointegration and Kalman filter for dynamic hedge ratio estimation.",
  },
  {
    id: "2",
    title: "HFT Order Book Simulator",
    category: "Algo",
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=1200&q=80",
    summary: "A high-fidelity limit order book simulator with nanosecond-level timestamps.",
  },
  {
    id: "3",
    title: "LLM-Powered Research Assistant",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80",
    summary: "A RAG-based research assistant that ingests financial filings and earnings calls.",
  },
  {
    id: "4",
    title: "Real-Time Market Data Pipeline",
    category: "Data Eng",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    summary: "A low-latency streaming pipeline ingesting tick data from multiple exchanges.",
  },
  {
    id: "5",
    title: "Options Pricing Library",
    category: "Quant",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200&q=80",
    summary: "A modular options pricing library supporting Black-Scholes, Heston, and Monte Carlo methods.",
  },
  {
    id: "6",
    title: "Distributed Backtesting Framework",
    category: "Software Eng",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    summary: "A distributed backtesting system running thousands of strategy parameter combinations in parallel.",
  },
];

const categoryColors = {
  Quant: "#00d4ff",
  Algo: "#a855f7",
  AI: "#f59e0b",
  "Data Eng": "#10b981",
  "Software Eng": "#f43f5e",
};

export default function ProjectSlideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + PROJECT_IMAGES.length) % PROJECT_IMAGES.length);
  };

  const project = PROJECT_IMAGES[current];
  const color = categoryColors[project.category] || "#00d4ff";

  return (
    <section className="py-24 px-4 md:px-8 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#555] border border-[#1a1a1a] px-4 py-2 rounded-full">
            Visual Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f5] tracking-[-0.03em] mt-8">
            Project Gallery
          </h2>
        </div>

        {/* Slideshow */}
        <div className="relative rounded-2xl overflow-hidden border border-[#1a1a1a] bg-[#0a0a0a]" style={{ height: "480px" }}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              initial={{ x: direction * 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction * -60, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#05050580] to-transparent" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span
                  className="font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full border mb-4 inline-block"
                  style={{ color, borderColor: `${color}30`, background: `${color}10` }}
                >
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#f5f5f5] mb-2">{project.title}</h3>
                <p className="text-[#888] text-sm max-w-xl">{project.summary}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons */}
          <button
            onClick={() => go(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#2a2a2a] bg-[#050505cc] flex items-center justify-center hover:border-[#00d4ff40] transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-[#888]" />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#2a2a2a] bg-[#050505cc] flex items-center justify-center hover:border-[#00d4ff40] transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-[#888]" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {PROJECT_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: i === current ? "24px" : "8px",
                background: i === current ? "#00d4ff" : "#2a2a2a",
              }}
            />
          ))}
        </div>

        {/* Thumbnail Strip */}
        <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
          {PROJECT_IMAGES.map((p, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className="flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300"
              style={{
                borderColor: i === current ? "#00d4ff" : "#1a1a1a",
                width: "100px",
                height: "64px",
              }}
            >
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
