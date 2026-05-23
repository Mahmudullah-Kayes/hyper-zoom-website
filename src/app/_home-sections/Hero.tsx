"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { PlayCircle, Globe, ArrowRight, Video } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={containerRef} className="relative h-[85vh] min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background with higher visibility */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover grayscale opacity-60"
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </motion.div>

      {/* Main Narrative - Constrained to 1300px */}
      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1300px] mx-auto pt-16">
        <div className="flex flex-col items-center text-center">
            {/* Minimal Badge */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3 mb-10 px-4 py-2 border border-white/10 rounded-full bg-white/5"
            >
                <div className="h-1 w-1 bg-accent rounded-full animate-pulse" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-accent/80">Creative Post Production Studio</span>
            </motion.div>

            {/* Scaled-down Headline */}
            <h1 className="mb-0 flex flex-col items-center">
               <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-white tracking-[-0.05em]"
               >
                  HYPERZOOM
               </motion.span>
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.6, duration: 1 }}
                 className="flex items-center gap-4 mt-2"
               >
                  <div className="h-[1px] w-8 md:w-16 bg-accent/40" />
                  <span className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.1em] uppercase text-accent italic">
                    Cinematic Vision
                  </span>
                  <div className="h-[1px] w-8 md:w-16 bg-accent/40" />
               </motion.div>
            </h1>

            {/* Sub-context description (New addition for better flow) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 max-w-lg text-white/50 text-sm md:text-base leading-relaxed"
            >
              Building a new standard in visual storytelling. We translate brand identity into immersive cinematic experiences with focus and precision.
            </motion.p>

            {/* Actions with Borders */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-col sm:flex-row items-center gap-6 mt-12"
            >
                <button className="group relative flex items-center gap-4 px-8 py-4 bg-accent border border-accent rounded-sm shadow-[0_0_40px_rgba(0,122,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-300">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">Start Project</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-all" />
                </button>

                <button className="group relative flex items-center gap-4 px-8 py-4 border border-white/10 hover:border-accent hover:bg-white/5 rounded-sm transition-all duration-300">
                    <Video className="w-4 h-4 text-white group-hover:text-accent" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">Watch Reel</span>
                </button>
            </motion.div>
        </div>
      </div>

      {/* Decorative Matrix Border Detail */}
      <div className="absolute inset-x-0 bottom-0 max-w-[1300px] mx-auto border-b border-l border-r border-white/5 h-20 pointer-events-none hidden lg:block" />

    </section>
  );
}
