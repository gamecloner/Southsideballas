import { useState, useRef, useEffect } from "react";

export function useAudioPlayer(audioSrc: string) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = () => {
      if (audio) {
        audio.volume = 0.8;
        audio.play().catch(() => {
          console.log("Autoplay blocked by browser");
          setIsPlaying(false);
        });
      }
    };

    const handleCanPlay = () => {
      playAudio();
    };

    audio.addEventListener("canplay", handleCanPlay);
    
    // Try to play immediately if already loaded
    if (audio.readyState >= 2) {
      playAudio();
    }

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.volume = 0.8;
      audio.play().catch((error) => {
        console.log("Play error:", error);
      });
    }
  };

  return { audioRef, isPlaying, togglePlayPause };
}
