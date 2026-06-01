import { motion } from "motion/react";
import { SectionHeader } from "./Ornament";
import { features } from "@/data/site";

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-beige/30">
      <div className="container mx-auto px-5">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Crafted with Care, Delivered with Pride"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="relative p-8 bg-background border border-gold/20 rounded-sm hover:shadow-elegant transition-all group"
            >
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/60 group-hover:w-16 group-hover:h-16 transition-all" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/60 group-hover:w-16 group-hover:h-16 transition-all" />
              <div className="text-3xl text-gold mb-4">✦</div>
              <h3 className="font-serif text-xl text-maroon mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
