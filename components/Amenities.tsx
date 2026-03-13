"use client";

import { motion } from "framer-motion";
import { 
  Wind, 
  Car, 
  ShieldCheck, 
  Waves, 
  Coffee, 
  Map as MapIcon, 
  UtensilsCrossed, 
  Clock 
} from "lucide-react";

const amenities = [
  {
    icon: <Wind size={28} strokeWidth={1} />,
    title: "Climate Control",
    description: "Individually regulated air-conditioning for your personal comfort."
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={1} />,
    title: "Private En-suites",
    description: "Secluded bathrooms featuring premium stone finishes and curated linens."
  },
  {
    icon: <Car size={28} strokeWidth={1} />,
    title: "Secure Parking",
    description: "Complimentary on-site parking within our gated perimeter."
  },
  {
    icon: <Waves size={28} strokeWidth={1} />,
    title: "Private Terrace",
    description: "Select suites offer outdoor spaces for morning reflection."
  },
  {
    icon: <Clock size={28} strokeWidth={1} />,
    title: "24/7 Concierge",
    description: "Professional assistance available at any hour of the day or night."
  },
  {
    icon: <MapIcon size={28} strokeWidth={1} />,
    title: "Urban Proximity",
    description: "Situated 11km from Kotoka International Airport in the heart of Achimota."
  }
];

export default function Amenities() {
  return (
    <section className="py-32 bg-rich-black px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold uppercase tracking-luxury text-[10px] block mb-6"
            >
              The Standard of Living
            </motion.span>
            <h2 className="font-serif text-4xl md:text-6xl text-cream leading-tight">
              Curated Essentials <br />
              <span className="italic text-gold">For the Discerning.</span>
            </h2>
          </div>
          <p className="text-cream/40 text-sm max-w-xs font-light leading-relaxed">
            Every detail at Richcourt is meticulously selected to ensure a seamless blend of functionality and high-end aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500 origin-left opacity-80">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-cream mb-3 tracking-wide">{item.title}</h3>
              <div className="h-px w-8 bg-gold/30 mb-4 group-hover:w-16 transition-all duration-500" />
              <p className="text-cream/50 text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}