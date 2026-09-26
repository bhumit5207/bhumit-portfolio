import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-400/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[1px] shadow-[0_0_25px_rgba(54,217,255,0.4)] flex-shrink-0">
              <div className="w-full h-full bg-[#061329] rounded-[15px] flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                EDUCATION
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-slate-300 text-sm font-sans flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Parul Institute of Computer Application</span>
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950/80 text-cyan-300 font-mono text-xs font-bold border border-cyan-400/30 shadow-md">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Graduated: 2024</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
