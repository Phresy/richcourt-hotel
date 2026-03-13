"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppConcierge() {
  const phoneNumber = "233544158777"; // Your provided contact
  const message = encodeURIComponent("Hello Richcourt, I'm interested in inquiring about a stay.");

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
      className="fixed bottom-8 right-8 z-100"
    >
      <a 
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-rich-black border border-gold/30 rounded-full shadow-2xl transition-all duration-500 hover:border-gold hover:scale-110"
      >
        {/* Pulsing Aura */}
        <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping group-hover:bg-gold/40 transition-colors" />
        
        {/* Icon */}
        <MessageCircle className="relative z-10 text-gold" size={24} strokeWidth={1.5} />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 px-4 py-2 bg-rich-black border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          <span className="text-[10px] text-gold uppercase tracking-[0.3em]">Chat with Concierge</span>
        </div>
      </a>
    </motion.div>
  );
}