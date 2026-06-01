import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Instagram } from "@/components/Instagram";
import { CtaSection } from "@/components/CtaSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harivillu Events — Premium Telugu Wedding Decoration & Event Management" },
      { name: "description", content: "Luxury Telugu wedding decoration — Pelli Kuthuru, Haldi, Mehendi, Engagement, Wedding & Reception decor. Crafted with tradition and elegance by Harivillu Events." },
      { property: "og:title", content: "Harivillu Events — Premium Telugu Wedding Decoration" },
      { property: "og:description", content: "Transforming Telugu weddings into timeless memories. Premium decoration & event management across India." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Harivillu Events",
          description: "Premium Telugu wedding decoration and event management.",
          image: "/og-image.jpg",
          telephone: "+919963663436",
          address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
          areaServed: "India",
          priceRange: "₹₹₹",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Instagram />
      <CtaSection />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
