"use client"

import { useState, useRef, useEffect } from "react"
import { Music, Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Minimize2, Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"

// Copyright free Lofi beats placeholder
const PLAYLIST = [
    {
        title: "Coding Night",
        artist: "Lofi Study",
        src: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
    },
    {
        title: "Linux Kernel Compilation",
        artist: "Synthwave Boy",
        src: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3" // Placeholder, duplicate for demo
    }
]

export function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [isMinimized, setIsMinimized] = useState(true) // Default minimized to not annoy users
    const [volume, setVolume] = useState(0.5)
    const [isMuted, setIsMuted] = useState(false)

    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume
        }
    }, [volume, isMuted])

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const playNext = () => {
        setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length)
        setIsPlaying(true) // Auto play next
    }

    const playPrev = () => {
        setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length)
        setIsPlaying(true)
    }

    // Handle auto-play when track changes
    useEffect(() => {
        if (audioRef.current && isPlaying) {
            // Small timeout to allow src update
            setTimeout(() => audioRef.current?.play(), 100)
        }
    }, [currentTrackIndex])

    return (
        <div className={cn(
            "fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",
            isMinimized ? "w-12 h-12" : "w-80"
        )}>
            {/* Audio Element (Hidden) */}
            <audio
                ref={audioRef}
                src={PLAYLIST[currentTrackIndex].src}
                onEnded={playNext}
            />

            {isMinimized ? (
                // Minimized Button
                <button
                    onClick={() => setIsMinimized(false)}
                    className="w-12 h-12 bg-[#0d120d] border border-[#22c55e]/30 rounded-full flex items-center justify-center text-[#22c55e] hover:bg-[#1a2e1a] shadow-lg shadow-[#22c55e]/20 transition-all animate-pulse-slow"
                    title="Müzik Çalar"
                >
                    <Music className={cn("w-6 h-6", isPlaying && "animate-spin-slow")} />
                </button>
            ) : (
                // Expanded Player
                <div className="bg-[#0d120d] border border-[#22c55e]/30 rounded-xl p-4 shadow-2xl backdrop-blur-md">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 border-b border-[#22c55e]/10 pb-2">
                        <div className="flex items-center gap-2 text-[#22c55e]">
                            <Music className="w-4 h-4" />
                            <span className="text-xs font-mono font-bold tracking-wider">MUSIC_PLAYER_V1</span>
                        </div>
                        <button
                            onClick={() => setIsMinimized(true)}
                            className="text-[#6b7280] hover:text-white transition-colors"
                        >
                            <Minimize2 className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Track Info */}
                    <div className="mb-4 text-center">
                        <h3 className="text-white font-bold text-sm truncate">{PLAYLIST[currentTrackIndex].title}</h3>
                        <p className="text-[#6b7280] text-xs truncate">{PLAYLIST[currentTrackIndex].artist}</p>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <button onClick={playPrev} className="text-[#9ca3af] hover:text-[#22c55e] transition-colors">
                            <SkipBack className="w-5 h-5" />
                        </button>

                        <button
                            onClick={togglePlay}
                            className="w-10 h-10 bg-[#22c55e] rounded-full flex items-center justify-center text-black hover:bg-[#4ade80] transition-colors shadow-lg shadow-[#22c55e]/20"
                        >
                            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
                        </button>

                        <button onClick={playNext} className="text-[#9ca3af] hover:text-[#22c55e] transition-colors">
                            <SkipForward className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Volume */}
                    <div className="flex items-center gap-2 px-2">
                        <button onClick={() => setIsMuted(!isMuted)} className="text-[#6b7280] hover:text-white">
                            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={isMuted ? 0 : volume}
                            onChange={(e) => setVolume(parseFloat(e.target.value))}
                            className="w-full h-1 bg-[#1a2e1a] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-[#22c55e] [&::-webkit-slider-thumb]:rounded-full"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
