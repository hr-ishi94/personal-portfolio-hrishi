import { motion } from 'framer-motion';
import { Code2, Terminal, Database, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    color: "from-primary-blue to-primary-teal",
    skills: [
      "React.js",
      "Next.js (App Router, SSR, SSG, Server Components)",
      "TypeScript",
      "Redux & Redux Toolkit",
      "Tailwind CSS",
      "Jest & React Testing Library (RTL)",
      "Figma-to-code"
    ]
  },
  {
    title: "Backend Development",
    icon: Terminal,
    color: "from-primary-teal to-primary-mint",
    skills: [
      "Node.js (Express)",
      "Django REST Framework",
      "Python",
      "Django Channels & WebSockets",
      "REST API Design",
      "Stripe API Integration",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)"
    ]
  },
  {
    title: "Databases & Storage",
    icon: Database,
    color: "from-primary-mint to-primary-lime",
    skills: [
      "PostgreSQL (schema design, query optimisation)",
      "MongoDB (familiar)",
      "Django ORM",
      "High-Volume Transaction Records"
    ]
  },
  {
    title: "DevOps & Security",
    icon: Layers,
    color: "from-primary-blue to-primary-mint",
    skills: [
      "Docker",
      "GitHub Actions (CI/CD)",
      "AWS EC2",
      "Vercel & NGINX",
      "Security: env-based secrets management",
      "Security: secure data-handshake patterns",
      "Full Stack System Design & Component Architecture",
      "Performance Optimisation & Code Reviews",
      "Agile Methodologies"
    ]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 md:py-24 px-6 md:px-8 overflow-hidden">
      
      {/* Background Gradient Blend */}
      <div
        className="absolute inset-0 bg-gradient-mint-lime opacity-[calc(var(--gradient-opacity)*0.4)] pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-[clamp(3rem,10vw,6rem)] font-headline font-extrabold leading-[0.9] tracking-tight mb-4">
            Technical
            <br />
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl font-light">
            A comprehensive overview of my backend systems, frontend UI design systems, and infrastructure tooling.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group glassmorphic-interactive p-8 rounded-2xl shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Category Header with Icon */}
                  <div className="flex items-center gap-4">
                    <div className={`p-3.5 rounded-xl bg-gradient-to-br ${category.color} text-slate-950 shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-headline font-bold text-[var(--text-primary)]">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill Badge Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skillIdx}
                        whileHover={{ scale: 1.05 }}
                        className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-500/5 dark:bg-white/5 text-[var(--text-secondary)] hover:text-gradient border border-slate-500/10 dark:border-white/5 cursor-default transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
