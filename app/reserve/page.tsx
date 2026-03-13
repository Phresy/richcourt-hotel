"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Mail, Phone, MessageSquare, Loader2, ExternalLink } from "lucide-react";

export default function ReservationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const BOOKING_URL = "https://www.booking.com/hotel/gh/rich-court-rooms.html";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Professional delay before redirecting to the official partner
    setTimeout(() => {
      window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-rich-black pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        
        {/* Left Side: Brand Context */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden lg:block sticky top-40"
        >
          <span className="text-gold tracking-[0.5em] text-[10px] uppercase mb-6 block">
            Official Reservation
          </span>
          <h1 className="text-7xl font-serif text-cream leading-tight mb-8 italic">
            Secure Your <br /> Sanctuary.
          </h1>
          <p className="text-cream/50 font-sans text-sm leading-relaxed max-w-sm mb-12">
            Finalize your stay through our verified booking partner. This ensures real-time availability sync and instant confirmation for your upcoming visit to Achimota.
          </p>
          <div className="space-y-6 border-l border-gold/20 pl-8">
            <div>
              <p className="text-gold text-[10px] uppercase tracking-widest mb-1 font-sans">Assistance</p>
              <p className="text-cream text-lg font-serif tracking-wide">+233 54 415 8777</p>
            </div>
            <div>
              <p className="text-gold text-[10px] uppercase tracking-widest mb-1 font-sans">Power Guarantee</p>
              <p className="text-cream text-sm font-serif tracking-wide uppercase">Industrial Backup Enabled</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative bg-white/2 border border-white/5 p-8 md:p-12 backdrop-blur-sm overflow-hidden"
        >
          {/* Loading Overlay */}
          <AnimatePresence>
            {isSubmitting && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 bg-rich-black/95 backdrop-blur-md flex flex-col items-center justify-center text-center px-6"
              >
                <Loader2 className="text-gold animate-spin mb-4" size={32} strokeWidth={1} />
                <span className="text-gold text-[10px] uppercase tracking-[0.4em] mb-2">Verifying Connection</span>
                <p className="text-cream/40 text-[9px] uppercase tracking-widest">Redirecting to Secure Booking Partner</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Input */}
            <div className="group relative border-b border-white/10 pb-2 focus-within:border-gold transition-colors">
              <label className="text-[9px] uppercase tracking-widest text-gold/60">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent text-cream py-2 outline-none placeholder:text-white/5 font-serif text-xl"
              />
            </div>

            {/* Contact Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative border-b border-white/10 pb-2 focus-within:border-gold transition-colors">
                <label className="text-[9px] uppercase tracking-widest text-gold/60 flex items-center gap-2">
                  <Mail size={10} /> Email
                </label>
                <input 
                  required
                  type="email" 
                  placeholder="Contact Email" 
                  className="w-full bg-transparent text-cream py-2 outline-none placeholder:text-white/5 font-serif text-lg"
                />
              </div>
              <div className="group relative border-b border-white/10 pb-2 focus-within:border-gold transition-colors">
                <label className="text-[9px] uppercase tracking-widest text-gold/60 flex items-center gap-2">
                  <Phone size={10} /> Phone
                </label>
                <input 
                  required
                  type="tel" 
                  placeholder="Contact Number" 
                  className="w-full bg-transparent text-cream py-2 outline-none placeholder:text-white/5 font-serif text-lg"
                />
              </div>
            </div>

            {/* Stay Details */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative border-b border-white/10 pb-2 focus-within:border-gold transition-colors">
                <label className="text-[9px] uppercase tracking-widest text-gold/60 flex items-center gap-2">
                  <Calendar size={10} /> Check In
                </label>
                <input 
                  required
                  type="date" 
                  className="w-full bg-transparent text-cream py-2 outline-none scheme-dark font-sans text-xs uppercase tracking-widest"
                />
              </div>
              <div className="group relative border-b border-white/10 pb-2 focus-within:border-gold transition-colors">
                <label className="text-[9px] uppercase tracking-widest text-gold/60 flex items-center gap-2">
                  <Users size={10} /> Total Guests
                </label>
                <select className="w-full bg-transparent text-cream py-2 outline-none font-sans text-xs uppercase tracking-widest appearance-none">
                  <option className="bg-rich-black">1 Adult</option>
                  <option className="bg-rich-black">2 Adults</option>
                  <option className="bg-rich-black">3+ Guests</option>
                </select>
              </div>
            </div>

            {/* Verification Note */}
            <div className="p-4 bg-white/5 border border-white/5">
              <p className="text-[10px] text-cream/30 uppercase tracking-widest leading-relaxed">
                Reservations are processed via our verified portal. Direct-sync ensures zero booking conflicts and immediate confirmation.
              </p>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="group w-full bg-gold py-6 text-rich-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-cream transition-all duration-500 shadow-2xl shadow-gold/10 disabled:opacity-50"
            >
              {isSubmitting ? "Connecting..." : "Confirm on Booking.com"}
              {!isSubmitting && <ExternalLink size={12} className="inline-block ml-3 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}