"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-[#050505] overflow-hidden">
      {/* 1. Deep Layer: Subtle Animated Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gold/5 blur-[140px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      </div>

      {/* 2. Middle Layer: The Vignette (This kills the "raw" look) */}
      <div className="absolute inset-0 z-10 bg-radial-[at_50%_50%] from-transparent via-black/20 to-black/80 pointer-events-none" />

      {/* 3. Top Layer: Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.6em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-10"
        >
          <span className="text-gold uppercase text-[9px] md:text-[11px] font-sans font-medium">
            Justice A. Brobbey Ave • Achimota
          </span>
        </motion.div>
        
        <div className="relative mb-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-7xl md:text-[11rem] font-serif text-cream leading-[0.8] drop-shadow-2xl"
          >
            Richcourt
          </motion.h1>
          
          {/* Subtle reflection/shadow below main text */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full opacity-10 blur-sm pointer-events-none">
             <h1 className="text-7xl md:text-[11rem] font-serif text-gold leading-[0.8] scale-y-[-0.3]">
               Richcourt
             </h1>
          </div>
        </div>

        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="text-4xl md:text-7xl font-serif text-gold italic font-light tracking-tight"
          >
            Suites & Rooms
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="flex flex-col items-center"
        >
          <p className="text-cream/40 text-xs md:text-sm max-w-sm leading-relaxed mb-12 font-sans font-light tracking-[0.1em] uppercase">
            A sanctuary of privacy <br/> 
            & refined hospitality.
          </p>
          
          <button className="group relative border border-gold/40 px-16 py-5 text-gold uppercase tracking-[0.4em] text-[10px] transition-all duration-700 hover:border-gold">
            <div className="absolute inset-0 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              Discover Excellence
            </span>
          </button>
        </motion.div>
      </div>

      {/* Decorative Side Elements */}
      <div className="absolute left-10 bottom-10 hidden lg:flex items-center gap-6 z-20">
        <div className="h-px w-20 bg-linear-to-r from-gold/0 via-gold/50 to-gold/0" />
        <p className="text-[8px] uppercase tracking-[0.5em] text-gold/40 italic">
          Est. 2024
        </p>
      </div>

      {/* Vertical Line Asset */}
      <div className="absolute top-0 right-20 w-px h-40 bg-linear-to-b from-gold/40 via-gold/10 to-transparent z-10" />
    </section>
  );
}