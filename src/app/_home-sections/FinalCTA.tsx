"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function FinalCTA() {
    return (
        <section className="relative w-full py-24 bg-background border-t border-white/5 overflow-hidden scroll-mt-24">
            <div className="content-container">
                <div className="relative z-10 w-full max-w-[900px] mx-auto text-center flex flex-col items-center bg-muted border border-white/5 p-16 md:p-24 rounded-3xl overflow-hidden shadow-2xl group transition-all duration-700 hover:border-accent/40">
                    {/* Subtle background glow */}
                    <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] bg-accent/10 blur-[130px] rounded-full opacity-40 animate-pulse pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-2 mb-10"
                    >
                        <div className="h-[1px] w-8 bg-accent/40" />
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-accent/80">HyprZoom Studio</span>
                        <div className="h-[1px] w-8 bg-accent/40" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-white leading-tight mb-16"
                    >
                        Let’s build your <br />
                        <span className="text-accent italic">Brand</span> with video
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <a href="#contact" className="group relative flex items-center gap-4 px-8 py-4 bg-accent border border-accent rounded-sm shadow-[0_0_40px_rgba(0,122,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-300">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">Start Project</span>
                            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-all" />
                        </a>

                        <a href="#contact" className="flex items-center gap-3 cursor-pointer group/reel">
                            <Play className="w-4 h-4 fill-white text-white group-hover/reel:text-accent group-hover/reel:fill-accent transition-all duration-300" />
                            <span className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px] group-hover/reel:text-white transition-all duration-300">Showcase Reel</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
