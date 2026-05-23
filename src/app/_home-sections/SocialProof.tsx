"use client";

import { motion } from "framer-motion";
import { Zap, Target, TrendingUp, Sparkles } from "lucide-react";

const STAT_BLOCKS = [
  { 
    title: "Fast Turnaround", 
    desc: "Delivered in 24-48 hours", 
    icon: <Zap className="w-5 h-5" />,
    metric: "48H" 
  },
  { 
    title: "Platform Optimized", 
    desc: "Viral ready for Reels/TikTok", 
    icon: <Target className="w-5 h-5" />,
    metric: "9:16" 
  },
  { 
    title: "Conversion Focused", 
    desc: "Edits that sell products", 
    icon: <TrendingUp className="w-5 h-5" />,
    metric: "X2" 
  },
  { 
    title: "Premium Finish", 
    desc: "Netflix quality grading", 
    icon: <Sparkles className="w-5 h-5" />,
    metric: "4K" 
  },
];

export function SocialProof() {
  return (
    <section id="values" className="relative w-full py-24 bg-background border-t border-white/5 overflow-hidden scroll-mt-24">
      <div className="content-container">
        {/* Lighter component background with border */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 p-10 md:p-16 bg-muted border border-white/5 rounded-2xl shadow-xl">
          <div className="max-w-xl">
             <motion.p
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-accent/80 mb-6"
             >
                Built for brands that want attention
             </motion.p>
             <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white"
             >
                Focused on <span className="text-accent italic">Performance</span> <br />
                Driven Editing
             </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block max-w-[280px]"
          >
             <p className="text-[10px] font-bold uppercase tracking-[0.1em] leading-relaxed opacity-40">
                Top agencies never leave gaps—they reframe. Our process ensures every frame contributes to growth.
             </p>
          </motion.div>
        </div>

        {/* Metric Style Grid with Higher Visibility */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STAT_BLOCKS.map((block, i) => (
             <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="group relative h-full bg-muted p-8 md:p-12 border border-white/5 rounded-xl transition-all duration-300 hover:bg-white/[0.04] hover:border-accent/40"
             >
                <div className="mb-12 flex justify-between items-start">
                   <div className="text-accent group-hover:scale-110 transition-transform">
                      {block.icon}
                   </div>
                   {/* Increased Visibility for Metric text as requested */}
                   <span className="text-3xl md:text-4xl font-black tracking-tighter text-white opacity-40 group-hover:opacity-100 group-hover:text-accent transition-all">
                      {block.metric}
                   </span>
                </div>
                <div className="relative">
                   <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-2 leading-none">
                      {block.title}
                   </h3>
                   <p className="text-[10px] font-bold uppercase tracking-wider text-white/40 leading-relaxed group-hover:text-white transition-colors duration-500">
                      {block.desc}
                   </p>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
