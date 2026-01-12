"use client"

import { useState } from "react"
import { X, Copy, Check, Twitter, Facebook, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  url: string
}

export function ShareModal({ isOpen, onClose, title, url }: ShareModalProps) {
  const [copied, setCopied] = useState(false)
  const fullUrl = typeof window !== "undefined" ? `${window.location.origin}${url}` : url

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Kopyalama hatası:", err)
    }
  }

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
      color: "hover:bg-[#1da1f2]",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
      color: "hover:bg-[#4267b2]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
      color: "hover:bg-[#0077b5]",
    },
    {
      name: "E-posta",
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(fullUrl)}`,
      color: "hover:bg-[#22c55e]",
    },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal - Updated border and background to Linux theme */}
      <div className="relative bg-[#0d120d] border border-[#1a2e1a] rounded-lg w-full max-w-md p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-lg font-semibold">Paylaş</h3>
          <button onClick={onClose} className="text-[#6b7280] hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Share Buttons */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex flex-col items-center gap-2 p-3 rounded-lg bg-[#0a0f0a] transition-colors",
                link.color,
              )}
            >
              <link.icon className="w-5 h-5 text-white" />
              <span className="text-[#6b7280] text-xs">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Copy Link - Updated colors */}
        <div className="flex items-center gap-2 p-3 bg-[#0a0f0a] rounded-lg border border-[#1a2e1a]">
          <input
            type="text"
            value={fullUrl}
            readOnly
            className="flex-1 bg-transparent text-[#6b7280] text-sm outline-none"
          />
          <button
            onClick={handleCopy}
            className={cn(
              "p-2 rounded transition-colors",
              copied ? "bg-[#22c55e] text-black" : "bg-[#1a2e1a] text-white hover:bg-[#22c55e]/20",
            )}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  )
}
