import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const statements = [
  {
    tag: "Core Mission",
    text: "I build real-world systems.",
    highlight: true
  },
  {
    tag: "Architecture",
    text: "Full stack, from interactive interface to infrastructure.",
    highlight: false
  },
  {
    tag: "Philosophy",
    text: "Focused on high-performance scalability and code clarity.",
    highlight: true
  },
  {
    tag: "Tech Stack",
    text: "Python, Django, React, Next Js & Modern system design.",
    highlight: false
  },
];

export function NarrativeSection() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section id="narrative" ref={containerRef} className="relative min-h-screen flex items-center justify-center py-40 px-6 md:px-8 overflow-hidden bg-slate-950/[0.02] dark:bg-black/10">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-blue/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-36 md:space-y-48">
        {statements.map((statement, index) => (
          <NarrativeText 
            key={index} 
            tag={statement.tag}
            statement={statement.text} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
}

const NarrativeText = ({ tag, statement, index }: { tag: string; statement: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"]
  });

  // Focus scrollytelling opacity, scale, and blur transforms
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.15, 1, 1, 0.15]);
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.96, 1.02, 1.02, 0.96]);
  const blurValue = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], ["blur(3px)", "blur(0px)", "blur(0px)", "blur(3px)"]);
  const underlineScale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, filter: blurValue }}
      className="flex flex-col items-center justify-center text-center space-y-4 pointer-events-auto"
    >
      {/* Numeric Indicator & Label */}
      <div className="flex items-center gap-3">
        <span className="text-[10px] md:text-xs font-bold tracking-widest text-primary-teal uppercase">
          [ 0{index + 1} ]
        </span>
        <span className="text-[10px] md:text-xs font-bold tracking-widest text-[var(--text-secondary)] uppercase">
          {tag}
        </span>
      </div>

      {/* Main Statement Text */}
      <h3 className="text-[clamp(1.75rem,5vw,3rem)] font-headline font-bold leading-snug tracking-tight max-w-3xl text-[var(--text-primary)]">
        {index % 2 === 0 ? (
          <span className="text-gradient font-extrabold">{statement}</span>
        ) : (
          statement
        )}
      </h3>

      {/* Underline accent that expands when active */}
      <motion.div 
        style={{ scaleX: underlineScale }}
        className="w-16 h-[2px] bg-gradient-to-r from-primary-blue to-primary-teal rounded-full"
      />
    </motion.div>
  );
};
