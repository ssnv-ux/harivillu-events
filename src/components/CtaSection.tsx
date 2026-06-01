import { motion } from "motion/react";
import ctaBg from "@/assets/cta-bg.jpg";
import { waLink } from "@/data/site";

export function CtaSection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-maroon/80" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto px-5 text-center text-white"
      >
        <div className="divider-ornament mx-auto max-w-xs my-4">
          <span className="text-gold">❦</span>
          <span className="font-serif italic text-sm tracking-widest uppercase">Let's Begin</span>
          <span className="text-gold">❦</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto leading-tight">
          Planning Your <span className="text-gradient-gold italic">Dream Wedding?</span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl mx-auto">
          Let's create a celebration your family will cherish forever.
        </p>
        <a
          href={waLink("Hi Harivillu! I'd like a free consultation for my wedding decoration.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 px-10 py-5 bg-gold text-gold-foreground font-medium tracking-wide hover:bg-gold/90 transition-all rounded-sm shadow-gold text-base md:text-lg"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.52 3.48A11.85 11.85 0 0012.04 0C5.5 0 .16 5.34.16 11.88c0 2.09.55 4.14 1.6 5.94L0 24l6.32-1.66a11.86 11.86 0 005.72 1.46h.01c6.54 0 11.88-5.34 11.88-11.88 0-3.17-1.23-6.16-3.41-8.44z"/></svg>
          Get Free Consultation
        </a>
      </motion.div>
    </section>
  );
}
