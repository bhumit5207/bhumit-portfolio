import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Terminal, Cpu } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    { text: 'Initializing QA Environment...', icon: Terminal },
    { text: 'Loading Automation Framework...', icon: Cpu },
    { text: 'System Ready ✓', icon: CheckCircle2 },
  ];

  useEffect(() => {
    // Animate progress percentage
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress > 35 && stepIndex === 0) {
      setStepIndex(1);
    } else if (progress > 75 && stepIndex === 1) {
      setStepIndex(2);
    } else if (progress >= 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [progress, stepIndex, onComplete]);

  const CurrentIcon = steps[stepIndex].icon;

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#061329] text-white px-4 bg-cyber-grid"
    >
      {/* Background glow orb */}
      <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 w-full max-w-md p-8 glass-panel rounded-2xl border border-cyan-500/30 text-center shadow-[0_0_50px_rgba(22,135,255,0.25)]">
        {/* Animated Badge Icon */}
        <div className="mx-auto w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(54,217,255,0.3)]">
          <ShieldCheck className="w-8 h-8 text-cyan-400 animate-pulse" />
        </div>

        <h2 className="text-xl font-bold tracking-wider mb-2 font-heading text-gradient-cyan">
          BHUMIT KOTADIYA
        </h2>
        <p className="text-xs tracking-widest text-cyan-400/80 font-mono uppercase mb-6">
          SQA ENGINEER – L1
        </p>

        {/* Current status text */}
        <div className="h-10 flex items-center justify-center gap-2 text-sm font-mono text-cyan-200">
          <AnimatePresence mode="wait">
            <motion.div
              key={stepIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-2"
            >
              <CurrentIcon className={`w-4 h-4 ${stepIndex === 2 ? 'text-green-400' : 'text-cyan-400'}`} />
              <span className={stepIndex === 2 ? 'text-green-400 font-semibold' : ''}>
                {steps[stepIndex].text}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar container */}
        <div className="mt-6 w-full bg-slate-900/80 h-2 rounded-full overflow-hidden p-0.5 border border-cyan-500/20">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full shadow-[0_0_12px_#36D9FF]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-3 flex justify-between text-[11px] font-mono text-slate-400">
          <span>FRAMEWORK_VER // 2.4.0</span>
          <span className="text-cyan-400 font-bold">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};
