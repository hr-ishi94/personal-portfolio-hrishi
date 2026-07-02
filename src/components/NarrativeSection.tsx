import { motion } from 'framer-motion';

const pillars = [
  {
    index: "01",
    tag: "Core Mission",
    text: "I build real-world systems.",
    accent: true,
  },
  {
    index: "02",
    tag: "Architecture",
    text: "Full stack, from interface to infrastructure.",
    accent: false,
  },
  {
    index: "03",
    tag: "Philosophy",
    text: "High-performance scalability & code clarity.",
    accent: true,
  },
  {
    index: "04",
    tag: "Tech Stack",
    text: "Python · Django · React · Next.js",
    accent: false,
  },
];

export function NarrativeSection() {
  return (
    <section
      id="narrative"
      className="relative py-20 md:py-28 px-6 md:px-8 overflow-hidden"
    >
      {/* Ambient mesh glows */}
      <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] rounded-full bg-primary-blue/[0.04] dark:bg-primary-blue/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 right-1/3 w-[400px] h-[400px] rounded-full bg-primary-teal/[0.04] dark:bg-primary-teal/[0.07] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">

        {/* ── Top editorial banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-slate-200 dark:border-slate-800/70"
        >
          <h2 className="font-headline text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[0.92] tracking-tight text-[var(--text-primary)]">
            What I&nbsp;
            <span className="text-gradient">stand for</span>
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] font-light max-w-xs leading-relaxed md:text-right">
            Four principles that guide every system I design and every line of code I ship.
          </p>
        </motion.div>

        {/* ── Pillar columns ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className="group relative flex flex-col gap-5 cursor-default"
            >
              {/* Animated top accent line */}
              <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute inset-0 ${
                    pillar.accent
                      ? 'bg-gradient-to-r from-primary-blue to-primary-teal'
                      : 'bg-gradient-to-r from-primary-teal to-primary-mint'
                  }`}
                />
              </div>

              {/* Index + tag */}
              <div className="flex items-center justify-between">
                <span
                  className={`text-[9px] font-black tracking-[0.2em] uppercase select-none ${
                    pillar.accent
                      ? 'text-primary-blue dark:text-primary-teal'
                      : 'text-primary-teal dark:text-primary-mint'
                  }`}
                >
                  {pillar.index}
                </span>
                <span className="text-[9px] font-bold tracking-widest uppercase text-[var(--text-secondary)] select-none opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {pillar.tag}
                </span>
              </div>

              {/* Statement */}
              <p
                className={`font-headline text-base md:text-[17px] leading-snug tracking-tight ${
                  pillar.accent
                    ? 'text-gradient font-bold'
                    : 'font-medium text-[var(--text-primary)] opacity-80 group-hover:opacity-100 transition-opacity duration-300'
                }`}
              >
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
