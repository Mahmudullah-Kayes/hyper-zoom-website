"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useRef } from "react";

const PROJECTS = [
  { id: 1, title: "HYPR STUDIO REEL", category: "Color Grading", thumbnail: "/thumb-1.png" },
  { id: 2, title: "VIBRANT SOCIAL", category: "Social Content", thumbnail: "/thumb-2.png" },
  { id: 3, title: "CYBERPUNK NIGHTS", category: "Urban Edit", thumbnail: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 4, title: "MINIMAL AESTHETICS", category: "Product Shot", thumbnail: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];

export function FeaturedWork() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="relative w-full py-24 bg-background border-t border-white/5 overflow-hidden scroll-mt-24">
      <div className="content-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 px-4">
             <div className="flex flex-col gap-4">
                  <motion.p
                     initial={{ opacity: 0, x: -15 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6 }}
                     className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-accent/80"
                  >
                     Showcase
                  </motion.p>
                  <motion.h2 
                     initial={{ opacity: 0, y: 15 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.1 }}
                     className="text-white"
                  >
                     Featured <span className="text-accent italic">Work</span>
                  </motion.h2>
             </div>
             
             {/* Slide Navigation Buttons */}
             <div className="flex items-center gap-4">
                 <button 
                   onClick={() => scroll('left')}
                   className="p-4 border border-white/10 hover:border-accent hover:bg-accent hover:text-white transition-all rounded-full"
                 >
                    <ArrowLeft className="w-4 h-4" />
                 </button>
                 <button 
                    onClick={() => scroll('right')}
                    className="p-4 border border-white/10 hover:border-accent hover:bg-accent hover:text-white transition-all rounded-full"
                 >
                    <ArrowRight className="w-4 h-4" />
                 </button>
             </div>
        </div>

        {/* Swipe Experience constrained in total width logic */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-6 pb-12 px-4 touch-pan-x"
        >
          {PROJECTS.map((project, i) => (
             <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative min-w-[280px] sm:min-w-[400px] md:min-w-[600px] aspect-video rounded-2xl overflow-hidden group snap-center cursor-pointer border border-white/10 hover:border-accent/40 shadow-2xl transition-all duration-500"
             >
                {/* Backdrop with Demo Image */}
                <div className="absolute inset-0 z-0 bg-muted">
                    <img 
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
                      src={project.thumbnail}
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-background/50 transition-opacity group-hover:opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90 group-hover:opacity-40" />
                </div>

                {/* Minimal Overlay with Clear Typography */}
                <div className="absolute bottom-10 left-10 z-10 flex flex-col gap-2 pointer-events-none group-hover:translate-x-4 transition-all duration-500 text-left">
                    <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                       <Play className="w-3 h-3 fill-accent" />
                       <span className="text-[9px] font-black uppercase tracking-[0.3em]">
                          {project.category}
                       </span>
                    </div>
                    <h3 className="text-xl md:text-3xl font-black uppercase tracking-[-0.05em] text-white leading-none">
                       {project.title}
                    </h3>
                </div>
                
                {/* Hover Play Button Visual */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="h-16 w-16 bg-accent rounded-full flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-700">
                        <Play className="w-6 h-6 fill-white text-white" />
                    </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
