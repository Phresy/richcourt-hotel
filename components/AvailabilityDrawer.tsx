"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function AvailabilityDrawer({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void 
}) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleBookingRedirect = () => {
    const baseUrl = "https://www.booking.com/hotel/gh/rich-court-rooms.html";
    
    // Construct URL with parameters if dates are selected
    // Booking.com uses checkin=YYYY-MM-DD and checkout=YYYY-MM-DD
    const finalUrl = checkIn && checkOut 
      ? `${baseUrl}?checkin=${checkIn}&checkout=${checkOut}`
      : baseUrl;

    window.open(finalUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-rich-black/80 backdrop-blur-sm z-110"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-rich-black border-l border-white/10 z-120 p-10 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-gold uppercase tracking-[0.4em] text-[10px]">Instant Booking</span>
              <button onClick={onClose} className="text-cream hover:text-gold transition-colors">
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            <h2 className="text-4xl font-serif text-cream mb-4 italic">Check Availability</h2>
            <p className="text-cream/40 text-sm mb-12 font-light leading-relaxed">
              Select your preferred dates. You will be redirected to our secure Booking.com partner to finalize your reservation.
            </p>

            <div className="space-y-10">
              <div className="border-b border-white/10 pb-4">
                <label className="text-[9px] uppercase tracking-widest text-gold/60 block mb-2">Check-In</label>
                <div className="flex items-center gap-4">
                  <Calendar size={16} className="text-gold" />
                  <input 
                    type="date" 
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="bg-transparent text-cream outline-none font-sans scheme-dark w-full" 
                  />
                </div>
              </div>

              <div className="border-b border-white/10 pb-4">
                <label className="text-[9px] uppercase tracking-widest text-gold/60 block mb-2">Check-Out</label>
                <div className="flex items-center gap-4">
                  <Calendar size={16} className="text-gold" />
                  <input 
                    type="date" 
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="bg-transparent text-cream outline-none font-sans scheme-dark w-full" 
                  />
                </div>
              </div>

              <div className="pt-10">
                <button 
                  onClick={handleBookingRedirect}
                  className="group w-full bg-gold py-5 text-rich-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-cream transition-all flex items-center justify-center gap-3"
                >
                  View on Booking.com <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex items-center gap-3 mb-6 grayscale opacity-50">
                <span className="text-[8px] text-cream uppercase tracking-widest">Partnered with</span>
                <div className="h-px grow bg-white/10"></div>
                <span className="text-[10px] font-bold text-cream">Booking.com</span>
              </div>
              <p className="text-[9px] text-white/20 uppercase tracking-[0.2em] leading-relaxed">
                * All reservations are managed by Booking.com systems. <br />
                Direct-sync ensures no double bookings.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}