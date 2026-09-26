import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Database, Bot, Sparkles, Terminal, CheckCircle2, X, Play } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface QAProject {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  icon: React.ElementType;
  color: string;
  highlights: string[];
  demoSnippet: string;
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<QAProject | null>(null);
  const [testLogs, setTestLogs] = useState<string[]>([]);

  const projectsList: QAProject[] = [
    {
      id: 'proj1',
      num: 'Project 01',
      title: 'E-Commerce Quality Engineering',
      subtitle: 'Multi-Region & Localization Testing',
      tags: ['Playwright', 'Testim.io', 'Manual Testing', 'Localization', 'UAT'],
      description:
        'Functional and localization testing for a global E-Commerce platform across multiple regions, combined with automated Sanity and UAT coverage.',
      icon: ShoppingCart,
      color: 'from-cyan-500 to-blue-600',
      highlights: [
        'Validated 5 international locales (Canada, Brazil, Japan, UK, France)',
        'Built automated Playwright sanity test scripts for checkout & cart flows',
        'Verified multi-currency price rendering & tax compliance rules',
        'Validated UI responsive layouts against Figma design specs',
      ],
      demoSnippet: `// PLAYWRIGHT LOCALIZATION SPEC
import { test, expect } from '@playwright/test';

const regions = ['CA', 'BR', 'JP', 'UK', 'FR'];

for (const region of regions) {
  test(\`Verify e-commerce checkout flow for locale: \${region}\`, async ({ page }) => {
    await page.goto(\`https://shop.global.com/\${region}/checkout\`);
    await expect(page.locator('.currency-symbol')).toBeVisible();
    await page.fill('#postal-code', '90210');
    await expect(page.locator('#place-order-btn')).toBeEnabled();
  });
}`,
    },
    {
      id: 'proj2',
      num: 'Project 02',
      title: 'Fintech Data Validation',
      subtitle: 'ETL & SQL Data Integrity Verification',
      tags: ['SQL', 'PostgreSQL', 'Database Testing', 'ETL', 'Data Validation'],
      description:
        'Backend and database validation across large datasets using SQL joins, filters, count checks, mappings, transformations and delta-comparison logic.',
      icon: Database,
      color: 'from-blue-600 to-indigo-600',
      highlights: [
        'Executed complex SQL join queries across millions of financial records',
        'Verified source-to-target mapping & transformation business logic',
        'Designed delta-comparison scripts to detect record mismatches',
        'Logged & tracked backend database anomalies in Jira',
      ],
      demoSnippet: `-- SQL ETL DELTA VARIANCE CHECK
SELECT 
  s.transaction_id,
  s.amount AS src_amount,
  t.amount AS tgt_amount,
  (s.amount - t.amount) AS variance
FROM staging_transactions s
LEFT JOIN prod_ledger t ON s.transaction_id = t.transaction_id
WHERE s.amount <> t.amount OR t.transaction_id IS NULL;`,
    },
    {
      id: 'proj3',
      num: 'Project 03',
      title: 'Automation Framework',
      subtitle: 'Scalable End-to-End Regression Engine',
      tags: ['Playwright', 'Selenium', 'Python', 'JavaScript'],
      description:
        'Designed and maintained scalable automation solutions to improve regression coverage and reduce repetitive manual testing effort.',
      icon: Bot,
      color: 'from-indigo-600 to-purple-600',
      highlights: [
        'Built modular Page Object Model (POM) architecture',
        'Implemented cross-browser execution across Chrome, Firefox, Safari & Edge',
        'Integrated automated html test report generation & error screenshots',
        'Reduced manual regression execution effort significantly',
      ],
      demoSnippet: `# PYTHON SELENIUM AUTOMATION ENGINE
from selenium import webdriver
from selenium.webdriver.common.by import By

class CartPage:
    def __init__(self, driver):
        self.driver = driver
        self.checkout_btn = (By.ID, "btn-checkout")

    def proceed_to_checkout(self):
        self.driver.find_element(*self.checkout_btn).click()`,
    },
  ];

  const handleRunSimulation = (project: QAProject) => {
    soundFx.playClick();
    setTestLogs(['[14:37:01] Starting test runner environment...']);

    setTimeout(() => {
      setTestLogs((prev: string[]) => [...prev, `[14:37:02] Loading test suite for ${project.title}...`]);
    }, 400);

    setTimeout(() => {
      setTestLogs((prev: string[]) => [...prev, '[14:37:03] Executing assertion 1: Page load & DOM ready ✓']);
    }, 800);

    setTimeout(() => {
      setTestLogs((prev: string[]) => [...prev, '[14:37:04] Executing assertion 2: Data integrity & API status 200 OK ✓']);
    }, 1200);

    setTimeout(() => {
      setTestLogs((prev: string[]) => [...prev, '[14:37:05] SUMMARY: 100% Tests Passed (0 Failed, 0 Skipped) ✓']);
      soundFx.playSuccess();
    }, 1600);
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Featured QA <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Deep dive into functional automation suites, global e-commerce launches, and backend database validations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => {
            const ProjectIcon = project.icon as React.ComponentType<{ className?: string }>;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-panel glass-panel-hover p-6 rounded-3xl border border-cyan-500/20 flex flex-col justify-between space-y-6 group shadow-xl"
              >
                <div className="space-y-4">
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 font-bold tracking-widest uppercase">
                      {project.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <ProjectIcon className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/80 mt-1 font-semibold">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-900/80 text-cyan-300 text-[11px] font-mono border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Inspect Button */}
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedProject(project);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900/80 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 text-cyan-300 hover:text-white font-mono text-xs font-bold border border-cyan-500/30 hover:border-cyan-300 transition-all shadow-md"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Inspect QA Spec & Code →</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Inspector Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[9500] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-[#081B36] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(22,135,255,0.4)] max-h-[90vh] overflow-y-auto space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-cyan-500/20 pb-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold">
                    {selectedProject.num} SPECIFICATION
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedProject(null);
                  }}
                  className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                  Key Deliverables & Test Scope:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  {selectedProject.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-cyan-500/20">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                    Automated Test Code / SQL Query:
                  </h4>
                  <button
                    onClick={() => handleRunSimulation(selectedProject)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-mono font-bold border border-emerald-400/30"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Simulate Test Execution</span>
                  </button>
                </div>

                <div className="bg-[#040d1a] p-4 rounded-xl border border-cyan-500/30 font-mono text-xs text-cyan-200 overflow-x-auto">
                  <pre>{selectedProject.demoSnippet}</pre>
                </div>
              </div>

              {/* Test Run Output Console */}
              {testLogs.length > 0 && (
                <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30 space-y-1 font-mono text-xs text-emerald-400">
                  <div className="text-slate-400 text-[10px] uppercase font-bold border-b border-slate-800 pb-1 mb-2">
                    LIVE EXECUTION TERMINAL:
                  </div>
                  {testLogs.map((log, idx) => (
                    <div key={idx} className="leading-tight">
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
