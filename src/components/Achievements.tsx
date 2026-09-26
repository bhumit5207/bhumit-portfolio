import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/sound';

export const Achievements: React.FC = () => {
  const triggerConfetti = () => {
    soundFx.playSuccess();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#36D9FF', '#1687FF', '#7000FF', '#10B981'],
    });
  };

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Recognized <span className="text-gradient-cyan">Highlights</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Key milestones in test automation optimization and organizational delivery.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Automation Efficiency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            onClick={triggerConfetti}
            onMouseEnter={() => soundFx.playHover()}
            className="glass-panel glass-panel-hover p-8 rounded-3xl border border-cyan-400/30 flex flex-col justify-between space-y-6 cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-cyan-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                <Trophy className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-400/30">
                CLICK TO CELEBRATE 🎉
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                Automation Efficiency
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-sans mt-3">
                Successfully introduced automated regression solutions that reduced manual testing cycles and improved overall release speed.
              </p>
            </div>

            <div className="pt-4 border-t border-cyan-500/20 flex items-center justify-between text-xs font-mono text-cyan-400 font-semibold">
              <span>Framework Impact</span>
              <span>High Speed Delivery</span>
            </div>
          </motion.div>

          {/* Card 2: Performance Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            onClick={triggerConfetti}
            onMouseEnter={() => soundFx.playHover()}
            className="glass-panel glass-panel-hover p-8 rounded-3xl border border-cyan-400/30 flex flex-col justify-between space-y-6 cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(54,217,255,0.3)]">
                <Star className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold border border-blue-400/30">
                ORGANIZATIONAL RECOGNITION ⭐
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                Performance Recognition
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-sans mt-3">
                Earned organizational recognition for consistent performance, agility, and commitment to cross-functional project success.
              </p>
            </div>

            <div className="pt-4 border-t border-cyan-500/20 flex items-center justify-between text-xs font-mono text-cyan-400 font-semibold">
              <span>Agile Excellence</span>
              <span>Quality Trust</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
