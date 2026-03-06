import { motion } from "framer-motion";
import { Play, Info } from "lucide-react";
import React from 'react';
// @ts-ignore - Vite asset import
import heroImage from "@assets/balu.jpg";

export function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black film-grain">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImage}
          alt="Background"
          className="object-cover w-full h-full opacity-70 scale-105"
        />
        
        {/* Overlays for depth and text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
        <div className="absolute inset-0 vignette-heavy" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-32 md:pb-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-4 opacity-80">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white border border-white/30 px-3 py-1 rounded-sm">
              india legacy rp
            </span>
            <span className="text-sm font-medium tracking-wider text-white/70">
              2026
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-silver">
            SOUTH SIDE<br />BALLAS
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl font-light">
            Founded on strength and reinforced by loyalty, South Side Ballas stands as one of the most organized forces in Los Santos. Territory is not claimed by noise it is secured through discipline, respect, and execution.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#crew" onClick={(e) => handleScrollTo(e, '#crew')} className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-purple-400 transition-all duration-300 rounded-sm group font-medium uppercase tracking-wider text-sm cursor-pointer">
              <Play className="w-5 h-5 fill-current transition-transform group-hover:scale-110" />
              MEET THE CREW
            </a>
            
            <a href="#manifesto" onClick={(e) => handleScrollTo(e, '#manifesto')} className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white hover:bg-purple-400 hover:border-purple-400 transition-all duration-300 rounded-sm font-medium uppercase tracking-wider text-sm cursor-pointer">
              <Info className="w-5 h-5" />
              LEARN THE CODE
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}