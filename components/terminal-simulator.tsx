"use client"

import { useState, useEffect, useRef } from "react"
import { X, Minus, Square, Terminal as TerminalIcon, RefreshCw, Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface TerminalSimulatorProps {
    isOpen: boolean
    onClose: () => void
    command: string
    output: string
    title?: string
}

export function TerminalSimulator({ isOpen, onClose, command, output, title = "user@linux:~" }: TerminalSimulatorProps) {
    const [input, setInput] = useState("")
    const [history, setHistory] = useState<string[]>([])
    const [showOutput, setShowOutput] = useState(false)
    const [isTyping, setIsTyping] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    // Reset state when opening different command
    useEffect(() => {
        if (isOpen) {
            setInput("")
            setShowOutput(false)
            setHistory([])
            setIsTyping(false)
            // Focus input
            setTimeout(() => inputRef.current?.focus(), 100)
        }
    }, [isOpen, command])

    // Keep focus on input
    useEffect(() => {
        const handleClick = () => inputRef.current?.focus()
        if (isOpen) {
            document.addEventListener("click", handleClick)
        }
        return () => document.removeEventListener("click", handleClick)
    }, [isOpen])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (input.trim() === command || (command.startsWith(input.trim()) && input.trim().length > 0)) { // Simple flexible check
            // Correct command
            setHistory(prev => [...prev, `$ ${input}`])
            if (input.trim() === command) {
                setShowOutput(true)
            } else {
                // If they typed something else but hit enter, maybe show error? 
                // For now let's enforce exact match or just run what we have if its close
                // Actually, let's just run the expected output if they type the exact command
                if (input.trim() !== command) {
                    setHistory(prev => [...prev, `bash: ${input}: command not found`])
                }
            }
            setInput("")
        } else {
            setHistory(prev => [...prev, `$ ${input}`, `bash: ${input}: command not found`])
            setInput("")
        }
    }

    // Auto-type feature
    const autoType = () => {
        setIsTyping(true)
        setInput("")
        let i = 0
        const timer = setInterval(() => {
            if (i < command.length) {
                setInput(prev => prev + command.charAt(i))
                i++
            } else {
                clearInterval(timer)
                setIsTyping(false)
                // Auto submit after minimal delay
                setTimeout(() => {
                    setHistory(prev => [...prev, `$ ${command}`])
                    setShowOutput(true)
                    setInput("")
                }, 500)
            }
        }, 50)
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="w-full max-w-3xl bg-[#0d120d] border border-[#333] rounded-lg shadow-2xl overflow-hidden font-mono text-sm">
                {/* Terminal Header */}
                <div className="bg-[#1a1f1a] px-4 py-2 flex items-center justify-between border-b border-[#333]">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="ml-3 text-[#9ca3af] text-xs flex items-center gap-1">
                            <TerminalIcon className="w-3 h-3" />
                            {title}
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={autoType}
                            disabled={isTyping || showOutput}
                            className="text-[#22c55e] hover:text-[#4ade80] text-xs flex items-center gap-1 transition-colors disabled:opacity-50"
                        >
                            <Play className="w-3 h-3" />
                            Otomatik Yaz
                        </button>
                        <button onClick={onClose} className="text-[#6b7280] hover:text-white transition-colors">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Terminal Body */}
                <div className="p-4 h-[400px] overflow-y-auto bg-black/95 text-[#e5e5e5] cursor-text" onClick={() => inputRef.current?.focus()}>
                    <div className="space-y-1">
                        <div className="text-[#6b7280]">Welcome to Linux Terminal Simulator v1.0</div>
                        <div className="text-[#6b7280] mb-4">Type <span className="text-[#22c55e]">{command}</span> to see it in action.</div>

                        {history.map((line, i) => (
                            <div key={i} className="whitespace-pre-wrap break-all">
                                {line.startsWith("$") ? (
                                    <span>
                                        <span className="text-[#22c55e]">user@linux:~$</span> {line.substring(2)}
                                    </span>
                                ) : (
                                    <span className="text-[#b0b0b0]">{line}</span>
                                )}
                            </div>
                        ))}

                        {showOutput && (
                            <div className="whitespace-pre-wrap break-all text-[#b0b0b0] animate-in fade-in duration-300">
                                {output}
                            </div>
                        )}

                        {!showOutput && (
                            <form onSubmit={handleSubmit} className="flex">
                                <span className="text-[#22c55e] mr-2">user@linux:~$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="bg-transparent border-none outline-none flex-1 text-[#e5e5e5] caret-[#22c55e]"
                                    autoFocus
                                    spellCheck={false}
                                    autoComplete="off"
                                />
                            </form>
                        )}

                        {showOutput && (
                            <div className="flex mt-2">
                                <span className="text-[#22c55e] mr-2">user@linux:~$</span>
                                <span className="w-2 h-4 bg-[#22c55e] animate-pulse" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
