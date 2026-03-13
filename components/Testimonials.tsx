export default function Testimonials() {
  return (
    <div className="bg-richcourt-black py-20 text-center border-b border-white/5">
      <p className="text-gold uppercase tracking-widest text-[10px] mb-4">Guest Sentiment</p>
      <div className="flex justify-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`h-1.5 w-1.5 rounded-full ${i < 4 ? 'bg-gold' : 'bg-gold/30'}`} />
        ))}
      </div>
      <blockquote className="font-serif text-2xl text-cream/90 italic max-w-2xl mx-auto px-6">
        "A distinguished serviced accommodation experience in the heart of Achimota. Refined, secure, and professional."
      </blockquote>
      <p className="mt-6 text-cream/40 text-[10px] uppercase tracking-luxury">
        Based on 117+ Verified Professional Reviews
      </p>
    </div>
  );
}