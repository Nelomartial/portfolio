// components/portfolio/SectionHeader.jsx
// Reusable animated header for any section. Accepts a tag (small label), a title, and an optional subtitle.
// Used to keep section introductions consistent across the page.

import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      {tag && (
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#555] border border-[#1a1a1a] px-4 py-2 rounded-full">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f5] tracking-[-0.03em] mt-8 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#555] text-sm max-w-md mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
