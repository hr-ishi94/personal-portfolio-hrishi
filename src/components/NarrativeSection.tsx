import { motion } from 'framer-motion';

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
  return (
    <section id="narrative" className="relative py-16 md:py-20 px-6 md:px-8 overflow-hidden bg-slate-950/[0.01] dark:bg-black/5">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-blue/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="glassmorphic-interactive p-6 md:p-8 rounded-2xl border border-neutral-200/10 dark:border-white/5 hover:border-primary-teal/30 flex flex-col justify-between text-left space-y-6 relative overflow-hidden group min-h-[180px]"
            >
              {/* Subtle top gradient glow on card hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-blue to-primary-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Numeric indicator & Tag */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-primary-teal uppercase">
                  [ 0{index + 1} ]
                </span>
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-[var(--text-secondary)] uppercase">
                  {statement.tag}
                </span>
              </div>

              {/* Main Statement Text */}
              <p className="text-base md:text-lg font-headline font-bold leading-snug tracking-tight text-[var(--text-primary)]">
                {statement.highlight ? (
                  <span className="text-gradient font-extrabold">{statement.text}</span>
                ) : (
                  statement.text
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

