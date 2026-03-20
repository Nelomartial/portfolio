// components/portfolio/FilterBar.jsx
// Category filter bar for the projects section. Lets users filter by All, Quant, Algo, AI, Data Eng,
// or Software Eng. Highlights the active filter with an animated sliding background.

import React from "react";
import { motion } from "framer-motion";

const categories = ["All", "Quant", "Algo", "AI", "Data Eng", "Software Eng"];

const categoryIcons = {
  All: "⬡",
  Quant: "∑",
  Algo: "⟐",
  AI: "◈",
  "Data Eng": "⬢",
  "Software Eng": "⌘",
};

export default function FilterBar({ active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className="relative px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium tracking-wide transition-all duration-300"
          style={{
            background: active === cat ? "transparent" : "transparent",
            color: active === cat ? "#f5f5f5" : "#555",
            border: `1px solid ${active === cat ? "#2a2a2a" : "#1a1a1a"}`,
          }}
        >
          {active === cat && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(0,212,255,0.1), rgba(168,85,247,0.1))",
                border: "1px solid rgba(0,212,255,0.2)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            <span className="opacity-60">{categoryIcons[cat]}</span>
            {cat}
          </span>
        </button>
      ))}
    </div>
  );
}
