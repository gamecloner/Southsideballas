import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";
import TerritoryMap from "@/components/TerritoryMap";
import { Play, Twitter, Linkedin, Instagram } from "lucide-react";
import { JoinBallasForm } from "@/components/JoinBallasForm";
import { ContactUsForm } from "@/components/ContactUsForm";

const crewMembers = [
  'Raja jaat',
  'Zayn Diaz',
  'Aalesh Jaat',
  'Aron Rajput',
  'Liam Martinez',
  'Kraig Stanfill',
  'Ashish Kumar',
  'Vicky Mann',
  'Tushar Kathait',
  'Alec Martinez',
  'Drip Johnson',
  'Dan Sandhu',
  'Archit Adler',
  'Shiva Shelke'
];

const videos = [
  { id: 'hm7LjV6yjuo', title: 'SASP vs South Side Ballas' },
  { id: 'lqxD9BIP4HY', title: 'GTA V - Ballas Gang' },
  { id: 'uWPg_f37mew', title: 'Ballas 4 Life' },
  { id: 'AkWkPr2McJ0', title: 'Ballas Gang GTA V' },
  { id: 'txJstu20MQA', title: 'Grove Street vs Ballas' },
  { id: 'GU2Lgs5X0Bo', title: 'Ballas' },
];

const Crew = () => (
  <div id="crew" className="w-full bg-background text-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
      <h1 className="font-display text-5xl md:text-7xl font-bold text-silver mb-8">
        THE CREW
      </h1>
      <p className="text-lg text-white/70 mb-8">
        Meet the members of the South Side Ballas.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {crewMembers.map((name, index) => (
          <div key={index} className="relative group">
            <div className="aspect-square bg-gray-800 rounded-lg border border-gray-700 transition-all duration-300 group-hover:border-[rgb(138,43,226)] group-hover:shadow-[0_0_15px_5px_rgba(138,43,226,0.5)]"></div>
            <p className="text-center mt-2 font-medium">{name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div id="contact" className="w-full bg-background text-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
      <h1 className="font-display text-5xl md:text-7xl font-bold text-silver mb-8">
        CONTACT US
      </h1>
      <p className="text-lg text-white/70 mb-8">
        Fill out the form below to get in touch with the South Side Ballas.
      </p>
      <ContactUsForm />
    </div>
  </div>
);

const JoinTheBallas = () => (
  <div id="join" className="w-full bg-background text-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
      <h1 className="font-display text-5xl md:text-7xl font-bold text-silver mb-8">
        JOIN THE BALLAS
      </h1>
      <p className="text-lg text-white/70 mb-8">
        Think you have what it takes to be a Ballas? Fill out the form below.
      </p>
      <JoinBallasForm />
    </div>
  </div>
);

const Territory = () => (
  <div id="territory" className="w-full bg-background text-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
      <h1 className="font-display text-5xl md:text-7xl font-bold text-silver mb-8">
        TERRITORY
      </h1>
      <p className="text-lg text-white/70 mb-8">
        Discover the areas under the control of the South Side Ballas. Use your mouse to zoom and pan.
      </p>
      <TerritoryMap />
    </div>
  </div>
);

const Manifesto = () => (
  <div id="manifesto" className="w-full py-32 bg-background text-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <h1 className="font-display text-5xl md:text-7xl font-bold text-silver mb-4">
        MANIFESTO
      </h1>
      <p className="text-lg text-white/70 mb-12">
        Peep the action. See how we run the streets.
      </p>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll-left hover:[animation-play-state:paused]">
          {[...videos, ...videos].map((video, index) => (
            <a
              key={`${video.id}-${index}`}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-80 mx-4 group relative"
            >
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-purple-600/70 rounded-full p-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <p className="text-center mt-2 font-medium text-white/80 group-hover:text-white truncate">
                {video.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-background text-white/70 py-8">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="border-t border-white/20 pt-8 flex justify-between items-center">
        <p className="text-sm">
          COPYRIGHT © 2024 SOUTH SIDE BALLAS. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white"><Twitter size={20} /></a>
          <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-white"><Instagram size={20} /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <Hero />
      <Crew />
      <Territory />
      <Manifesto />
      <Contact />
      <JoinTheBallas />
      <Footer />
    </motion.main>
  );
}
