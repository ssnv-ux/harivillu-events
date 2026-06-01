import { motion } from "motion/react";
import { SectionHeader } from "./Ornament";
import { processSteps } from "@/data/site";

export function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-5">
        <SectionHeader
          eyebrow="Our Process"
          title="From First Hello to Final Bow"
          subtitle="A seamless journey designed around you."
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent" />

          {processSteps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-start gap-6 mb-10 md:mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse md:text-right"
              }`}
            >
              <div className="md:w-1/2 md:px-8">
                <div className="bg-beige/40 border border-gold/30 p-6 rounded-sm">
                  <div className="text-gold font-serif text-3xl italic">{s.n}</div>
                  <h3 className="font-serif text-xl md:text-2xl text-maroon mt-1">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-6 md:left-1/2 top-6 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-background" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
