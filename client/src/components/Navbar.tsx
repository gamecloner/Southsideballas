import { useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Search, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { AudioPlayer } from "./AudioPlayer";
import React from 'react';

const navLinks = [
  { name: 'THE CREW', path: '#crew' },
  { name: 'TERRITORY', path: '#territory' },
  { name: 'MANIFESTO', path: '#manifesto' },
  { name: 'CONTACT US', path: '#contact' },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-6",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-16 h-16 shrink-0">
            <img src="/ballas-logo.jpg" alt="South Side Ballas Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-display text-2xl font-semibold tracking-widest text-silver uppercase">
            SOUTH SIDE BALLAS
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              href={link.path}
              key={link.name}
              onClick={(e) => handleScrollTo(e, link.path)}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 uppercase tracking-widest cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <AudioPlayer />
          <button className="text-white/70 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="md:hidden text-white/70 hover:text-white transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
