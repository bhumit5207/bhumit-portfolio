import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { soundFx } from '../utils/sound';

interface ContactProps {
  onOpenCV: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCV }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playClick();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      soundFx.playSuccess();
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Let's Build <span className="text-gradient-cyan">Quality Together.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans max-w-2xl mx-auto leading-relaxed">
            I'm always open to new opportunities, collaborations, freelance QA automation projects, or simply a friendly conversation about QA, Automation, and Technology.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <a
                href="mailto:bhumit5207@gmail.com"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="glass-panel glass-panel-hover p-5 rounded-2xl border border-cyan-500/20 flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase block">
                    Direct Email
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    bhumit5207@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+916355934373"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="glass-panel glass-panel-hover p-5 rounded-2xl border border-cyan-500/20 flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase block">
                    Phone / WhatsApp
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    +91 6355934373
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="glass-panel p-5 rounded-2xl border border-cyan-500/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Ahmedabad, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social & CV Action Bar */}
            <div className="glass-panel p-6 rounded-2xl border border-cyan-400/30 space-y-4">
              <h4 className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                Connect Across Platforms:
              </h4>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:bhumit5207@gmail.com"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/30 text-xs font-mono font-semibold transition"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-400/30 text-xs font-mono font-semibold transition"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-200 border border-slate-600/30 text-xs font-mono font-semibold transition"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <button
                  onClick={() => {
                    soundFx.playClick();
                    onOpenCV();
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-bold shadow-md transition hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-400/30 shadow-[0_0_40px_rgba(22,135,255,0.2)]">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 mx-auto flex items-center justify-center text-emerald-400 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out. I'll review your query and respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setFormSubmitted(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-mono font-bold hover:bg-cyan-500/30 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold font-heading text-white mb-2 flex items-center gap-2">
                    <Send className="w-5 h-5 text-cyan-400" />
                    <span>Send Me a Message</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-cyan-500/20 focus:border-cyan-400 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-cyan-500/20 focus:border-cyan-400 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="QA Automation Opportunity / Consultation"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-cyan-500/20 focus:border-cyan-400 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Bhumit, we would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-cyan-500/20 focus:border-cyan-400 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    onMouseEnter={() => soundFx.playHover()}
                    className="w-full btn-cyber flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-[0_0_25px_rgba(22,135,255,0.4)] border border-cyan-300/30 hover:scale-[1.01] active:scale-95 transition"
                  >
                    {loading ? (
                      <span className="font-mono text-xs animate-pulse">Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* FINAL CTA BAR */}
        <div className="mt-20 glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-400/40 text-center space-y-6 shadow-[0_0_60px_rgba(54,217,255,0.25)] relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-mono font-bold uppercase">
            <ShieldCheck className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>TESTING PIPELINE COMPLETED SUCCESSFULLY ✓</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Ready to Build <span className="text-gradient-cyan">Better Software?</span>
          </h3>

          <div className="pt-2">
            <a
              href="mailto:bhumit5207@gmail.com"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white font-extrabold text-base shadow-[0_0_35px_rgba(54,217,255,0.6)] border border-cyan-300 transition hover:scale-105 active:scale-95"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
