import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Share2, Plus, ThumbsUp } from "lucide-react";
import { useVideo } from "@/hooks/use-videos";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Using the same hero video for demonstration purposes
// @ts-ignore
import heroVideo from "@assets/Hailuo_Video_A_cinematic,_noir-style_night__479135820249473030_1772123284850.mp4";

export default function VideoDetail() {
  const params = useParams();
  const id = params.id ? parseInt(params.id) : 0;
  
  // Try to fetch real data
  const { data: video, isLoading } = useVideo(id);

  // Fallback data if no backend
  const displayData = video || {
    title: "Cinematic Showcase",
    description: "In the depths of the neon-soaked city, a silent observer watches the world unfold. Every shadow tells a story, every flickering light holds a secret. This visual journey explores the contrast between light and dark in an uncompromising noir aesthetic.",
    director: "Replit Studios",
    year: "2024",
    duration: "2h 14m"
  };

  return (
    <div className="min-h-screen bg-background film-grain">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors uppercase tracking-widest text-xs font-medium mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Collection
          </Link>

          {/* Player Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-video bg-black rounded-sm border border-white/10 overflow-hidden relative shadow-2xl shadow-black/50 group"
          >
            {isLoading && !video ? (
              <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              </div>
            ) : (
              <>
                <video
                  autoPlay
                  controls
                  className="w-full h-full object-cover"
                >
                  <source src={heroVideo} type="video/mp4" />
                </video>
              </>
            )}
          </motion.div>

          {/* Details Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 flex flex-col lg:flex-row gap-12 items-start"
          >
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                <span>{displayData.year || '2024'}</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span>{displayData.duration || 'Feature Length'}</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span>4K HDR</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl text-silver mb-6">
                {displayData.title}
              </h1>
              
              <p className="text-white/70 text-lg font-light leading-relaxed mb-8 max-w-3xl">
                {displayData.description}
              </p>

              <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-white/40 mb-1">Director</span>
                  <span className="text-white font-medium">{displayData.director || 'Unknown Author'}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-white/40 mb-1">Genre</span>
                  <span className="text-white font-medium">Neo-Noir, Thriller</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-48 shrink-0">
              <button className="flex-1 lg:flex-none flex items-center justify-center gap-3 px-6 py-4 bg-white text-black hover:bg-white/90 transition-colors rounded-sm font-medium uppercase tracking-wider text-xs">
                <Play className="w-4 h-4 fill-current" />
                Play
              </button>
              
              <button className="flex-1 lg:flex-none flex items-center justify-center gap-3 px-6 py-4 bg-secondary border border-white/10 text-white hover:bg-white/5 transition-colors rounded-sm font-medium uppercase tracking-wider text-xs">
                <Plus className="w-4 h-4" />
                List
              </button>
              
              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center p-4 bg-secondary border border-white/10 text-white hover:bg-white/5 transition-colors rounded-sm">
                  <ThumbsUp className="w-4 h-4" />
                </button>
                <button className="flex-1 flex items-center justify-center p-4 bg-secondary border border-white/10 text-white hover:bg-white/5 transition-colors rounded-sm">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
