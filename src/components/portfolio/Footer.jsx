// components/portfolio/Footer.jsx
// Page footer. Shows email, phone, a centered name divider, copyright notice, and social icon links.
// Update the CONTACTS object with your real details.

import React from "react";
import { Mail, Github, Linkedin, Twitter, Phone } from "lucide-react";

const CONTACTS = {
  email: "nelomartial@yahoo.com",      // Replace with your email
  phone: "+33669233372",           // Replace with your phone
  github: "https://github.com/Nelomartial",    // Replace with your GitHub
  linkedin: "https://linkedin.com/in/cyrille-nelo", // Replace with your LinkedIn
};

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Contact Info Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href={`mailto:${CONTACTS.email}`}
            className="flex items-center gap-2 font-mono text-xs text-[#555] hover:text-[#00d4ff] transition-colors group"
          >
            <Mail className="w-3.5 h-3.5 group-hover:text-[#00d4ff]" />
            {CONTACTS.email}
          </a>
          <a
            href={`tel:${CONTACTS.phone}`}
            className="flex items-center gap-2 font-mono text-xs text-[#555] hover:text-[#00d4ff] transition-colors group"
          >
            <Phone className="w-3.5 h-3.5 group-hover:text-[#00d4ff]" />
            {CONTACTS.phone}
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px flex-1 bg-[#1a1a1a]" />
          <span className="font-mono text-xs text-[#333] px-4">Cyrille Nelo</span>
          <div className="h-px flex-1 bg-[#1a1a1a]" />
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-[#333]">
            © {new Date().getFullYear()} Cyrille Nelo — All rights reserved
          </span>
          <div className="flex items-center gap-5">
            <a href={CONTACTS.github} target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-[#00d4ff] transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={CONTACTS.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-[#00d4ff] transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={CONTACTS.twitter} target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-[#00d4ff] transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
