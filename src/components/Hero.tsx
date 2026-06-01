import { motion } from "motion/react";
import heroImg from "@/assets/hero.jpg";
import { waLink } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury Telugu wedding mandap decoration"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-5 text-center text-white pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="divider-ornament mx-auto max-w-xs mb-6"
        >
          <span className="text-gold text-base font-serif italic tracking-[0.3em] uppercase whitespace-nowrap">
            Harivillu Events
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] max-w-5xl mx-auto"
        >
          Transforming Telugu Weddings Into{" "}
          <span className="text-gradient-gold italic">Timeless Memories</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-base md:text-lg lg:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
        >
          From Pelli Kuthuru to Haldi, Mehendi, Wedding and Reception decor —
          we craft unforgettable celebrations filled with beauty and tradition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#gallery"
            className="group px-8 py-4 bg-gold text-gold-foreground font-medium tracking-wide hover:bg-gold/90 transition-all rounded-sm shadow-gold min-w-[200px]"
          >
            View Our Work
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/70 text-white tracking-wide hover:bg-white hover:text-maroon transition-all rounded-sm min-w-[200px] backdrop-blur-sm"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 text-xs tracking-[0.3em] uppercase"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span>Scroll</span>
          <span className="w-px h-8 bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
