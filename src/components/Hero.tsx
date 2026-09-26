import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail, Download, ShieldCheck } from 'lucide-react';
import { Hero3DVisual } from './Hero3DVisual';
import { soundFx } from '../utils/sound';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [counterStats, setCounterStats] = useState({
    exp: 0,
    tools: 0,
    domains: 0,
    quality: 0,
  });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 50;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounterStats({
          exp: parseFloat((progress * 3).toFixed(1)),
          tools: Math.min(10, Math.floor(progress * 10)),
          domains: Math.min(2, Math.floor(progress * 2)),
          quality: Math.min(100, Math.floor(progress * 100)),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounterStats({
            exp: 3,
            tools: 10,
            domains: 2,
            quality: 100,
          });
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Role Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-md shadow-[0_0_15px_rgba(54,217,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono tracking-widest text-cyan-300 font-bold uppercase">
                SQA ENGINEER – L1
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight text-white">
                Hi, I'm <br />
                <span className="text-gradient-cyan">Bhumit </span>
                <span className="text-gradient-blue border-b-4 border-cyan-400/40 pb-1">
                  Kotadiya
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl font-mono text-cyan-400 font-semibold tracking-wide flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>Quality Today, Better Tomorrow</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
              Detail-oriented SQA Engineer with experience in Manual Testing, Automation Testing, and Backend Database Validation across E-Commerce and Fintech domains.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* View My Work */}
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  soundFx.playClick();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="btn-cyber flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-[0_0_25px_rgba(22,135,255,0.5)] border border-cyan-300/40 hover:scale-105 active:scale-95 transition"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  soundFx.playClick();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#081B36]/80 hover:bg-[#0e274a] text-slate-200 hover:text-cyan-300 font-semibold text-sm border border-cyan-500/30 transition hover:border-cyan-400/60 shadow-lg"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              {/* Secondary Download CV */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenCV();
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 text-xs font-mono font-bold border border-cyan-500/20 hover:border-cyan-400/40 transition"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>

            {/* HERO STATISTICS COUNTER */}
            <div ref={ref} className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-cyan-500/20">
              {/* Stat 1 */}
              <div className="glass-panel p-4 rounded-xl border border-cyan-500/20 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">
                  {counterStats.exp}+
                </div>
                <div className="text-xs text-slate-400 font-sans mt-1">Years Experience</div>
              </div>

              {/* Stat 2 */}
              <div className="glass-panel p-4 rounded-xl border border-cyan-500/20 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">
                  {counterStats.tools}+
                </div>
                <div className="text-xs text-slate-400 font-sans mt-1">Tools & Tech</div>
              </div>

              {/* Stat 3 */}
              <div className="glass-panel p-4 rounded-xl border border-cyan-500/20 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">
                  {counterStats.domains}
                </div>
                <div className="text-xs text-slate-400 font-sans mt-1">Major Domains</div>
              </div>

              {/* Stat 4 */}
              <div className="glass-panel p-4 rounded-xl border border-cyan-500/20 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">
                  {counterStats.quality}%
                </div>
                <div className="text-xs text-slate-400 font-sans mt-1">Quality Focus</div>
              </div>
            </div>
          </motion.div>

          {/* Right Hero 3D Visual Workstation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <Hero3DVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
