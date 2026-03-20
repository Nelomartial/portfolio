// components/portfolio/WorkHistory.jsx
// Professional experience timeline. Edit the WORK_HISTORY array to add/update jobs.
// Displays company, role, period, location, description, and color-coded tech tags in alternating cards.

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const WORK_HISTORY = [
  {
    company: "Quantitative Capital Partners",
    role: "Quantitative Analyst",
    period: "Jan 2024 — Present",
    location: "New York, USA",
    description:
      "Developed statistical arbitrage strategies using cointegration and Kalman filtering. Built and maintained a real-time risk management system processing over 1M ticks/day. Collaborated with portfolio managers to optimize alpha signal generation.",
    tags: ["Python", "C++", "Risk Systems", "ML"],
    color: "#00d4ff",
  },
  {
    company: "FinTech Innovations Ltd.",
    role: "Software & Data Engineer",
    period: "Jun 2022 — Dec 2023",
    location: "London, UK",
    description:
      "Designed and deployed a real-time market data pipeline handling multiple exchange feeds with sub-millisecond latency. Built internal tooling for backtesting and performance attribution. Integrated LLM-based research automation tools.",
    tags: ["Kafka", "Python", "React", "Cloud"],
    color: "#a855f7",
  },
];

export default function WorkHistory() {
  return (
    <section className="py-24 px-4 md:px-8 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#555] border border-[#1a1a1a] px-4 py-2 rounded-full">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f5] tracking-[-0.03em] mt-8">
            Work History
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#1a1a1a] hidden md:block" />

          <div className="space-y-10">
            {WORK_HISTORY.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:ml-auto md:pl-10" : "md:mr-auto md:pr-10 md:text-right"}`}
              >
                {/* Timeline dot */}
                <div
                  className="hidden md:flex absolute top-6 w-3 h-3 rounded-full border-2 border-[#050505] items-center justify-center"
                  style={{
                    background: job.color,
                    [i % 2 === 0 ? "left" : "right"]: "-2.75rem",
                    transform: "translateX(-50%)",
                    ...(i % 2 !== 0 ? { transform: "translateX(50%)" } : {}),
                  }}
                />

                {/* Card */}
                <div
                  className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] p-6 hover:border-[#2a2a2a] transition-colors duration-300"
                  style={{ borderTop: `2px solid ${job.color}30` }}
                >
                  <div className={`flex items-start gap-3 mb-4 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${job.color}15`, border: `1px solid ${job.color}25` }}
                    >
                      <Briefcase className="w-4 h-4" style={{ color: job.color }} />
                    </div>
                    <div className={i % 2 !== 0 ? "md:text-right" : ""}>
                      <h3 className="text-[#f5f5f5] font-semibold text-lg">{job.role}</h3>
                      <p className="font-mono text-sm" style={{ color: job.color }}>{job.company}</p>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4 mb-4 ${i % 2 !== 0 ? "md:justify-end" : ""}`}>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-[#555]">
                      <Calendar className="w-3 h-3" />
                      {job.period}
                    </span>
                    <span className="font-mono text-xs text-[#333]">{job.location}</span>
                  </div>

                  <p className="text-[#555] text-sm leading-relaxed mb-4">{job.description}</p>

                  <div className={`flex flex-wrap gap-2 ${i % 2 !== 0 ? "md:justify-end" : ""}`}>
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 rounded border"
                        style={{ color: job.color, borderColor: `${job.color}25`, background: `${job.color}08` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
