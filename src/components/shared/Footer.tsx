"use client";

import Link from "next/link";
import { FiInstagram as Instagram, FiTwitter as Twitter, FiLinkedin as Linkedin, FiFacebook as Facebook } from "react-icons/fi";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-20 bg-background border-t border-white/5 overflow-hidden">
      <div className="w-full max-w-[1300px] mx-auto px-4 md:px-8">
        
        {/* Main Footer Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
           
           {/* Column 1: Studio Brand */}
           <div className="flex flex-col gap-6 col-span-1 lg:col-span-1">
               <Link
                    href="#"
                    className="text-xl md:text-2xl font-black tracking-[-0.05em] uppercase text-white group"
                >
                    HYPR<span className="text-accent underline decoration-accent/40 decoration-[2px] underline-offset-8 transition-all group-hover:decoration-accent">ZOOM</span>
                </Link>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 leading-loose max-w-[200px]">
                   A creative post production studio for the digital era. Building vision into performance.
                </p>
           </div>

           {/* Column 2: Studio Navigation */}
           <div className="flex flex-col gap-8">
               <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent/60">Studio</h4>
               <ul className="flex flex-col gap-4">
                  <li><a href="#services" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Services</a></li>
                  <li><a href="#work" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#process" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Workflow</a></li>
                  <li><Link href="/about" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">About Story</Link></li>
               </ul>
           </div>

           {/* Column 3: Social & Platform */}
           <div className="flex flex-col gap-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent/60">Creative Hub</h4>
                <div className="flex flex-col gap-4">
                   <div className="flex items-center gap-6">
                      <a href="#" className="p-3 bg-white/5 border border-white/5 rounded-full text-white hover:text-accent hover:border-accent transition-all duration-300">
                         <Instagram className="w-5 h-5 focus:scale-110 active:scale-95" />
                      </a>
                      <a href="#" className="p-3 bg-white/5 border border-white/5 rounded-full text-white hover:text-accent hover:border-accent transition-all duration-300">
                         <Twitter className="w-5 h-5 focus:scale-110 active:scale-95" />
                      </a>
                      <a href="#" className="p-3 bg-white/5 border border-white/5 rounded-full text-white hover:text-accent hover:border-accent transition-all duration-300">
                         <Linkedin className="w-5 h-5 focus:scale-110 active:scale-95" />
                      </a>
                      <a href="#" className="p-3 bg-white/5 border border-white/5 rounded-full text-white hover:text-accent hover:border-accent transition-all duration-300">
                         <Facebook className="w-5 h-5 focus:scale-110 active:scale-95" />
                      </a>
                   </div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mt-2">@HyprZoomStudio</p>
                </div>
           </div>

           {/* Column 4: Location / Time */}
           <div className="flex flex-col gap-8 items-start md:items-end lg:items-end">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent/60">Global Reach</h4>
                <div className="flex flex-col items-start md:items-end lg:items-end gap-1">
                   <p className="text-xs font-black uppercase tracking-widest text-white">Zinzira Bus Stand, Rani Plaza, Keraniganj, Dhaka -1310</p>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 lowercase">hyprzoom@gmail.com</p>
                </div>
           </div>
        </div>

        {/* Bottom Bar: Copyright / Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
            <p className="text-[10px] font-black uppercase tracking-widest text-white/10 select-none">
              &copy; {currentYear} HYPRZOOM STUDIO. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
        </div>

      </div>
    </footer>
  );
}
