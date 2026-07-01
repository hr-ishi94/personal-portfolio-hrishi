import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Copy, Check, Send, Sparkles } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "hrishikeshprasadc@gmail.com";
  
  // To receive background emails automatically, go to https://web3forms.com/,
  // submit your email, copy the Access Key they send you, and paste it here:
  const WEB3FORMS_ACCESS_KEY = "f173c778-7a9f-4862-b549-f5fddb1d8b0e";

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Portfolio Inquiry",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // If the developer hasn't provided a Web3Forms key, fall back to opening mailto client
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0A%0AMessage:%0A${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoUrl;
      setSubmitStatus("success");
      return;
    }

    setSubmitStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "Portfolio Inquiry", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden bg-slate-950/[0.01] dark:bg-black/20">
      
      {/* Background glow shadow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-blue-teal rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-4xl w-full text-center space-y-16 relative z-10">
        
        {/* Centered Title Area */}
        <div className="space-y-4 flex flex-col items-center">
          <span className="text-xs font-bold tracking-widest text-primary-teal uppercase flex items-center gap-2 px-3 py-1 rounded-full border border-primary-teal/20 bg-primary-teal/5">
            <Sparkles className="w-3.5 h-3.5 text-primary-teal animate-pulse" />
            Get In Touch
          </span>
          <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-headline font-extrabold leading-[1.0] tracking-tight text-[var(--text-primary)] max-w-2xl">
            Let's build <span className="text-gradient">something legendary</span>
          </h2>
          <p className="text-[var(--text-secondary)] font-light leading-relaxed max-w-md pt-2">
            Have a project concept, role opportunity, or just want to chat? Send a message below or copy my email directly.
          </p>

          {/* Email Copy Trigger Pill */}
          <div className="relative inline-block mt-4 group">
            <button
              onClick={handleCopy}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-neutral-200/50 dark:border-neutral-800/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md text-sm text-[var(--text-primary)] hover:text-primary-teal hover:border-primary-teal/40 transition-all duration-300"
            >
              <span>{email}</span>
              <div className="p-1 rounded-md bg-slate-500/5 dark:bg-white/5 border border-slate-500/10 dark:border-white/5">
                {copied ? (
                  <Check className="w-3 h-3 text-emerald-500" />
                ) : (
                  <Copy className="w-3 h-3 text-[var(--text-secondary)] group-hover:text-primary-teal transition-colors" />
                )}
              </div>
            </button>

            {/* Toast Tooltip */}
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: -40, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute left-1/2 -translate-x-1/2 top-0 px-3 py-1 rounded bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-bold shadow-lg pointer-events-none whitespace-nowrap"
                >
                  Email copied!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Minimalist Contact Form Panel */}
        <div className="max-w-2xl mx-auto w-full">
          <div className="p-8 md:p-12 rounded-2xl glassmorphic border border-neutral-200/10 dark:border-white/5 bg-white/40 dark:bg-slate-950/20 shadow-2xl relative overflow-hidden text-left backdrop-blur-xl">
            
            <AnimatePresence mode="wait">
              {submitStatus === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-500 shadow-lg shadow-emerald-500/10">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-headline font-bold text-[var(--text-primary)]">Message Sent!</h3>
                    <p className="text-[var(--text-secondary)] font-light max-w-sm">
                      Thank you for reaching out. Your submission has been delivered, and I'll get back to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="px-6 py-2.5 rounded-full border border-neutral-200/50 dark:border-neutral-800/50 text-xs font-semibold text-[var(--text-primary)] hover:bg-slate-500/5 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name input */}
                    <div className="space-y-1 relative">
                      <label htmlFor="form-name" className="text-[10px] font-bold text-[var(--text-secondary)] tracking-wider uppercase">Name</label>
                      <input
                        type="text"
                        id="form-name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-0 py-2 bg-transparent text-[var(--text-primary)] border-b border-neutral-300 dark:border-neutral-800 focus:outline-none transition-colors font-light text-sm"
                        placeholder="Your name"
                      />
                      {/* Animated bottom line */}
                      <div className={`absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-primary-blue to-primary-teal transition-all duration-300 ${focusedField === "name" ? "w-full" : "w-0"}`} />
                    </div>
                    
                    {/* Email input */}
                    <div className="space-y-1 relative">
                      <label htmlFor="form-email" className="text-[10px] font-bold text-[var(--text-secondary)] tracking-wider uppercase">Email Address</label>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-0 py-2 bg-transparent text-[var(--text-primary)] border-b border-neutral-300 dark:border-neutral-800 focus:outline-none transition-colors font-light text-sm"
                        placeholder="you@example.com"
                      />
                      {/* Animated bottom line */}
                      <div className={`absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-primary-blue to-primary-teal transition-all duration-300 ${focusedField === "email" ? "w-full" : "w-0"}`} />
                    </div>
                  </div>

                  {/* Subject input */}
                  <div className="space-y-1 relative">
                    <label htmlFor="form-subject" className="text-[10px] font-bold text-[var(--text-secondary)] tracking-wider uppercase">Subject</label>
                    <input
                      type="text"
                      id="form-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-0 py-2 bg-transparent text-[var(--text-primary)] border-b border-neutral-300 dark:border-neutral-800 focus:outline-none transition-colors font-light text-sm"
                      placeholder="Project inquiry / Opportunity"
                    />
                    {/* Animated bottom line */}
                    <div className={`absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-primary-blue to-primary-teal transition-all duration-300 ${focusedField === "subject" ? "w-full" : "w-0"}`} />
                  </div>

                  {/* Message input */}
                  <div className="space-y-1 relative">
                    <label htmlFor="form-message" className="text-[10px] font-bold text-[var(--text-secondary)] tracking-wider uppercase">Message</label>
                    <textarea
                      id="form-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={4}
                      className="w-full px-0 py-2 bg-transparent text-[var(--text-primary)] border-b border-neutral-300 dark:border-neutral-800 focus:outline-none transition-colors font-light text-sm resize-none"
                      placeholder="Tell me about your project..."
                    />
                    {/* Animated bottom line */}
                    <div className={`absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-primary-blue to-primary-teal transition-all duration-300 ${focusedField === "message" ? "w-full" : "w-0"}`} />
                  </div>

                  {/* Status Feedback Message */}
                  {submitStatus === "error" && (
                    <p className="text-xs font-semibold text-rose-500">
                      * Submission failed. Please copy the email directly and send it manualy.
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitStatus === "loading"}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-primary-blue to-primary-teal text-white font-bold text-sm shadow-lg shadow-primary-teal/20 hover:scale-[1.01] transition-transform duration-300 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {submitStatus === "loading" ? (
                      <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
            
          </div>
        </div>

        {/* Footer Area */}
        <div className="space-y-6 pt-8 border-t border-neutral-200/10 dark:border-white/5">
          {/* Social Icons Dock */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-2 p-1 rounded-2xl glassmorphic shadow-lg">
              <motion.a
                href="https://github.com/hr-ishi94"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl hover:bg-slate-500/10 dark:hover:bg-white/5 border border-transparent hover:border-slate-500/10 dark:hover:border-white/5 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/hrishikesh-prasad-c/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl hover:bg-slate-500/10 dark:hover:bg-white/5 border border-transparent hover:border-slate-500/10 dark:hover:border-white/5 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/hrishi.dev_/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl hover:bg-slate-500/10 dark:hover:bg-white/5 border border-transparent hover:border-slate-500/10 dark:hover:border-white/5 transition-all"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]" />
              </motion.a>

              <motion.a
                href={`mailto:${email}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl hover:bg-slate-500/10 dark:hover:bg-white/5 border border-transparent hover:border-slate-500/10 dark:hover:border-white/5 transition-all"
                aria-label="Direct Email"
              >
                <Mail className="w-5 h-5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]" />
              </motion.a>
            </div>
          </div>

          {/* Copyright Metadata */}
          <div className="text-xs text-[var(--text-secondary)] font-light space-y-1">
            <p>Designed with intention. Engineered for impact.</p>
            <p>© {new Date().getFullYear()} Hrishikesh Prasad C. All rights reserved.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
