export default function Features() {
  const features = ["Free Secure Parking", "Climate Controlled", "Private En-suites", "Terrace Access"];
  
  return (
    <div className="border-y border-white/10 bg-richcourt-black py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-8">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <div className="h-1 w-1 bg-gold rounded-full" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-cream/80">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}