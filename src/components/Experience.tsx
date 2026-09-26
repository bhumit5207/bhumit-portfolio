import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Globe, Database, Sparkles, CheckCircle } from 'lucide-react';
import { soundFx } from '../utils/sound';

export const Experience: React.FC = () => {
  const [activeProjectTab, setActiveProjectTab] = useState<'project1' | 'project2'>('project1');

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Professional <span className="text-gradient-cyan">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Hands-on SQA engineering experience across global E-Commerce launches and Fintech database validations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Company Card Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-400/30 mb-8 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-cyan-500/20 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[1px] shadow-[0_0_20px_rgba(54,217,255,0.4)]">
                  <div className="w-full h-full bg-[#061329] rounded-[15px] flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold font-heading text-white">
                    QAble Testlab Private Limited
                  </h3>
                  <p className="text-cyan-300 font-mono text-sm font-semibold">
                    SQA Engineer – L1
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Ahmedabad, India</span>
              </div>
              <div className="flex items-center gap-1.5 bg-cyan-950/60 px-3 py-1.5 rounded-lg border border-cyan-500/30 text-cyan-300 font-bold">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Jan 2024 – Present</span>
              </div>
            </div>
          </div>

          {/* Project Tabs Selector */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveProjectTab('project1');
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all duration-300 ${
                activeProjectTab === 'project1'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(54,217,255,0.4)] border border-cyan-300'
                  : 'bg-slate-900/60 text-slate-300 border border-cyan-500/20 hover:text-cyan-300'
              }`}
            >
              <Globe className="w-4 h-4 text-cyan-300" />
              <span>Project 1 — E-Commerce Platform</span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                setActiveProjectTab('project2');
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all duration-300 ${
                activeProjectTab === 'project2'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(54,217,255,0.4)] border border-cyan-300'
                  : 'bg-slate-900/60 text-slate-300 border border-cyan-500/20 hover:text-cyan-300'
              }`}
            >
              <Database className="w-4 h-4 text-cyan-300" />
              <span>Project 2 — Fintech Platform</span>
            </button>
          </div>
        </motion.div>

        {/* Project 1 Details */}
        {activeProjectTab === 'project1' && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30"
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-400/30">
                  Domain: E-Commerce
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-900/60 text-blue-200 font-mono text-xs border border-blue-500/30">
                  Platform: Web + Mobile Application
                </span>
              </div>

              <h4 className="text-xl font-bold font-heading text-white">
                Global E-Commerce Quality Assurance & Automation
              </h4>

              <div className="space-y-3">
                <h5 className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-bold">
                  Core Responsibilities:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                  {[
                    'Functional Testing',
                    'Localization Testing',
                    'Automation Testing',
                    'Playwright automation',
                    'Testim.io regression testing',
                    'Cross-browser testing',
                    'Mobile viewport testing',
                    'UAT testing',
                    'Sanity testing',
                    'UI validation against Figma designs',
                  ].map((resp, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/50 border border-cyan-500/10">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Highlights & Global Regions */}
            <div className="lg:col-span-5 space-y-6">
              {/* Regions Badge */}
              <div className="bg-slate-900/70 p-5 rounded-2xl border border-cyan-500/20 space-y-3">
                <h5 className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>Global Tested Regions</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {['Canada 🇨🇦', 'Brazil 🇧🇷', 'Japan 🇯🇵', 'UK 🇬🇧', 'France 🇫🇷'].map((region) => (
                    <span
                      key={region}
                      className="px-3 py-1 rounded-lg bg-cyan-950/80 text-cyan-200 border border-cyan-400/30 text-xs font-mono font-semibold"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>

              {/* Major Milestone Highlights */}
              <div className="bg-gradient-to-br from-cyan-950/50 to-blue-950/50 p-5 rounded-2xl border border-cyan-400/30 space-y-3">
                <h5 className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                  Major Project Highlights:
                </h5>
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/30 flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                    <div>
                      <h6 className="font-bold text-white text-xs">Japan Site Launch</h6>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Executed full localization, currency calculation, and UI responsive validation for Japan e-commerce rollout.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/30 flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                    <div>
                      <h6 className="font-bold text-white text-xs">Passwordless Login Integration</h6>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Validated seamless OTP and magic link authentication flows with automated regression scenarios.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Project 2 Details (Fintech) */}
        {activeProjectTab === 'project2' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30"
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-mono text-xs font-bold border border-purple-400/30">
                  Domain: Fintech
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-900/60 text-blue-200 font-mono text-xs border border-blue-500/30">
                  Platform: Web Application
                </span>
              </div>

              <h4 className="text-xl font-bold font-heading text-white">
                Fintech Platform Backend & SQL Data Validation
              </h4>

              <div className="space-y-3">
                <h5 className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-bold">
                  Backend & SQL Validation Scope:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                  {[
                    'Backend validation',
                    'Database testing',
                    'SQL validation',
                    'Data integrity validation',
                    'ETL validation',
                    'Data mapping validation',
                    'Transformation validation',
                    'Business rule validation',
                    'Count validation',
                    'Delta comparison',
                    'Missing record validation',
                    'Defect tracking using Jira',
                  ].map((resp, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/50 border border-cyan-500/10">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Animated Database / SQL Visualization */}
            <div className="lg:col-span-5">
              <div className="bg-[#040d1a] p-6 rounded-2xl border border-cyan-500/30 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold">
                    <Database className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span>SQL Data Integrity Monitor</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                    STATUS: OK ✓
                  </span>
                </div>

                {/* Animated SQL Delta Table */}
                <div className="font-mono text-[11px] space-y-2 text-cyan-200">
                  <div className="bg-slate-900/90 p-2.5 rounded-lg border border-cyan-500/20">
                    <span className="text-slate-400 block">// SQL Count & Delta Match Query</span>
                    <span className="text-purple-300">SELECT</span> count(*) <span className="text-purple-300">FROM</span> fintech_ledger;
                  </div>

                  <div className="space-y-1 bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <div className="flex justify-between text-slate-400 border-b border-slate-800 pb-1 text-[10px]">
                      <span>CHECK_TYPE</span>
                      <span>RECORD_COUNT</span>
                      <span>STATUS</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Source SQL</span>
                      <span className="text-white">1,482,900</span>
                      <span className="text-emerald-400">MATCH</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Target DB</span>
                      <span className="text-white">1,482,900</span>
                      <span className="text-emerald-400">MATCH</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-800 pt-1 font-bold">
                      <span>Delta Variance</span>
                      <span className="text-cyan-300">0.000%</span>
                      <span className="text-emerald-400">PASSED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
