import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./Ornament";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/site";

type Filter = "All" | GalleryCategory;

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter)),
    [filter]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? null : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, filtered.length]);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-5">
        <SectionHeader
          eyebrow="Portfolio"
          title="A Glimpse of Our Work"
          subtitle="Real celebrations, real emotions. Browse moments we've had the honour to design."
        />

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {(["All", ...galleryCategories] as Filter[]).map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 md:px-5 py-2 text-xs md:text-sm tracking-wider uppercase border rounded-sm transition-all ${
                filter === c
                  ? "bg-maroon text-maroon-foreground border-maroon"
                  : "border-gold/30 text-foreground/70 hover:border-gold hover:text-maroon"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {filtered.map((g, i) => (
              <motion.button
                key={g.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                onClick={() => setLightbox(i)}
                className={`group block w-full mb-4 md:mb-6 break-inside-avoid relative overflow-hidden rounded-sm cursor-pointer ${
                  g.span === "tall" ? "" : g.span === "wide" ? "" : ""
                }`}
              >
                <img
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/85 via-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                  <div className="text-left text-white">
                    <div className="text-[10px] tracking-[0.25em] uppercase text-gold">{g.category}</div>
                    <div className="font-serif text-lg mt-1">{g.title}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 text-white/80 hover:text-gold text-3xl z-10"
              aria-label="Close"
            >
              ✕
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)); }}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-gold text-4xl p-3"
              aria-label="Previous"
            >‹</button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? null : (i + 1) % filtered.length)); }}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-gold text-4xl p-3"
              aria-label="Next"
            >›</button>
            <motion.img
              key={filtered[lightbox].id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-[92vw] object-contain rounded-sm shadow-gold"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
              <div className="text-xs tracking-[0.3em] uppercase text-gold">{filtered[lightbox].category}</div>
              <div className="font-serif text-xl mt-1">{filtered[lightbox].title}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
