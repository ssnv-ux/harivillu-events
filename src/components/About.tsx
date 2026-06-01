import { motion } from "motion/react";
import { SectionHeader } from "./Ornament";
import { aboutHighlights } from "@/data/site";
import pellikuthuru from "@/assets/gallery-pellikuthuru.jpg";
import floral from "@/assets/gallery-floral.jpg";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-5">
        <SectionHeader
          eyebrow="Our Story"
          title="About Harivillu Events"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
              <img src={pellikuthuru} alt="Traditional Telugu decor" className="w-full h-full object-cover" width={1024} height={1280} loading="lazy" />
            </div>
            <div className="hidden md:block absolute -bottom-10 -right-10 w-48 h-56 overflow-hidden rounded-sm border-4 border-background shadow-elegant">
              <img src={floral} alt="Floral detail" className="w-full h-full object-cover" width={400} height={500} loading="lazy" />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg leading-relaxed text-foreground/85 font-serif italic">
              "Harivillu Events specializes in creating memorable wedding experiences through
              elegant decoration and thoughtful event styling."
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We blend traditional Telugu wedding aesthetics with modern design to make every
              celebration unique. From sacred rituals to grand receptions, our team delivers
              meticulous craft, fresh florals and emotional storytelling — so your family
              cherishes each moment forever.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {aboutHighlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-beige/40 border border-gold/20 rounded-sm"
                >
                  <span className="text-gold text-xl leading-none mt-0.5">✦</span>
                  <span className="text-sm font-medium text-maroon">{h}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
