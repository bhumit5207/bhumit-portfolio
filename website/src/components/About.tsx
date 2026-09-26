import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Layers, Terminal, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/sound';

export const About: React.FC = () => {
  const whatIDoList = [
    'Manual Testing',
    'Automation Testing',
    'Backend Testing',
    'Database Validation',
    'SQL Data Validation',
    'Regression Testing',
    'UAT Testing',
    'Localization Testing',
  ];

  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Turning Quality Into <span className="text-gradient-cyan">Trust</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20 relative shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <ShieldCheck className="w-24 h-24 text-cyan-400" />
              </div>

              <h3 className="text-xl font-bold font-heading text-cyan-300 mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Executive QA Profile</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
                Detail-oriented and results-driven SQA Engineer with 3 years of experience spanning Manual Testing, Automation Testing, and Backend Database Validation across the E-Commerce and Fintech domains. Adept at building and executing scalable automation frameworks utilizing Playwright, Selenium WebDriver, Testim.io, and Robot Framework. Proven track record of executing complex SQL data validations, tracking defects via Jira, and collaborating in Agile/Scrum environments to ensure high-quality software delivery across web and mobile platforms.
              </p>

              {/* Highlights pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-cyan-500/15">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-200">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>2 Domains (E-Commerce & Fintech)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-200">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Cross-Browser & Mobile</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>SQL & ETL Validation</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual & "What I Do" Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* 3D Dashboard & QA Pipeline Visual Box */}
            <div className="glass-panel p-6 rounded-2xl border border-cyan-400/30 relative overflow-hidden shadow-[0_0_30px_rgba(22,135,255,0.2)]">
              {/* Decorative top bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-cyan-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[11px] font-mono text-cyan-400 font-bold">
                  QA_ENGINE_MATRIX.V2
                </span>
              </div>

              {/* Interactive Checklist: What I Do */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold font-heading text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span>What I Do</span>
                  </h4>
                  <span className="text-[10px] font-mono bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded">
                    Core Capabilities
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {whatIDoList.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.03, x: 4 }}
                      onMouseEnter={() => soundFx.playHover()}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-950/40 transition text-xs font-mono text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
