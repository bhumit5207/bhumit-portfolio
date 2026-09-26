import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Code2,
  Database,
  ShieldCheck,
  Wrench,
  Monitor,
  Globe,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { soundFx } from '../utils/sound';

interface SkillItem {
  name: string;
  desc: string;
  tag?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: SkillItem[];
}

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories: SkillCategory[] = [
    {
      title: 'Automation',
      icon: Cpu,
      skills: [
        { name: 'Playwright', desc: 'Modern fast end-to-end web automation', tag: 'Expert' },
        { name: 'Selenium WebDriver', desc: 'Robust cross-browser UI automation', tag: 'Core' },
        { name: 'Testim.io', desc: 'AI-powered automated regression suite', tag: 'SaaS' },
        { name: 'Robot Framework', desc: 'Keyword-driven test automation', tag: 'Framework' },
      ],
    },
    {
      title: 'Programming',
      icon: Code2,
      skills: [
        { name: 'Python', desc: 'Scripting, test frameworks, automation logic', tag: 'Primary' },
        { name: 'JavaScript', desc: 'Web automation & DOM manipulation', tag: 'Web' },
        { name: 'TypeScript', desc: 'Typed automation scripts & Playwright TS', tag: 'Typed' },
      ],
    },
    {
      title: 'Database & Backend',
      icon: Database,
      skills: [
        { name: 'SQL', desc: 'Complex joins, queries, data integrity logic', tag: 'Core' },
        { name: 'PostgreSQL', desc: 'Relational database testing & validation', tag: 'DB' },
        { name: 'MariaDB', desc: 'Fintech database verification & count checks', tag: 'DB' },
        { name: 'Data Validation', desc: 'Source-to-target integrity & delta checks', tag: 'ETL' },
        { name: 'ETL Validation', desc: 'Pipeline transformation & mapping checks', tag: 'Pipeline' },
      ],
    },
    {
      title: 'QA Methodologies',
      icon: ShieldCheck,
      skills: [
        { name: 'Manual Testing', desc: 'Exploratory & structured test execution', tag: 'Core' },
        { name: 'Automation Testing', desc: 'Scalable regression & smoke test suites', tag: 'Core' },
        { name: 'Regression Testing', desc: 'Automated release gate verification', tag: 'Release' },
        { name: 'Sanity Testing', desc: 'Rapid post-build validation checks', tag: 'Build' },
        { name: 'UAT', desc: 'User Acceptance Testing & business flows', tag: 'Client' },
        { name: 'Localization Testing', desc: 'Multi-region multi-language UI/UX QA', tag: 'Global' },
      ],
    },
    {
      title: 'Tools & Management',
      icon: Wrench,
      skills: [
        { name: 'Jira', desc: 'Agile defect tracking & sprint planning', tag: 'Agile' },
        { name: 'Git', desc: 'Version control & branch management', tag: 'VCS' },
        { name: 'GitHub', desc: 'Repository management & CI actions', tag: 'Cloud' },
        { name: 'Figma', desc: 'UI design spec inspection & QA audit', tag: 'Design' },
        { name: 'MS Excel', desc: 'Test matrices, data mapping & reports', tag: 'Docs' },
      ],
    },
    {
      title: 'Platforms & OS',
      icon: Monitor,
      skills: [
        { name: 'Windows', desc: 'Desktop & enterprise testing', tag: 'OS' },
        { name: 'Linux', desc: 'Server environments & CLI execution', tag: 'OS' },
        { name: 'Android', desc: 'Mobile viewport & app QA', tag: 'Mobile' },
        { name: 'iOS', desc: 'Safari & mobile browser validation', tag: 'Mobile' },
      ],
    },
    {
      title: 'Browsers',
      icon: Globe,
      skills: [
        { name: 'Chrome', desc: 'Chromium engine automation', tag: 'Browser' },
        { name: 'Firefox', desc: 'Gecko engine cross-browser QA', tag: 'Browser' },
        { name: 'Safari', desc: 'WebKit engine compatibility', tag: 'Browser' },
        { name: 'Edge', desc: 'Enterprise browser testing', tag: 'Browser' },
      ],
    },
  ];

  const categoryFilterList: string[] = ['All', 'Automation', 'Programming', 'Database', 'QA Methodologies', 'Tools', 'Browsers'];

  const filteredCategories =
    activeCategory === 'All'
      ? categories
      : categories.filter((cat) => cat.title.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Tools & <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Comprehensive testing suite across automation frameworks, database validation, and quality engineering.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoryFilterList.map((cat: string) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setActiveCategory(cat);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(54,217,255,0.4)] border border-cyan-300'
                  : 'bg-slate-900/60 text-slate-300 border border-cyan-500/20 hover:border-cyan-400/50 hover:text-cyan-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => {
            const CategoryIcon = category.icon as React.ComponentType<{ className?: string }>;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {/* Category Title Header */}
                <div className="flex items-center gap-3 border-b border-cyan-500/20 pb-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">{category.title}</h3>
                  <span className="text-xs font-mono text-cyan-400/70 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    {category.skills.length} Tools
                  </span>
                </div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.04, rotateX: 2, rotateY: 2 }}
                      onMouseEnter={() => soundFx.playHover()}
                      className="glass-panel glass-panel-hover p-5 rounded-2xl border border-cyan-500/20 flex flex-col justify-between space-y-3 cursor-pointer group shadow-lg"
                    >
                      <div className="flex items-start justify-between">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:text-cyan-200 transition-all duration-300">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        {skill.tag && (
                          <span className="text-[10px] font-mono bg-cyan-500/15 text-cyan-300 px-2 py-0.5 rounded-md border border-cyan-400/20">
                            {skill.tag}
                          </span>
                        )}
                      </div>

                      <div>
                        <h4 className="text-base font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-slate-400 font-sans mt-1 leading-relaxed">
                          {skill.desc}
                        </p>
                      </div>

                      {/* Subtle hover glowing bottom bar */}
                      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 rounded-full" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
