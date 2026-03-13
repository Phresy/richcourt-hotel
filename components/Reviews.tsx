"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Elizabeth Kuffour",
    date: "1 year ago",
    rating: 5,
    text: "The reception is very good as well as their services. I recommend staying there. The price is also affordable and the room was tidy.",
    highlight: "Quiet · Child-friendly · Great value",
  },
  {
    name: "Benard Tetteh",
    date: "1 month ago",
    rating: 5,
    text: "A nice experience with a great view. Perfect for solo travelers looking for a quiet sanctuary.",
    highlight: "Great view · Solo Traveler",
  },
  {
    name: "Wosirio Awundi",
    date: "3 years ago",
    rating: 5,
    text: "Excellent rooms and service. The location provides the perfect balance for city access without the hassle.",
    highlight: "Highly Recommended",
  },
  {
    name: "Reinhard Opoku Nti",
    date: "1 year ago",
    rating: 5,
    text: "Distinguished service and a quiet atmosphere. Ideal for business stays in Achimota.",
    highlight: "Business · Solo",
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-rich-black relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold uppercase tracking-[0.5em] text-[10px] mb-4 block"
            >
              Guest Experiences
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-serif text-cream italic">
              Voices of <br /> Richcourt
            </h2>
          </div>
          <div className="flex items-center gap-4 text-gold">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-[10px] uppercase tracking-widest text-cream/50">
              4.8 Average on Google
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/2 border border-white/5 p-8 flex flex-col justify-between hover:border-gold/20 transition-colors group"
            >
              <div>
                <Quote className="text-gold/20 mb-6 group-hover:text-gold/40 transition-colors" size={32} />
                <p className="text-cream/70 text-sm leading-relaxed mb-6 font-light italic">
                  "{review.text}"
                </p>
              </div>
              
              <div>
                <div className="border-t border-white/5 pt-6">
                  <p className="text-cream text-xs uppercase tracking-widest mb-1">{review.name}</p>
                  <p className="text-gold/50 text-[9px] uppercase tracking-luxury">{review.highlight}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action for more reviews */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <a 
            href="https://www.google.com/search?q=Richcourt+Achimota+reviews" 
            target="_blank"
            className="text-[10px] uppercase tracking-[0.4em] text-cream/30 hover:text-gold transition-colors"
          >
            Read more verified testimonials on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}