import React from 'react';
import { Shield, ArrowUp, Heart } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { soundFx } from '../utils/sound';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#040d1a] border-t border-cyan-500/20 pt-16 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-cyan-500/10">
          {/* Left Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[1px]">
                <div className="w-full h-full bg-[#061329] rounded-[10px] flex items-center justify-center">
                  <Shield className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-heading font-extrabold text-xl text-white">
                Bhumit Kotadiya
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-400">SQA Engineer – L1</p>
            <p className="text-xs text-slate-400 font-sans italic">
              "Quality Today, Better Tomorrow"
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono">
            {['Home', 'About', 'Skills', 'Pipeline', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  soundFx.playClick();
                  document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="hover:text-cyan-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2.5 rounded-xl bg-slate-900 border border-cyan-500/20 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 transition"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2.5 rounded-xl bg-slate-900 border border-cyan-500/20 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 transition"
              title="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/30 transition shadow-md"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <p>© 2026 Bhumit Kotadiya. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed for Software Quality Excellence</span>
            <Heart className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
          </p>
        </div>
      </div>
    </footer>
  );
};
