"use client";

import { motion } from "framer-motion";
import { Send, Clock, User, Mail, MessageSquare, ChevronDown, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-background border-t border-white/5 overflow-hidden scroll-mt-24">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Branding / Context */}
          <div className="flex flex-col gap-8 max-w-md">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <div className="h-[1px] w-8 bg-accent/40" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-accent/80">HyprZoom Contact</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white leading-[1.1]"
            >
              Let's <span className="text-accent italic">Build</span> Your Vision Together
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-4 p-6 bg-muted border border-white/5 rounded-2xl"
            >
              <Clock className="w-6 h-6 text-accent" />
              <div className="flex flex-col gap-0.5">
                <p className="text-[10px] font-black uppercase tracking-widest text-white">Guaranteed Response</p>
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/40">Within 24 Hours</p>
              </div>
            </motion.div>

            <div className="flex flex-col gap-6 mt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-white/30 leading-relaxed max-w-[300px]">
                A dedicated creative partnership for brands that demand performance and cinematic excellence.
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-accent/40">General Inquiries</span>
                <a href="mailto:hyprzoom@gmail.com" className="text-xl font-black text-white hover:text-accent transition-colors">
                  hyprzoom@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Web3Forms Integrated Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative bg-muted p-8 md:p-12 lg:p-14 border border-white/5 rounded-3xl overflow-hidden shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
              {/* Hidden Web3Forms fields — replace YOUR_ACCESS_KEY_HERE with your actual key */}
              <input type="hidden" name="access_key" value="a46fe52c-5d7d-4d12-914a-9d130e82bcd8" />
              <input type="hidden" name="subject" value="New Inquiry - HyprZoom Studio" />
              <input type="hidden" name="from_name" value="HyprZoom Website" />

              {/* Name */}
              <div className="flex flex-col gap-3 group">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/40 group-focus-within:text-accent transition-colors">
                  <User className="w-3 h-3" /> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  className="bg-white/5 border border-white/5 p-4 rounded-xl text-xs font-bold tracking-widest text-white outline-none focus:border-accent/40 transition-all placeholder:text-white/10"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-3 group">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/40 group-focus-within:text-accent transition-colors">
                  <Mail className="w-3 h-3" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="hello@brand.com"
                  className="bg-white/5 border border-white/5 p-4 rounded-xl text-xs font-bold tracking-widest text-white outline-none focus:border-accent/40 transition-all placeholder:text-white/10"
                />
              </div>

              {/* Project Type — fixed: use defaultValue on <select> instead of selected on <option> */}
              <div className="flex flex-col gap-3 group relative">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/40 group-focus-within:text-accent transition-colors">
                  <ChevronDown className="w-3 h-3" /> Project Type
                </label>
                <select
                  name="project_type"
                  required
                  defaultValue=""
                  className="appearance-none bg-white/5 border border-white/5 p-4 rounded-xl text-xs font-bold tracking-widest text-white outline-none focus:border-accent/40 transition-all cursor-pointer"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="short-form">Short Form Content</option>
                  <option value="ads">Performance Ads</option>
                  <option value="commercial">Premium Commercial</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-3 group">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/40 group-focus-within:text-accent transition-colors">
                  <MessageSquare className="w-3 h-3" /> Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your brand goals..."
                  className="bg-white/5 border border-white/5 p-4 rounded-xl text-xs font-bold tracking-widest text-white outline-none focus:border-accent/40 transition-all placeholder:text-white/10 resize-none"
                />
              </div>

              {/* Success / Error feedback */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  <p className="text-[11px] font-bold uppercase tracking-widest text-green-400">
                    Proposal sent! We'll be in touch within 24 hours.
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <p className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex items-center justify-center gap-4 bg-accent p-5 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(0,122,255,0.2)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white">
                  {isSubmitting ? "Sending..." : "Send Proposal"}
                </span>
                <Send className={`w-4 h-4 text-white transition-all ${isSubmitting ? "opacity-50" : "group-hover:translate-x-1"}`} />
              </button>
            </form>

            {/* Glow Accent */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/10 blur-[100px] pointer-events-none rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}