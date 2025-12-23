import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-5xl mx-auto text-center space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[clamp(3rem,10vw,7rem)] font-headline leading-[0.9] tracking-tight text-[var(--text-primary)] mb-12">
            Let's build
            <br />
            <span className="text-gradient">something great</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          <a
            href="mailto:hrishikesh@example.com"
            className="inline-block text-[clamp(1.5rem,4vw,2.5rem)] font-medium text-[var(--text-secondary)] hover:text-gradient transition-all duration-300"
          >
            hrishikeshprasadc@gmail.com
          </a>
          {/* <br />
          <a
            href="mailto:hrishikesh@example.com"
            className="inline-block text-[clamp(1.5rem,2vw,2rem)] font-medium text-[var(--text-secondary)] hover:text-gradient transition-all duration-300"
          >
            +91-9809582131
          </a> */}

          <div className="flex items-center justify-center gap-8 pt-8">
            <motion.a
              href="https://github.com/hr-ishi94"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full backdrop-blur-sm bg-white/5 dark:bg-black/10 border border-neutral-200/20 dark:border-neutral-800/20 hover:border-primary-teal/50 transition-colors duration-300"
            >
              <Github className="w-6 h-6 text-[var(--text-secondary)]" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/hrishikesh-prasad-c/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full backdrop-blur-sm bg-white/5 dark:bg-black/10 border border-neutral-200/20 dark:border-neutral-800/20 hover:border-primary-teal/50 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6 text-[var(--text-secondary)]" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/hrishi.dev_/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full backdrop-blur-sm bg-white/5 dark:bg-black/10 border border-neutral-200/20 dark:border-neutral-800/20 hover:border-primary-teal/50 transition-colors duration-300"
            >
              <Instagram className="w-6 h-6 text-[var(--text-secondary)]" />
            </motion.a>

            <motion.a
              href="mailto:hrishikeshprasadc@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full backdrop-blur-sm bg-white/5 dark:bg-black/10 border border-neutral-200/20 dark:border-neutral-800/20 hover:border-primary-teal/50 transition-colors duration-300"
            >
              <Mail className="w-6 h-6 text-[var(--text-secondary)]" />
            </motion.a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm text-[var(--text-secondary)] pt-16"
        >
          Designed with intention. Engineered for impact.
          <br/>
          <br/>
          © 2024 Hrishikesh Prasad C
        </motion.p>
      </div>
    </section>
  );
}
