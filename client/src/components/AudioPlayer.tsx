import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(err => console.log("Play error:", err));
      setIsPlaying(true);
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  return (
    <>
      <audio
        ref={audioRef}
        src="/background-audio.mp3"
        loop
        autoPlay
        onPlay={handlePlay}
        onPause={handlePause}
      />
      <button
        onClick={handleToggle}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 uppercase tracking-widest hover:bg-white/5 rounded-sm"
      >
        {isPlaying ? (
          <>
            <Pause className="w-4 h-4" />
            <span>Pause</span>
          </>
        ) : (
          <>
            <Play className="w-4 h-4" />
            <span>Play</span>
          </>
        )}
      </button>
    </>
  );
}
