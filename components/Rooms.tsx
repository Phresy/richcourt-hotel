"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const roomData = [
  {
    id: 1,
    image: "/rc1.jpg",
    title: "The Signature Double",
    category: "Classic Comfort",
    description: "Featuring a Queen-size bed and private marble-appointed bathroom with premium linens.",
  },
  {
    id: 2,
    image: "/rc2.jpg",
    title: "Executive Suite",
    category: "Modern Living",
    description: "An elevated space with a dedicated workspace and high-end media technology.",
  },
  {
    id: 3,
    image: "/rc3.jpg",
    title: "The Terrace Room",
    category: "Outdoor Living",
    description: "Seamlessly blending indoor luxury with a private outdoor terrace for morning coffee.",
  },
  {
    id: 4,
    image: "/rc4.jpg",
    title: "Royal Guest House",
    category: "Group Sanctuary",
    description: "Spacious accommodations designed for families or distinguished groups.",
  },
  // Adding more from your rc5-rc9 range
  {
    id: 5,
    image: "/rc5.jpg",
    title: "The Garden Suite",
    category: "Serenity",
    description: "Quiet luxury facing the inner courtyard for ultimate privacy.",
  },
  {
    id: 6,
    image: "/rc6.jpg",
    title: "Deluxe Queen",
    category: "Refined",
    description: "Compact elegance without compromising on the Richcourt signature style.",
  }
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-32 bg-richcourt-black px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold uppercase tracking-luxury text-[10px] block mb-4"
          >
            Private Sanctuaries
          </motion.span>
          <h2 className="font-serif text-4xl md:text-6xl text-cream max-w-2xl leading-tight">
            Accommodations tailored to the <span className="italic">refined traveler.</span>
          </h2>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          {roomData.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index % 2 * 0.2 }}
              className={cn(
                "group relative",
                index % 2 !== 0 ? "md:mt-40" : "" // Creates the staggered editorial look
              )}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal mb-8">
                <img
                  src={room.image}
                  alt={room.title}
                  className="object-cover w-full h-full transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                {/* Thin internal border for the "Premium" frame look */}
                <div className="absolute inset-0 border border-gold/10 m-6 pointer-events-none group-hover:border-gold/30 transition-colors duration-500" />
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                  <div>
                    <p className="text-gold text-[10px] uppercase tracking-widest mb-1">{room.category}</p>
                    <h3 className="font-serif text-2xl text-cream">{room.title}</h3>
                  </div>
                  <span className="text-cream/30 font-serif italic">0{index + 1}</span>
                </div>
                <p className="text-cream/50 text-sm leading-relaxed max-w-sm pt-2">
                  {room.description}
                </p>
                <button className="text-gold text-[10px] uppercase tracking-widest pt-4 border-b border-transparent hover:border-gold transition-all duration-300">
                  Discover Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}