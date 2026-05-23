"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Target, Video, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SERVICES = [
  { id: "short", name: "Short Form Content", desc: "Performance-driven Reels & TikTok edits.", icon: <Zap className="w-5 h-5 text-accent" />, color: "from-accent/0 to-accent/5" },
  { id: "ads", name: "Direct Response Ads", desc: "Creatives that drive sales and ROAS.", icon: <Target className="w-5 h-5 text-accent" />, color: "from-accent/0 to-accent/10" },
  { id: "corp", name: "Premium Commercials", desc: "High-end brand storytelling for web.", icon: <Video className="w-5 h-5 text-accent" />, color: "from-accent/0 to-accent/15" },
];

export function ServicesSummary() {
  return (
    <section id="services" className="relative w-full py-24 bg-background border-t border-white/5 overflow-hidden scroll-mt-24">
      <div className="content-container">
        <div className="flex flex-col gap-4 mb-20 max-w-xl mx-auto text-center px-4">
             <motion.p
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-accent/80"
             >
                Our Expertise
             </motion.p>
             <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white"
             >
                Visual Solutions for <br />
                <span className="text-accent italic">Modern Brands</span>
             </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {SERVICES.map((service, n) => (
             <div
                key={service.id}
                className={cn(
                  "relative p-10 md:p-14 lg:p-16 rounded-3xl border border-white/5 overflow-hidden group/card shadow-xl transition-all duration-700 hover:border-accent/60",
                  "bg-muted"
                )}
             >
                {/* Dynamic Gradient Beam */}
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000", service.color)} />
                
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start mb-20">
                     <div className="h-12 w-12 border border-white/5 bg-white/5 rounded-2xl flex items-center justify-center group-hover/card:border-accent/40 group-hover/card:bg-accent/5 transition-all duration-500">
                        {service.icon}
                     </div>
                     <ArrowUpRight className="w-5 h-5 text-white/10 group-hover/card:text-accent group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-all duration-300" />
                  </div>
                  
                  <div>
                     <span className="text-[9px] font-black uppercase tracking-[0.4em] text-accent/40 block mb-4 group-hover/card:translate-x-2 transition-transform duration-500">Service 0{n+1}</span>
                     <h3 className="text-2xl md:text-3xl font-black uppercase tracking-[-0.03em] text-white leading-none mb-4 group-hover/card:translate-x-4 transition-transform duration-700">
                        {service.name}
                     </h3>
                     <p className="text-[10px] md:text-sm font-bold uppercase tracking-[0.1em] text-white/30 group-hover/card:pl-6 transition-all duration-700">
                        {service.desc}
                     </p>
                  </div>
                </div>

                <div className="absolute left-0 bottom-0 h-1 w-0 bg-accent transition-all duration-1000 group-hover/card:w-full" />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
