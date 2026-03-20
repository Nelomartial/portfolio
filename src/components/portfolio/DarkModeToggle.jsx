// components/portfolio/DarkModeToggle.jsx
// Floating button fixed to the bottom-right corner. Toggles between dark and light background.
// Receives `dark` (boolean) and `onToggle` (function) as props from pages/Home.

import React from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function DarkModeToggle({ dark, onToggle }) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full border border-[#2a2a2a] bg-[#0a0a0a] flex items-center justify-center hover:border-[#00d4ff40] transition-all duration-300 shadow-lg"
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? (
        <Sun className="w-4 h-4 text-[#888]" />
      ) : (
        <Moon className="w-4 h-4 text-[#888]" />
      )}
    </motion.button>
  );
}
