import { motion } from "framer-motion";
import { Link } from "wouter";
import { Play } from "lucide-react";
import { useVideos } from "@/hooks/use-videos";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function VideoGrid() {
  const { data: videos, isLoading } = useVideos();

  if (isLoading) {
    return (
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="h-8 w-48 bg-white/5 rounded-sm animate-pulse mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-video bg-white/5 rounded-sm animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  // Fallback visual data if API is empty for the showcase
  const displayVideos = videos?.length ? videos : [
    {
      id: 1,
      title: "The Detective's Shadow",
      description: "A missing person case turns into a labyrinth of deceit.",
      url: "#",
      // cinematic noir alleyway
      thumbnail: "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=800&q=80"
    },
    {
      id: 2,
      title: "Neon Echoes",
      description: "Lost memories resurface in the rain-soaked streets.",
      url: "#",
      // neon night city
      thumbnail: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&q=80"
    },
    {
      id: 3,
      title: "Silent Motive",
      description: "Words unsaid speak louder than the evidence found.",
      url: "#",
      // moody window blind shadows
      thumbnail: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800&q=80"
    },
    {
      id: 4,
      title: "Midnight Train",
      description: "The last departure holds passengers with dark secrets.",
      url: "#",
      // dark train station
      thumbnail: "https://images.unsplash.com/photo-1515626244675-0e363994d271?w=800&q=80"
    },
    {
      id: 5,
      title: "Velvet Lounge",
      description: "Jazz, smoke, and a betrayal that changes everything.",
      url: "#",
      // dark jazz club feel
      thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
    },
    {
      id: 6,
      title: "The Final Act",
      description: "When the curtain falls, the real drama begins.",
      url: "#",
      // theater stage dark
      thumbnail: "https://images.unsplash.com/photo-1507676184212-d0c30a51fb43?w=800&q=80"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-20 bg-background">
      <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-silver">Curated Selection</h2>
          <p className="text-white/50 mt-2 font-light">Explore our acclaimed cinematic collection</p>
        </div>
        <button className="hidden sm:block text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors pb-1">
          View All
        </button>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
      >
        {displayVideos.map((video: any) => (
          <motion.div key={video.id} variants={item} className="group cursor-pointer">
            <Link href={`/video/${video.id}`} className="block">
              <div className="relative aspect-video overflow-hidden rounded-sm bg-secondary mb-4">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={video.thumbnail || "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80"} 
                  alt={video.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[0.3] group-hover:grayscale-0"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/20 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
              
              <h3 className="font-display text-xl text-white group-hover:text-silver transition-colors mb-2">
                {video.title}
              </h3>
              <p className="text-white/50 text-sm line-clamp-2 font-light leading-relaxed">
                {video.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
