// components/portfolio/ContactBar.jsx
// Fixed top navigation bar. Always visible, shows the name, email, phone (hidden on mobile),
// and social links (GitHub, LinkedIn, Twitter). Update the CONTACTS object with your real info.

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";

const CONTACTS = {
  email: "nelomartial@yahoo.com",
  phone: "+33669233372",
  github: "https://github.com/cyrille-nelo",
  linkedin: "https://linkedin.com/in/cyrille-nelo",
};

export default function ContactBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a1a1a] bg-[#050505cc] backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between">
        <span className="font-mono text-xs text-[#444] tracking-widest uppercase">Cyrille Nelo</span>
        <div className="flex items-center gap-4 md:gap-6">
          <a
            href={`mailto:${CONTACTS.email}`}
            className="hidden md:flex items-center gap-1.5 font-mono text-[10px] text-[#444] hover:text-[#00d4ff] transition-colors"
          >
            <Mail className="w-3 h-3" />
            {CONTACTS.email}
          </a>
          <a
            href={`tel:${CONTACTS.phone}`}
            className="hidden md:flex items-center gap-1.5 font-mono text-[10px] text-[#444] hover:text-[#00d4ff] transition-colors"
          >
            <Phone className="w-3 h-3" />
            {CONTACTS.phone}
          </a>
          <div className="flex items-center gap-3">
            <a href={CONTACTS.github} target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-[#00d4ff] transition-colors">
              <Github className="w-3.5 h-3.5" />
            </a>
            <a href={CONTACTS.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-[#00d4ff] transition-colors">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
