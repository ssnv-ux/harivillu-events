import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./Ornament";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[idx];

  return (
    <section className="py-20 md:py-32 bg-maroon text-maroon-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, #D4AF37 0%, transparent 40%), radial-gradient(circle at 80% 70%, #D4AF37 0%, transparent 40%)"
      }} />
      <div className="container mx-auto px-5 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="divider-ornament mx-auto max-w-xs my-4">
            <span className="text-gold">❦</span>
            <span className="font-serif italic text-sm tracking-widest uppercase whitespace-nowrap">Kind Words</span>
            <span className="text-gold">❦</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl">Love From Our Couples</h2>
        </div>

        <div className="max-w-3xl mx-auto relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-gold text-6xl font-serif leading-none mb-2">"</div>
              <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-white/95 max-w-2xl mx-auto">
                {t.quote}
              </p>
              <div className="mt-8 flex flex-col items-center gap-3">
                <img src={t.photo} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-gold" loading="lazy" />
                <div>
                  <div className="font-serif text-lg">{t.name}</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mt-1">{t.event}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "bg-gold w-10" : "bg-white/30 w-2"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
