"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-3xl text-cream mb-6 tracking-widest uppercase">
              Richcourt
            </h2>
            <p className="text-cream/40 text-sm leading-relaxed font-light max-w-xs">
              Distinguished serviced accommodations in the heart of Achimota. 
              A sanctuary defined by privacy, elegance, and bespoke hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold uppercase tracking-luxury text-[10px] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["The Residence", "Amenities", "Location", "Reservations"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-cream/60 hover:text-gold text-sm transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-gold uppercase tracking-luxury text-[10px] mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-cream/60">
                <MapPin size={18} className="text-gold shrink-0" strokeWidth={1} />
                <span className="text-sm leading-snug">
                  Justice A. Brobbey Ave,<br /> Achimota, Accra, Ghana
                </span>
              </li>
              <li className="flex items-center gap-4 text-cream/60">
                <Phone size={18} className="text-gold shrink-0" strokeWidth={1} />
                <span className="text-sm">+233 54 415 8777</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Social */}
          <div>
            <h4 className="text-gold uppercase tracking-luxury text-[10px] mb-8">Social Connect</h4>
            <div className="flex gap-6 mb-8">
              <a href="#" className="text-cream/40 hover:text-gold transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream/40 hover:text-gold transition-colors">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
            </div>
            <p className="text-cream/30 text-[10px] uppercase tracking-widest leading-relaxed">
              Achimota's Premier <br /> Serviced Address
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-cream/20 text-[10px] uppercase tracking-[0.3em]">
            © {currentYear} Richcourt Suites. All Rights Reserved.
          </div>
          <div className="flex gap-8 text-cream/20 text-[10px] uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}