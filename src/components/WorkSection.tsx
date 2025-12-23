import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: "Dine-O",
    description: "Orchestrating dining experiences through intelligent systems",
    tech: "Python · Django · React · PostgreSQL",
    gradient: "bg-gradient-blue-teal"
  },
  {
    title: "DocConnect",
    description: "Bridging healthcare through seamless digital pathways",
    tech: "Flask · React · WebRTC · MongoDB",
    gradient: "bg-gradient-teal-mint"
  },
  {
    title: "ScholarCode",
    description: "Empowering education with structured learning platforms",
    tech: "Python · Django · React · Redis",
    gradient: "bg-gradient-mint-lime"
  },
  {
    title: "NestCart",
    description: "Commerce architecture built for modern scale",
    tech: "Django · React · PostgreSQL · Celery",
    gradient: "bg-gradient-editorial"
  },
  {
    title: "Netflix Clone",
    description: "Streaming infrastructure reimagined",
    tech: "React · Node.js · MongoDB · AWS",
    gradient: "bg-gradient-hero"
  }
];

export function WorkSection() {
  return (
    <section className="relative py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-[clamp(3rem,10vw,6rem)] font-headline leading-[0.9] tracking-tight mb-4">
            Selected
            <br />
            <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="space-y-48">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:direction-rtl'}`}
    >
      <motion.div
        style={{ y }}
        className={`lg:col-span-7 ${isEven ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-6'}`}
      >
        <div className="space-y-6">
          <h3 className="text-[clamp(3rem,8vw,5rem)] font-headline leading-[0.95] tracking-tight text-[var(--text-primary)]">
            {project.title}
          </h3>

          <p className="text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed">
            {project.description}
          </p>

          <p className="text-sm text-[var(--text-secondary)] tracking-wide pt-4">
            {project.tech}
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        className={`lg:col-span-5 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
      >
        <div className={`aspect-[4/3] rounded-2xl ${project.gradient} animate-gradient`} />
      </motion.div>
    </motion.div>
  );
}
