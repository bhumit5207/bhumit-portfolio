import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  ListChecks,
  MousePointerClick,
  Bot,
  Database,
  Bug,
  RefreshCw,
  Rocket,
  ChevronRight,
  Sparkles,
  Terminal,
  CheckCircle,
} from 'lucide-react';
import { soundFx } from '../utils/sound';

interface PipelineStage {
  id: number;
  title: string;
  shortTitle: string;
  icon: React.ElementType;
  description: string;
  details: string[];
  sampleCode?: string;
  metric: string;
}

export const TestingPipeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages: PipelineStage[] = [
    {
      id: 1,
      title: 'Requirement Analysis',
      shortTitle: 'Requirement',
      icon: FileText,
      description: 'Understand business requirements, acceptance criteria, and Figma design specs.',
      details: [
        'Analyze user stories and functional specifications in Jira',
        'Define acceptance criteria & test boundary conditions',
        'Align with design specs & localization requirements',
      ],
      sampleCode: `// REQ-8921: Passwordless Login Validation
const acceptCriteria = {
  authType: "MagicLink / OTP",
  locales: ["CA", "BR", "JP", "UK", "FR"],
  securityTokenExpiry: 300 // seconds
};`,
      metric: '100% Traceability',
    },
    {
      id: 2,
      title: 'Test Case Design',
      shortTitle: 'Test Case',
      icon: ListChecks,
      description: 'Design functional, regression, sanity, and UAT test scenarios.',
      details: [
        'Draft positive, negative, and edge case test suites',
        'Map scenarios to regional localization parameters',
        'Review test coverage with product owners',
      ],
      sampleCode: `// TC_SHOP_04: Verify Multi-Currency Cart Calculation
describe("E-Commerce Cart Checkout", () => {
  it("should calculate correct tax for Japan locale", () => {
    // Expected tax rate: 10%
  });
});`,
      metric: 'Comprehensive Suite',
    },
    {
      id: 3,
      title: 'Manual Execution',
      shortTitle: 'Manual Testing',
      icon: MousePointerClick,
      description: 'Execute initial exploratory and manual test scenarios.',
      details: [
        'Perform exploratory testing across web and mobile viewports',
        'Verify UI pixel-perfection against Figma designs',
        'Execute sanity checks on fresh release builds',
      ],
      sampleCode: `// MANUAL EXECUTION LOG
Viewport: Mobile Web (375x812)
Browser: Safari iOS / Chrome Android
Status: PASS (No layout shift observed)`,
      metric: 'Pixel-Perfect UI',
    },
    {
      id: 4,
      title: 'Test Automation',
      shortTitle: 'Automation',
      icon: Bot,
      description: 'Build automated tests using Playwright, Selenium, Testim.io, and Robot Framework.',
      details: [
        'Write scalable Page Object Model (POM) scripts',
        'Integrate Playwright & Testim.io for automated regression',
        'Execute headless parallel execution pipelines',
      ],
      sampleCode: `import { test, expect } from '@playwright/test';

test('Automated Passwordless Login Flow', async ({ page }) => {
  await page.goto('https://checkout.platform.com/login');
  await page.fill('#user-email', 'test.qa@bhumit.dev');
  await page.click('button#send-otp');
  await expect(page.locator('.toast-success')).toBeVisible();
});`,
      metric: 'Fast Execution',
    },
    {
      id: 5,
      title: 'API & Database Validation',
      shortTitle: 'API / Database',
      icon: Database,
      description: 'Validate data using SQL, joins, filters, mappings, and transformations.',
      details: [
        'Execute SQL queries in PostgreSQL and MariaDB',
        'Perform count checks, missing record checks, and delta comparisons',
        'Verify ETL transformations and backend data mapping',
      ],
      sampleCode: `-- FINTECH DATA INTEGRITY VALIDATION
SELECT 
  src.account_id, 
  src.balance AS source_bal, 
  tgt.balance AS target_bal,
  (src.balance - tgt.balance) AS delta
FROM fintech_ledger_src src
JOIN fintech_ledger_tgt tgt ON src.account_id = tgt.account_id
WHERE src.balance <> tgt.balance;`,
      metric: 'Zero Data Drift',
    },
    {
      id: 6,
      title: 'Defect Tracking',
      shortTitle: 'Defect Tracking',
      icon: Bug,
      description: 'Track issues using Jira and collaborate closely with developers.',
      details: [
        'Log detailed bug reports with reproduction steps & logs',
        'Assign severity/priority and attach screenshot/video evidence',
        'Retest fixes in sprint bug-verification cycles',
      ],
      sampleCode: `[BUG-4402] High Severity
Summary: Cart currency symbol missing on Japan checkout page
Steps to Reproduce: Select JP locale -> Add item -> Proceed to Cart
Expected: ¥ symbol displayed
Actual: $ symbol rendered`,
      metric: 'Swift Bug Lifecycle',
    },
    {
      id: 7,
      title: 'Regression Testing',
      shortTitle: 'Regression',
      icon: RefreshCw,
      description: 'Perform automated and targeted regression to prevent breaking changes.',
      details: [
        'Execute automated regression suite on release candidates',
        'Verify cross-browser stability (Chrome, Firefox, Safari, Edge)',
        'Ensure critical business workflows remain intact',
      ],
      sampleCode: `// REGRESSION TEST SUITE EXECUTION
[Playwright] Running 142 tests across 4 browsers...
Passed: 142 | Failed: 0 | Flaky: 0
Execution Time: 2m 14s`,
      metric: 'High Reliability',
    },
    {
      id: 8,
      title: 'Release Sign-Off',
      shortTitle: 'Release',
      icon: Rocket,
      description: 'Validate release build, generate QA sign-off report, and push to production.',
      details: [
        'Final sanity check on production staging environment',
        'Verify release readiness checklist',
        'Provide QA sign-off certification for deployment',
      ],
      sampleCode: `// RELEASE SIGN-OFF CERTIFICATE
Project: E-Commerce Global & Fintech Platform
Build: v2.14.0-RC3
QA Lead: Bhumit Kotadiya
Status: PASSED - READY FOR PRODUCTION DEPLOYMENT ✓`,
      metric: 'Quality Assured',
    },
  ];

  const currentStage = stages[activeStage];
  const CurrentStageIcon = currentStage.icon as React.ComponentType<{ className?: string }>;

  return (
    <section id="pipeline" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE CONTROL SYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            My QA Testing <span className="text-gradient-cyan">Pipeline</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Click through the 3D pipeline stages to inspect the end-to-end quality assurance control engine.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Horizontal Pipeline Node Stepper */}
        <div className="relative mb-12 overflow-x-auto pb-6 pt-2 scrollbar-none">
          {/* Animated Connecting Line */}
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-slate-800 -translate-y-1/2 z-0 rounded-full" />
          <div
            className="absolute top-1/2 left-4 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 -translate-y-1/2 z-0 rounded-full transition-all duration-500 shadow-[0_0_15px_#36D9FF]"
            style={{ width: `${(activeStage / (stages.length - 1)) * 95}%` }}
          />

          <div className="relative z-10 flex items-center justify-between min-w-[760px] px-4">
            {stages.map((stg, index) => {
              const StageIcon = stg.icon as React.ComponentType<{ className?: string }>;
              const isActive = activeStage === index;
              const isPassed = index < activeStage;

              return (
                <button
                  key={stg.id}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveStage(index);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="flex flex-col items-center group focus:outline-none"
                >
                  {/* Node Circle */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-[0_0_25px_rgba(54,217,255,0.7)] border-2 border-white scale-110'
                        : isPassed
                        ? 'bg-blue-900/80 text-cyan-300 border border-cyan-400/50 shadow-[0_0_10px_rgba(22,135,255,0.3)]'
                        : 'bg-slate-900 text-slate-500 border border-slate-700 hover:text-slate-300'
                    }`}
                  >
                    <StageIcon className="w-5 h-5" />
                  </motion.div>

                  {/* Stage Label */}
                  <span
                    className={`mt-3 text-xs font-mono font-semibold transition-colors duration-200 ${
                      isActive
                        ? 'text-cyan-300 font-bold'
                        : isPassed
                        ? 'text-slate-300'
                        : 'text-slate-500'
                    }`}
                  >
                    {stg.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Display Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-400/30 shadow-[0_0_50px_rgba(22,135,255,0.2)]"
          >
            {/* Stage Left Description */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-400/40">
                  STAGE 0{currentStage.id} OF 08
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                  {currentStage.metric}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-2">
                <CurrentStageIcon className="w-6 h-6 text-cyan-400" />
                <span>{currentStage.title}</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                {currentStage.description}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                  Key Execution Objectives:
                </h4>
                {currentStage.details.map((detail: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-3 pt-4 border-t border-cyan-500/20">
                <button
                  disabled={activeStage === 0}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveStage((prev) => Math.max(0, prev - 1));
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 text-xs font-mono disabled:opacity-40 disabled:pointer-events-none border border-cyan-500/20"
                >
                  ← Previous Stage
                </button>
                <button
                  disabled={activeStage === stages.length - 1}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveStage((prev) => Math.min(stages.length - 1, prev + 1));
                  }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-mono font-bold flex items-center gap-1.5 disabled:opacity-40 disabled:pointer-events-none shadow-[0_0_15px_rgba(54,217,255,0.4)]"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Stage Right Terminal / Code Simulation Panel */}
            <div className="lg:col-span-6">
              <div className="bg-[#040d1a] rounded-xl border border-cyan-500/30 overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-[#061329] border-b border-cyan-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-xs font-mono text-cyan-300 font-semibold ml-2">
                      pipeline_executor.ts
                    </span>
                  </div>
                  <Terminal className="w-4 h-4 text-cyan-400" />
                </div>

                {/* Code Body */}
                <div className="p-4 font-mono text-xs text-cyan-200 overflow-x-auto leading-relaxed max-h-72">
                  <pre className="whitespace-pre-wrap">{currentStage.sampleCode}</pre>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
