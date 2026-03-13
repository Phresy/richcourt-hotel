"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Plane } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-24 bg-richcourt-black px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 className="text-gold uppercase tracking-luxury text-xs mb-4">The Neighborhood</h2>
          <h3 className="font-serif text-4xl text-cream mb-8">Achimota's Premier Address</h3>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-gold mt-1" size={20} />
              <div>
                <p className="text-cream font-medium">Justice A. Brobbey Ave</p>
                <p className="text-cream/50 text-sm">Achimota, Greater Accra, Ghana</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Plane className="text-gold mt-1" size={20} />
              <div>
                <p className="text-cream font-medium">Kotoka International Airport</p>
                <p className="text-cream/50 text-sm">11km — Approximately 25 minutes</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-gold mt-1" size={20} />
              <div>
                <p className="text-cream font-medium">Concierge Direct</p>
                <p className="text-cream/50 text-sm">+233 54 415 8777</p>
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Map UI */}
        <div className="relative aspect-video lg:aspect-square bg-charcoal overflow-hidden group">
          <div className="absolute inset-0 bg-gold/10 mix-blend-overlay z-10 pointer-events-none" />
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.52845663184!2d-0.24563442402120485!3d5.629377794351658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf997769f98fc7%3A0x1b0bae3b107a5e04!2sRich%20Court!5e0!3m2!1sen!2sgh!4v1715432000000!5m2!1sen!2sgh"
            className="w-full h-full grayscale contrast-125 brightness-50 invert"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
          <div className="absolute inset-0 border border-gold/20 m-6 pointer-events-none z-20" />
        </div>

      </div>
    </section>
  );
}