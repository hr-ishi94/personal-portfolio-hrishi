import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const chapters = [
  {
    title: "The Path Not Taken",
    content:
      "BTech in Mechanical Engineering. Stability. A government job. These were the expectations, not the dreams. I followed the path others carved, cleared exam stages, but failed at the final hurdle. Depression crept in. I settled for a production engineer role, knowing deep down it wasn't me.",
    highlight: true,
  },
  {
    title: "The Awakening",
    content:
      "One day, I randomly tried out a coding challenge tutorial. A tutorial so clear that even a child could understand. Something clicked. The fear I'd carried dissolved with each concept grasped. For the first time, problem-solving felt like art.",
    highlight: true,
  },
  {
    title: "The Commitment",
    content:
      "Internship became my crucible. LeetCode became my daily ritual. 400+ problems solved. Not because I had to, but because I couldn't stop. Consistency transformed terror into mastery. Every solution was proof—this was where I belonged.",
    highlight: true,
  },
  {
    title: "The Arrival",
    content:
      "I'm on the right path now. With a vision for the Future. Building systems, solving problems, creating impact. The mechanical engineer who was afraid of code is now designing solutions at scale.",
    highlight: true,
  },
];

export function TransitionSection() {
  return (
    <section className="relative py-32 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-[clamp(3rem,10vw,6rem)] font-headline leading-[0.9] tracking-tight">
            From
            <br />
            <span className="text-gradient">Uncertainty</span>
            <br />
            to Direction
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mt-8">
            A story of fear, discovery, and the unexpected path to becoming a
            developer.
          </p>
        </motion.div>

        <div className="space-y-24">
          {chapters.map((chapter, index) => (
            <Chapter key={index} chapter={chapter} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Chapter({
  chapter,
  index
}: 
{
  chapter: (typeof chapters)[0];
    index: number;
}) {
  const chapterRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: chapterRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <motion.div
      ref={chapterRef}
      style={{ opacity, y }}
      className={`py-16 border-l-2 ${
        chapter.highlight
          ? "border-primary-teal pl-8"
          : "border-neutral-200/30 dark:border-neutral-800/30 pl-8"
      }`}
      key={index}
    >
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-[clamp(1.75rem,5vw,2.5rem)] font-headline leading-tight tracking-tight mb-6 ${
          chapter.highlight ? "text-gradient" : "text-[var(--text-primary)]"
        }`}
      >
        {chapter.title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl"
      >
        {chapter.content}
      </motion.p>
    </motion.div>
  );
}
