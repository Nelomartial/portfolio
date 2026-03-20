// pages/Home.jsx
// Main portfolio page. Assembles all sections (Hero, Projects, Slideshow, Work History, Contact, Footer)
// and manages global state: active project filter, selected project detail panel, and dark mode toggle.

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import HeroSection from "../components/portfolio/HeroSection";
import SectionHeader from "../components/portfolio/SectionHeader";
import FilterBar from "../components/portfolio/FilterBar";
import ProjectCard from "../components/portfolio/ProjectCard";
import ProjectDetailPanel from "../components/portfolio/ProjectDetailPanel";
import ProjectSlideshow from "../components/portfolio/ProjectSlideshow";
import WorkHistory from "../components/portfolio/WorkHistory";
import ContactSection from "../components/portfolio/ContactSection";
import ContactBar from "../components/portfolio/ContactBar";
import DarkModeToggle from "../components/portfolio/DarkModeToggle";
import Footer from "../components/portfolio/Footer";

const PROJECTS = [
  {
    id: "1",
    in_progress: true,
    title: "Statistical Arbitrage Engine",
    category: "Quant",
    summary: "A pairs trading system using cointegration and Kalman filter for dynamic hedge ratio estimation. Backtested on 10 years of equity data with Sharpe > 1.8.",
    deep_dive: "Built a full statistical arbitrage pipeline including pair selection via cointegration tests (Engle-Granger, Johansen), dynamic hedge ratio estimation using a Kalman filter, and a mean-reversion entry/exit signal. The system was backtested on 10 years of US equity data using vectorized backtesting in Python, achieving a Sharpe ratio of 1.8 and max drawdown of 12%.",
    tech_stack: ["Python", "NumPy", "pandas", "statsmodels", "Kalman Filter"],
    sort_order: 1,
  },
  {
    id: "2",
    title: "HFT Order Book Simulator",
    category: "Algo",
    summary: "A high-fidelity limit order book simulator supporting market, limit, and iceberg orders with nanosecond-level timestamps.",
    deep_dive: "Implemented a full limit order book (LOB) simulation engine in C++ with support for market, limit, stop, and iceberg orders. Designed for latency benchmarking and strategy prototyping, with a Python wrapper for ease of use. Supports order matching, partial fills, and real-time feed simulation.",
    tech_stack: ["C++", "Python", "Pybind11", "Boost"],
    sort_order: 2,
  },
  {
    id: "3",
    title: "LLM-Powered Research Assistant",
    category: "AI",
    summary: "A RAG-based research assistant that ingests financial filings, earnings calls, and news to answer analyst-style questions.",
    deep_dive: "Built a Retrieval-Augmented Generation (RAG) pipeline that ingests SEC filings, earnings call transcripts, and financial news. Documents are chunked, embedded with a sentence transformer model, and stored in a vector database. Queries are answered by a fine-tuned LLM with citations, enabling analyst-level research automation.",
    tech_stack: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI"],
    sort_order: 3,
  },
  {
    id: "4",
    title: "Real-Time Market Data Pipeline",
    category: "Data Eng",
    summary: "A low-latency streaming pipeline ingesting tick data from multiple exchanges, normalizing and storing for downstream analytics.",
    deep_dive: "Designed and deployed a real-time data pipeline using Kafka for message streaming, Flink for stateful stream processing, and TimescaleDB for time-series storage. The pipeline ingests raw tick data from multiple crypto and equity exchanges, normalizes schemas, computes OHLCV bars, and feeds downstream ML models and dashboards.",
    tech_stack: ["Kafka", "Apache Flink", "TimescaleDB", "Python", "Docker"],
    sort_order: 4,
  },
  {
    id: "5",
    title: "Options Pricing Library",
    category: "Quant",
    summary: "A modular options pricing library supporting Black-Scholes, Heston, and Monte Carlo methods with Greeks computation.",
    deep_dive: "Developed a high-performance options pricing library in Python with C extensions for speed-critical paths. Supports Black-Scholes analytical pricing, Heston stochastic volatility model via characteristic function, and Monte Carlo simulation with variance reduction techniques. Full Greeks computation (delta, gamma, vega, theta, rho) and implied volatility surface construction included.",
    tech_stack: ["Python", "C", "NumPy", "SciPy", "Cython"],
    sort_order: 5,
  },
  {
    id: "6",
    title: "Distributed Backtesting Framework",
    category: "Software Eng",
    summary: "A distributed backtesting system that runs thousands of strategy parameter combinations in parallel across a compute cluster.",
    deep_dive: "Architected a distributed backtesting framework using Ray for parallel compute orchestration and Redis for job queueing and result caching. The system enables parameter sweeps over thousands of strategy configurations simultaneously, reducing backtesting time from hours to minutes. Includes a web-based dashboard for result visualization and analysis.",
    tech_stack: ["Python", "Ray", "Redis", "React", "Docker", "Kubernetes"],
    sort_order: 6,
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [dark, setDark] = useState(true);

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className={`min-h-screen ${dark ? "bg-[#050505]" : "bg-[#f8f8f8]"}`}>
      <ContactBar />
      <DarkModeToggle dark={dark} onToggle={() => setDark(!dark)} />
      {/* Hero */}
      <div className="pt-10">
        <HeroSection />
      </div>

      {/* Projects Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Selected Work"
            title="Projects"
            subtitle="A collection of work spanning quantitative finance, machine learning, and systems engineering."
          />

          {/* Filter Bar */}
          <div className="mb-12">
            <FilterBar active={activeFilter} onChange={setActiveFilter} />
          </div>

          {/* Bento Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-mono text-sm text-[#333]">No projects in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {filtered.map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={i}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Project Slideshow */}
      <ProjectSlideshow />

      {/* Work History */}
      <WorkHistory />

      {/* Contact */}
      <div className="border-t border-[#1a1a1a]">
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />

      {/* Project Detail Panel */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailPanel
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
