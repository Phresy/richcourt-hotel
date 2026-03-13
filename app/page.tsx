"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Amenities from "@/components/Amenities";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import AvailabilityDrawer from "@/components/AvailabilityDrawer"; // Import the drawer

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <main className="bg-rich-black">
      {/* Note: If your Hero component has a 'Check Availability' button inside it, 
          you should pass the setIsDrawerOpen function to it as a prop.
      */}
      <Hero onCheckClick={() => setIsDrawerOpen(true)} />
      
      {/* Brand Statement Section */}
      <section className="py-40 flex justify-center text-center px-6">
        <div className="max-w-3xl">
          <p className="font-serif text-2xl md:text-4xl text-cream/90 leading-relaxed italic">
            "At Richcourt, we believe luxury is found in the quiet moments of privacy and the effortless nature of true hospitality."
          </p>
        </div>
      </section>

      <Amenities />
      <Reviews />
      <Location />
      
      {/* Reserve CTA Section */}
      <section className="py-32 bg-gold/5 text-center relative overflow-hidden">
        {/* Subtle background glow to make it feel expensive */}
        <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full -z-10" />
        
        <h2 className="font-serif text-4xl md:text-6xl text-gold mb-8 italic">Secure Your Sanctuary</h2>
        <p className="text-cream/60 uppercase tracking-[0.3em] text-[10px] mb-12">
          Concierge: +233 54 415 8777
        </p>
        
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="bg-gold text-rich-black px-16 py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-cream transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-gold/10"
        >
          Check Availability
        </button>
      </section>

      {/* The Drawer is placed here so it can be triggered from this page */}
      <AvailabilityDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </main>
  );
}