"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Instagram } from "lucide-react";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-rich-black flex items-center justify-center px-6 pt-20">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-10"
        >
          <div className="p-4 rounded-full border border-gold/20 bg-gold/5">
            <CheckCircle2 size={40} className="text-gold" strokeWidth={1} />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <span className="text-gold uppercase tracking-[0.5em] text-[10px] mb-6 block">
            Inquiry Received
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-cream mb-8 italic">
            Awaiting Your <br /> Arrival.
          </h1>
          <p className="text-cream/50 text-sm md:text-base leading-relaxed mb-12 max-w-md mx-auto font-light">
            Your reservation request has been transmitted to our private concierge. 
            Expect a personal verification via phone or email within the next 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link 
            href="/" 
            className="group flex items-center gap-3 text-gold text-[10px] uppercase tracking-[0.3em] border border-gold/30 px-10 py-4 hover:bg-gold hover:text-rich-black transition-all duration-500"
          >
            Return to Residence
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a 
            href="https://instagram.com" 
            target="_blank"
            className="flex items-center gap-3 text-cream/40 text-[10px] uppercase tracking-[0.3em] hover:text-cream transition-colors duration-300"
          >
            <Instagram size={14} />
            Follow our Story
          </a>
        </motion.div>

        {/* Reference ID footer */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1 }}
          className="mt-24 text-[9px] text-cream uppercase tracking-widest"
        >
          Ref: RC-{Math.floor(1000 + Math.random() * 9000)}
        </motion.p>
      </div>
    </div>
  );
}