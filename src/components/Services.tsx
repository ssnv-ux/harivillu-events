import { motion } from "motion/react";
import { SectionHeader } from "./Ornament";
import { services, waLink } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-beige/30">
      <div className="container mx-auto px-5">
        <SectionHeader
          eyebrow="What We Create"
          title="Our Premium Services"
          subtitle="Every ritual deserves its own signature setting. Explore our complete decor offerings."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              className="group bg-background border border-gold/20 rounded-sm overflow-hidden hover:shadow-elegant transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl text-maroon">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed min-h-[3rem]">{s.desc}</p>
                <a
                  href={waLink(`Hi! I'm interested in ${s.title}. Could you share details?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm tracking-wide text-gold hover:text-maroon transition-colors border-b border-gold/40 pb-1"
                >
                  Enquire on WhatsApp →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
