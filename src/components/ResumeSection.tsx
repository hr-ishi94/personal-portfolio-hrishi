import { motion } from 'framer-motion';
import { Download, FileText, ArrowUpRight } from 'lucide-react';

export function ResumeSection() {
  const resumeUrl = "/Hrishikesh_Prasad_C_Full_Stack_Engineer.pdf";

  return (
    <section id="resume" className="relative py-32 px-6 md:px-8">
      {/* Visual background elements */}
      <div className="absolute inset-0 bg-gradient-dark opacity-[var(--gradient-opacity)] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text/Content Info */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="text-xs font-bold tracking-widest text-primary-teal uppercase">
                Curriculum Vitae
              </span>
              <h2 className="text-[clamp(2.5rem,8vw,4.5rem)] font-headline font-extrabold leading-[0.95] tracking-tight text-[var(--text-primary)]">
                Looking for the
                <br />
                <span className="text-gradient">full story?</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[var(--text-secondary)] text-base md:text-lg font-light leading-relaxed max-w-xl"
            >
              Download the complete PDF version of my resume for an in-depth look at my professional background, technical milestones, and academic history.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4"
            >
              <a
                href={resumeUrl}
                download="Hrishikesh_Prasad_C_Full_Stack_Engineer.pdf"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-primary-blue to-primary-teal text-white font-bold text-sm shadow-xl shadow-primary-teal/20 hover:scale-105 transition-all duration-300"
              >
                <Download className="w-4.5 h-4.5" />
                Download Resume (PDF)
              </a>
            </motion.div>
          </div>

          {/* Visual Interactive Resume Teaser Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group cursor-pointer w-full max-w-[340px]">
              {/* Card Aura */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary-blue to-primary-teal opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500" />
              
              {/* Glass Document Preview Card */}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block glassmorphic-interactive p-8 rounded-2xl shadow-2xl relative overflow-hidden text-left"
              >
                {/* Visual lines resembling a resume header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <FileText className="w-10 h-10 text-primary-teal" />
                    <ArrowUpRight className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-primary-teal group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  
                  <div className="space-y-2 pt-4 border-b border-neutral-200/20 pb-4">
                    <h4 className="text-lg font-headline font-bold text-[var(--text-primary)]">
                      Hrishikesh Prasad C
                    </h4>
                    <p className="text-xs font-semibold text-primary-teal">
                      Full Stack Engineer
                    </p>
                  </div>
                  
                  {/* Dummy visual text bars */}
                  <div className="space-y-3 pt-2">
                    <div className="h-2 w-full bg-slate-500/10 dark:bg-white/5 rounded" />
                    <div className="h-2 w-[85%] bg-slate-500/10 dark:bg-white/5 rounded" />
                    <div className="h-2 w-[90%] bg-slate-500/10 dark:bg-white/5 rounded" />
                    <div className="h-2 w-[60%] bg-slate-500/10 dark:bg-white/5 rounded" />
                  </div>

                  <div className="space-y-2 pt-4">
                    <div className="h-1.5 w-[30%] bg-primary-blue/30 rounded" />
                    <div className="flex gap-2">
                      <div className="h-4 w-12 bg-slate-500/15 dark:bg-white/10 rounded-full" />
                      <div className="h-4 w-16 bg-slate-500/15 dark:bg-white/10 rounded-full" />
                      <div className="h-4 w-14 bg-slate-500/15 dark:bg-white/10 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Subtle bottom shine */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary-blue to-primary-teal opacity-60" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
