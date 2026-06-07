"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 pt-6 pb-2 md:pt-8",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/[0.03] !py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-[1300px] mx-auto flex justify-between items-center group">
        <Link
          href="#"
          className="text-xl md:text-2xl font-black tracking-[-0.05em] uppercase text-white group"
        >
          HYPR<span className="text-accent underline decoration-accent/40 decoration-[2px] underline-offset-8">ZOOM</span>
        </Link>

        {/* Anchor Links for Single Page Application */}
        <div className="flex items-center gap-6 lg:gap-10">
          <ul className="hidden md:flex items-center gap-8 bg-white/5 border border-white/10 px-8 py-2 rounded-full backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[11px] font-black uppercase tracking-[0.15em] text-white/70 hover:text-white hover:-translate-y-0.5 transition-all duration-300 relative group/link inline-block"
                >
                  {link.name}
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-300 group-hover/link:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="flex items-center gap-2 group/btn bg-white/10 hover:bg-accent hover:text-background border border-white/20 hover:border-accent transition-all duration-300 px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.15em] text-white shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(0,122,255,0.3)] backdrop-blur-md"
          >
            Connect
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </nav>
  );
}
