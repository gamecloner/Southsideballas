import { Film } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Film className="w-6 h-6 text-white/50" />
            <span className="font-display text-2xl font-semibold tracking-widest text-white/80 uppercase">
              NOIR
            </span>
          </div>
          <p className="text-white/40 text-sm max-w-xs font-light">
            Curating the finest cinematic experiences in pure, unadulterated darkness.
          </p>
        </div>
        
        <div className="flex gap-12 text-sm uppercase tracking-widest text-white/50 font-medium">
          <div className="flex flex-col gap-4">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Studios</a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center border-t border-white/5 pt-8 text-xs text-white/30 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Noir Cinematic. All rights reserved.
      </div>
    </footer>
  );
}
