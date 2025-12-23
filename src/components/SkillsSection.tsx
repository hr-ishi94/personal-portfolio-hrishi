import { motion } from 'framer-motion';

const skillClusters = [
  { name: "Python", weight: "font-bold", size: "text-6xl" },
  { name: "Django", weight: "font-medium", size: "text-4xl" },
  { name: "Flask", weight: "font-normal", size: "text-3xl" },
  { name: "FastAPI", weight: "font-medium", size: "text-4xl" },
  { name: "React", weight: "font-bold", size: "text-7xl" },
  { name: "TypeScript", weight: "font-medium", size: "text-5xl" },
  { name: "JavaScript", weight: "font-normal", size: "text-4xl" },
  { name: "PostgreSQL", weight: "font-medium", size: "text-5xl" },
  { name: "MongoDB", weight: "font-normal", size: "text-3xl" },
  { name: "Redis", weight: "font-light", size: "text-3xl" },
  { name: "Docker", weight: "font-medium", size: "text-4xl" },
  { name: "AWS", weight: "font-bold", size: "text-5xl" },
  { name: "REST APIs", weight: "font-normal", size: "text-4xl" },
  { name: "GraphQL", weight: "font-light", size: "text-3xl" },
  { name: "Celery", weight: "font-normal", size: "text-3xl" },
  { name: "Git", weight: "font-medium", size: "text-4xl" },
];

export function SkillsSection() {
  return (
    <section className="relative py-32 px-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-mint-lime opacity-[calc(var(--gradient-opacity)*0.5)]"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-[clamp(3rem,10vw,6rem)] font-headline leading-[0.9] tracking-tight">
            <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-x-12 gap-y-8 items-baseline justify-start">
          {skillClusters.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              className={`
                ${skill.size}
                ${skill.weight}
                font-headline
                leading-none
                tracking-tight
                text-[var(--text-primary)]
                hover:text-gradient
                cursor-default
                transition-colors
                duration-300
              `}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
