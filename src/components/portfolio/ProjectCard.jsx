// components/portfolio/ProjectCard.jsx
// Individual project card for the bento grid. Shows category badge, title, summary, tech stack,
// an optional "In Progress" badge (if project.in_progress is true), and a hover glow effect.

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

const categoryAccents = {
  Quant: { color: "#00d4ff", bg: "rgba(0,212,255,0.06)" },
  Algo: { color: "#a855f7", bg: "rgba(168,85,247,0.06)" },
  AI: { color: "#22d3ee", bg: "rgba(34,211,238,0.06)" },
  "Data Eng": { color: "#f97316", bg: "rgba(249,115,22,0.06)" },
  "Software Eng": { color: "#10b981", bg: "rgba(16,185,129,0.06)" },
};

const ProjectCard = React.forwardRef(function ProjectCard({ project, onClick, index }, ref) {
  const accent = categoryAccents[project.category] || categoryAccents["Quant"];
  const isLarge = index % 5 === 0 || index % 5 === 3;

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className={`group relative cursor-pointer rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] overflow-hidden transition-all duration-500 hover:border-[#2a2a2a] hover:bg-[#0d0d0d] ${
        isLarge ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${accent.bg}, transparent 40%)`,
        }}
      />

      <div className="relative p-6 md:p-8 h-full flex flex-col justify-between min-h-[200px]">
        {/* Top section */}
        <div>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border"
                style={{
                  color: accent.color,
                  borderColor: `${accent.color}30`,
                  background: `${accent.color}08`,
                }}
              >
                {project.category}
              </span>
              {project.in_progress && (
                <span className="flex items-center gap-1 font-mono text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border border-[#f59e0b30] bg-[#f59e0b08] text-[#f59e0b]">
                  <Clock className="w-2.5 h-2.5" />
                  In Progress
                </span>
              )}
            </div>
            <div className="w-8 h-8 rounded-full border border-[#1a1a1a] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-[#2a2a2a]">
              <ArrowUpRight className="w-3.5 h-3.5 text-[#555] group-hover:text-[#888] transition-colors" />
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-[#f5f5f5] tracking-[-0.02em] mb-3 group-hover:text-white transition-colors">
            {project.title}
          </h3>

          <p className="text-[#555] text-sm leading-relaxed line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-6">
          {(project.tech_stack || []).slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] text-[#444] bg-[#111] border border-[#1a1a1a] px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
          {(project.tech_stack || []).length > 4 && (
            <span className="font-mono text-[10px] text-[#333] px-2 py-0.5">
              +{project.tech_stack.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${accent.color}40, transparent)` }}
      />
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
