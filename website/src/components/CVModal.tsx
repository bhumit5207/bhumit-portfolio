import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, Phone, MapPin } from 'lucide-react';
import { soundFx } from '../utils/sound';
import { downloadCV } from '../utils/downloadCV';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#081B36] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(22,135,255,0.3)] overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-[#061329]/90 sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-sm text-cyan-300 font-semibold tracking-wider uppercase">
                Bhumit_Kotadiya_CV.pdf
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={downloadCV}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-semibold transition"
              >
                <Printer className="w-3.5 h-3.5" />
                Print
              </button>
              <button
                onClick={() => {
                  soundFx.playClick();
                  onClose();
                }}
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CV Printable Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:bg-white print:text-black">
            {/* Header */}
            <div className="border-b border-cyan-500/20 pb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold text-white font-heading tracking-tight">
                    BHUMIT KOTADIYA
                  </h1>
                  <p className="text-cyan-400 font-semibold text-lg mt-1 font-mono">
                    SQA Engineer – L1
                  </p>
                </div>
                <div className="text-xs font-mono space-y-1 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <a href="mailto:bhumit5207@gmail.com" className="hover:underline text-cyan-200">
                      bhumit5207@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>+91 6355934373</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Ahmedabad, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-sm font-mono text-cyan-400 tracking-wider uppercase font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" /> Professional Summary
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-cyan-500/10">
                Detail-oriented and results-driven SQA Engineer with 3 years of experience spanning Manual Testing, Automation Testing, and Backend Database Validation across the E-Commerce and Fintech domains. Adept at building and executing scalable automation frameworks utilizing Playwright, Selenium WebDriver, Testim.io, and Robot Framework. Proven track record of executing complex SQL data validations, tracking defects via Jira, and collaborating in Agile/Scrum environments to ensure high-quality software delivery across web and mobile platforms.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-sm font-mono text-cyan-400 tracking-wider uppercase font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" /> Core Competencies & Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-900/40 p-3 rounded-lg border border-cyan-500/10">
                  <span className="font-bold text-cyan-300 block mb-1">Automation Frameworks:</span>
                  <span className="text-slate-300">Playwright, Selenium WebDriver, Testim.io, Robot Framework</span>
                </div>
                <div className="bg-slate-900/40 p-3 rounded-lg border border-cyan-500/10">
                  <span className="font-bold text-cyan-300 block mb-1">Languages:</span>
                  <span className="text-slate-300">Python, JavaScript, TypeScript</span>
                </div>
                <div className="bg-slate-900/40 p-3 rounded-lg border border-cyan-500/10">
                  <span className="font-bold text-cyan-300 block mb-1">Database & Backend Validation:</span>
                  <span className="text-slate-300">SQL, PostgreSQL, MariaDB, Count & Delta Checks, ETL Validation</span>
                </div>
                <div className="bg-slate-900/40 p-3 rounded-lg border border-cyan-500/10">
                  <span className="font-bold text-cyan-300 block mb-1">QA Testing Types:</span>
                  <span className="text-slate-300">Manual Testing, Sanity, Regression, UAT, Localization Testing</span>
                </div>
                <div className="bg-slate-900/40 p-3 rounded-lg border border-cyan-500/10">
                  <span className="font-bold text-cyan-300 block mb-1">Tools & Platforms:</span>
                  <span className="text-slate-300">Jira, Git, GitHub, Figma, MS Excel | Windows, Linux, Android, iOS</span>
                </div>
                <div className="bg-slate-900/40 p-3 rounded-lg border border-cyan-500/10">
                  <span className="font-bold text-cyan-300 block mb-1">Browsers:</span>
                  <span className="text-slate-300">Chrome, Firefox, Safari, Edge</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-sm font-mono text-cyan-400 tracking-wider uppercase font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" /> Professional Experience
              </h2>
              <div className="space-y-4">
                <div className="bg-slate-900/40 p-4 rounded-xl border border-cyan-500/15">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <div>
                      <h3 className="font-bold text-white text-base">QAble Testlab Private Limited</h3>
                      <p className="text-xs text-cyan-300 font-medium">SQA Engineer – L1 | Ahmedabad, India</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md mt-1 sm:mt-0">
                      Jan 2024 – Present
                    </span>
                  </div>

                  <div className="space-y-3 mt-3">
                    <div className="border-l-2 border-cyan-500/40 pl-3">
                      <h4 className="text-xs font-bold text-cyan-200">Project 1: Global E-Commerce Platform (Web & Mobile)</h4>
                      <ul className="text-xs text-slate-300 space-y-1 mt-1 list-disc list-inside">
                        <li>Executed comprehensive Functional, Localization, and Regression testing across 5 regions (Canada, Brazil, Japan, UK, France).</li>
                        <li>Automated key test scenarios using Playwright and Testim.io to improve regression speed and release readiness.</li>
                        <li>Performed Mobile Viewport and Cross-Browser validation aligned with Figma design specs.</li>
                        <li>Key Launches: Successfully validated the Japan Site Launch and Passwordless Login Integration.</li>
                      </ul>
                    </div>

                    <div className="border-l-2 border-blue-500/40 pl-3">
                      <h4 className="text-xs font-bold text-cyan-200">Project 2: Fintech Platform (Web Application)</h4>
                      <ul className="text-xs text-slate-300 space-y-1 mt-1 list-disc list-inside">
                        <li>Conducted deep Backend Database and SQL validation utilizing PostgreSQL and MariaDB.</li>
                        <li>Validated ETL data pipelines, data mapping integrity, business rules, count checks, and delta-comparison logic.</li>
                        <li>Logged, prioritized, and retested software defects in Jira to ensure rapid bug resolution in Agile Sprints.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-sm font-mono text-cyan-400 tracking-wider uppercase font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" /> Education
              </h2>
              <div className="bg-slate-900/40 p-4 rounded-xl border border-cyan-500/10 flex justify-between items-center text-xs">
                <div>
                  <h3 className="font-bold text-white text-sm">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-slate-400">Parul Institute of Computer Application</p>
                </div>
                <span className="font-mono text-cyan-300 font-semibold bg-cyan-950/60 px-3 py-1 rounded-md border border-cyan-500/30">
                  Graduated: 2024
                </span>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="px-6 py-4 border-t border-cyan-500/20 bg-[#061329] flex justify-between items-center">
            <span className="text-xs font-mono text-slate-400">Bhumit Kotadiya • SQA Engineer</span>
            <button
              onClick={downloadCV}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs transition shadow-[0_0_15px_rgba(54,217,255,0.4)]"
            >
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
