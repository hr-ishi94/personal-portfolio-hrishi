import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "Bpract Software Solutions LLP",
    role: "Frontend Developer",
    period: "2025 April — Present",
    bullets: [
      "Engineering robust UI architectures and responsive layouts using React, Next.js, and TypeScript.",
      "Optimizing web applications for Core Web Vitals (LCP, INP), resulting in improved performance metrics.",
      "Collaborating with backend engineers to integrate RESTful APIs, securing state management structures."
    ]
  },
  {
    company: "Your Extreme Solutions",
    role: "Frontend Developer",
    period: "2024 Jan — 2025 April",
    bullets: [
      "Designed and developed highly interactive client dashboards and SaaS applications using React and Tailwind CSS.",
      "Implemented accessibility guidelines (WCAG) ensuring web platforms are accessible to all user demographics.",
      "Conducted code reviews, streamlined Git workflow standards, and refactored legacy systems for cleaner codebases."
    ]
  },
  {
    company: "Brototype",
    role: "Full Stack Developer Intern",
    period: "2023 Aug — 2024 Jan",
    bullets: [
      "Developed web applications from database schemas to interactive frontends using Python, Django, and React.",
      "Engineered real-time features using WebSockets and Django Channels for communication components.",
      "Mastered data structures and algorithms, solving over 400 LeetCode problems as part of daily technical drills."
    ]
  },
  {
    company: "VKC Group, India",
    role: "Production Engineer",
    period: "2021 Aug — 2023 Aug",
    bullets: [
      "Optimized production processes, oversaw quality control pipelines, and supervised mechanical operations.",
      "Analyzed efficiency metrics to minimize operational downtime and streamline factory throughput.",
      "Pivot to software engineering driven by a passion for systematic problem-solving and web technologies."
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 md:py-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-[clamp(2.5rem,7vw,4rem)] font-headline font-extrabold leading-[0.9] tracking-tight mb-2">
            Professional
            <br />
            <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl font-light">
            My career path combining rigorous engineering systems experience with custom full-stack web application development.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-neutral-200/40 dark:border-neutral-800/40 ml-3.5 md:ml-6 space-y-12 py-4">
          
          {/* Timeline Rail Glowing Effect (Fades to transparent at bottom) */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary-blue via-primary-teal to-transparent -translate-x-[0.5px]" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative pl-6 md:pl-12 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-0 -translate-x-1/2 top-2.5 flex items-center justify-center z-10">
                <motion.div 
                  whileHover={{ scale: 1.25 }}
                  className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-slate-900 dark:bg-slate-950 border-2 border-primary-teal shadow-lg flex items-center justify-center transition-colors group-hover:border-primary-mint"
                >
                  <Briefcase className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary-teal group-hover:text-primary-mint" />
                </motion.div>
                
                {/* Glowing Aura around active node */}
                <div className="absolute w-7 h-7 rounded-full bg-primary-teal/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Detail Card Container */}
              <div className="glassmorphic-interactive p-5 md:p-8 rounded-2xl shadow-xl border border-neutral-200/10 dark:border-white/5 space-y-4 hover:border-primary-teal/30 transition-all duration-300 relative overflow-hidden group/card text-left">
                {/* Subtle top gradient glow on card hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-blue to-primary-teal opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg md:text-2xl font-headline font-bold text-[var(--text-primary)] group-hover:text-gradient transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <p className="text-xs md:text-sm font-semibold text-primary-teal/95 pt-0.5">
                      {exp.role}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] md:text-xs font-semibold text-[var(--text-secondary)] bg-slate-500/5 dark:bg-white/5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-slate-500/10 dark:border-white/5 self-start md:self-center">
                    <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary-blue" />
                    {exp.period}
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2.5 pt-2 text-[var(--text-secondary)] font-light text-xs md:text-base leading-relaxed list-none">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex gap-2.5 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-teal mt-1.5 md:mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
