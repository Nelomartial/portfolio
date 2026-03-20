// components/portfolio/ProjectDetailPanel.jsx
// Slide-in side drawer that opens when a project card is clicked. Shows the full project details:
// title, summary, deep-dive description, full tech stack, and an optional link button (GitHub / Live Demo).

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";

const categoryAccents = {
  Quant: "#00d4ff",
  Algo: "#a855f7",
  AI: "#22d3ee",
  "Data Eng": "#f97316",
  "Software Eng": "#10b981",
};

export default function ProjectDetailPanel({ project, onClose }) {
  if (!project) return null;
  const accent = categoryAccents[project.category] || "#00d4ff";

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full md:w-[560px] bg-[#0a0a0a] border-l border-[#1a1a1a] z-50 overflow-y-auto"
          >
            {/* Close */}
            <div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]">
              <span
                className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border"
                style={{
                  color: accent,
                  borderColor: `${accent}30`,
                  background: `${accent}08`,
                }}
              >
                {project.category}
              </span>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-[#1a1a1a] flex items-center justify-center hover:border-[#2a2a2a] hover:bg-[#111] transition-all"
              >
                <X className="w-4 h-4 text-[#555]" />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              {/* Title */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#f5f5f5] tracking-[-0.03em] mb-3">
                  {project.title}
                </h2>
                <p className="text-[#888] text-sm leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-[#1a1a1a]" />

              {/* Deep Dive */}
              {project.deep_dive && (
                <div>
                  <h3 className="font-mono text-xs tracking-[0.15em] uppercase text-[#555] mb-4">
                    Deep Dive
                  </h3>
                  <div className="text-[#999] text-sm leading-[1.8] whitespace-pre-line">
                    {project.deep_dive}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              {project.tech_stack?.length > 0 && (
                <div>
                  <h3 className="font-mono text-xs tracking-[0.15em] uppercase text-[#555] mb-4">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3 py-1.5 rounded-lg border border-[#1a1a1a] bg-[#111] text-[#888] hover:border-[#2a2a2a] hover:text-[#aaa] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Button */}
              {project.link_url && (
                <div className="pt-4">
                  <a
                    href={project.link_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-full h-12 rounded-xl font-medium text-sm tracking-wide transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${accent}15, ${accent}08)`,
                        border: `1px solid ${accent}25`,
                        color: accent,
                      }}
                    >
                      {project.link_type === "Live Demo" ? (
                        <ExternalLink className="w-4 h-4 mr-2" />
                      ) : (
                        <Github className="w-4 h-4 mr-2" />
                      )}
                      {project.link_type || "View Code"}
                    </Button>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}