import { motion } from 'framer-motion';

const experiences = [
  {
    company: "ThinkXLabs",
    role: "Co-Founder",
    period: "2025 Dec — Present"
  },
  {
    company: "Bpract Software Solutions LLP",
    role: "Frontend Developer",
    period: "2025 April — Present"
  },
  {
    company: "Your Extreme Solutions",
    role: "Full Stack Developer",
    period: "2024 Jan — 2025 April"
  },
  {
    company: "Brototype",
    role: "Full Stack Developer Intern",
    period: "2023 Aug — 2024 Jan"
  },
  {
    company: "VKC Group, India",
    role: "Production Engineer",
    period: "2021 Aug — 2023 Aug"
  }
];

export function ExperienceSection() {
  return (
    <section className="relative py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-[clamp(3rem,10vw,6rem)] font-headline leading-[0.9] tracking-tight">
            <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-1">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group py-12 border-b border-neutral-200/20 dark:border-neutral-800/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                <div className="lg:col-span-3">
                  <span className="text-sm text-[var(--text-secondary)] tracking-widest uppercase">
                    {exp.period}
                  </span>
                </div>

                <div className="lg:col-span-5">
                  <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] font-headline leading-tight tracking-tight text-[var(--text-primary)] group-hover:text-gradient transition-all duration-300">
                    {exp.company}
                  </h3>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-lg text-[var(--text-secondary)]">
                    {exp.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
