"use client";

import { motion } from "framer-motion";
import { Wind, ShieldCheck, Car, Waves, Clock, MapPin } from "lucide-react";

const roomImages = ["rc1.jpg", "rc2.jpg", "rc3.jpg", "rc4.jpg", "rc5.jpg", "rc6.jpg"];

export default function AccommodationsPage() {
  return (
    <div className="pt-32 bg-rich-black min-h-screen">
      {/* Header Section */}
      <section className="px-6 py-20 text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold tracking-[0.5em] text-[10px] uppercase mb-4 block">
          Curated Spaces
        </motion.span>
        <h1 className="text-5xl md:text-8xl font-serif text-cream mb-12 italic">The Collection</h1>
      </section>

      {/* Amenities Icons Row */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-6 md:px-20 mb-32">
        {[
          { icon: <Wind />, label: "A/C" },
          { icon: <ShieldCheck />, label: "Private En-suite" },
          { icon: <Car />, label: "Secure Parking" },
          { icon: <Waves />, label: "Terrace" },
          { icon: <Clock />, label: "24/7 Service" },
          { icon: <MapPin />, label: "Central Location" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-gold/60 border border-white/5 py-8 group hover:border-gold/20 transition-all">
            <div className="mb-4 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <span className="text-[10px] uppercase tracking-widest">{item.label}</span>
          </div>
        ))}
      </section>

      {/* Room Gallery Grid */}
      <section className="px-6 md:px-12 pb-32">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {roomImages.map((img, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden"
            >
              <img src={`/${img}`} alt={`Room ${i+1}`} className="w-full grayscale hover:grayscale-0 transition-all duration-1000 ease-out" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-gold text-[10px] uppercase tracking-widest border border-gold/50 px-6 py-2">View Space</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}