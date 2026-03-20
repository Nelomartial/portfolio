// components/portfolio/ContactSection.jsx
// Contact form section near the bottom of the page. On submit, opens a pre-filled mailto link
// in a new tab. Update CONTACT_EMAIL with your real address.

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Send, CheckCircle } from "lucide-react";

const CONTACT_EMAIL = "nelomartial@yahoo.com"; // Replace with your email

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, "_blank");
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#555] border border-[#1a1a1a] px-4 py-2 rounded-full">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f5] tracking-[-0.03em] mt-8 mb-4">
            Let's Build Something
          </h2>
          <p className="text-[#555] text-sm">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="h-12 bg-[#0a0a0a] border-[#1a1a1a] text-[#f5f5f5] placeholder:text-[#333] rounded-xl focus:border-[#00d4ff30] focus:ring-0 text-sm"
            />
            <Input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="h-12 bg-[#0a0a0a] border-[#1a1a1a] text-[#f5f5f5] placeholder:text-[#333] rounded-xl focus:border-[#00d4ff30] focus:ring-0 text-sm"
            />
          </div>
          <Textarea
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={5}
            className="bg-[#0a0a0a] border-[#1a1a1a] text-[#f5f5f5] placeholder:text-[#333] rounded-xl focus:border-[#00d4ff30] focus:ring-0 text-sm resize-none"
          />

          <Button
            type="submit"
            disabled={status !== "idle"}
            className="w-full h-12 rounded-xl text-sm font-medium tracking-wide transition-all duration-300"
            style={{
              background: status === "sent"
                ? "rgba(16,185,129,0.1)"
                : "linear-gradient(135deg, rgba(0,212,255,0.1), rgba(168,85,247,0.1))",
              border: status === "sent"
                ? "1px solid rgba(16,185,129,0.25)"
                : "1px solid rgba(0,212,255,0.2)",
              color: status === "sent" ? "#10b981" : "#00d4ff",
            }}
          >
            {status === "idle" && (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
            {status === "sending" && (
              <Loader2 className="w-4 h-4 animate-spin" />
            )}
            {status === "sent" && (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Message Sent
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}