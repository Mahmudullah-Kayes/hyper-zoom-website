"use client";

import { motion } from "framer-motion";
import { Upload, Edit, Eye, CheckCircle, ArrowRight } from "lucide-react";

const STEPS = [
  { id: "step1", name: "Send Footage", desc: "Upload raw assets easily.", icon: <Upload className="w-6 h-6" /> },
  { id: "step2", name: "We Edit", desc: "Crafting your cinematic vision.", icon: <Edit className="w-6 h-6" /> },
  { id: "step3", name: "You Review", desc: "Collaborate on refinements.", icon: <Eye className="w-6 h-6" /> },
  { id: "step4", name: "We Deliver", desc: "Ready for launch and growth.", icon: <CheckCircle className="w-6 h-6" /> },
];

export function Process() {
  return (
    <section id="process" className="relative w-full py-24 bg-background border-t border-white/5 overflow-hidden scroll-mt-24">
      <div className="content-container">
        <div className="flex flex-col items-center gap-4 mb-24 max-w-xl mx-auto text-center px-4">
             <motion.p
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-accent/80"
             >
                Our Workflow
             </motion.p>
             <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white"
             >
                How We <span className="text-accent italic">Build</span> Brands
             </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
          {STEPS.map((step, i) => (
             <div
                key={step.id}
                className="relative bg-muted p-10 md:p-12 rounded-2xl border border-white/5 overflow-hidden group/step hover:border-accent/30 transition-all duration-300"
             >
                <div className="absolute top-6 right-6 text-4xl font-black text-white/5 tracking-tighter opacity-10">
                   0{i+1}
                </div>

                <div className="relative z-10 text-accent mb-10 flex justify-center items-center h-16 w-16 bg-white/5 border border-white/5 rounded-full group-hover/step:border-accent group-hover/step:bg-accent/5 transition-all duration-300">
                   {step.icon}
                </div>
                
                <div className="relative z-10">
                   <h3 className="text-lg md:text-xl font-black uppercase tracking-[-0.03em] text-white leading-none mb-4">
                      {step.name}
                   </h3>
                   <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] text-white/30 leading-relaxed max-w-[180px]">
                      {step.desc}
                   </p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
