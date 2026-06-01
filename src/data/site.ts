import pellikuthuru from "@/assets/gallery-pellikuthuru.jpg";
import haldi from "@/assets/gallery-haldi.jpg";
import mehendi from "@/assets/gallery-mehendi.jpg";
import engagement from "@/assets/gallery-engagement.jpg";
import wedding from "@/assets/gallery-wedding.jpg";
import reception from "@/assets/gallery-reception.jpg";
import floral from "@/assets/gallery-floral.jpg";

export const WHATSAPP_NUMBER = "919963663436";
export const PHONE_DISPLAY = "+91 99636 63436";
export const EMAIL = "hello@harivilluevents.com";
export const LOCATION = "Hyderabad, Telangana, India";
export const INSTAGRAM_URL = "https://instagram.com/harivilluevents";

export const waLink = (msg = "Hi Harivillu Events, I'd like to know more about your decoration services.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export type GalleryCategory =
  | "Pelli Kuthuru"
  | "Haldi"
  | "Mehendi"
  | "Engagement"
  | "Wedding"
  | "Reception";

export const galleryCategories: GalleryCategory[] = [
  "Pelli Kuthuru",
  "Haldi",
  "Mehendi",
  "Engagement",
  "Wedding",
  "Reception",
];

export interface GalleryItem {
  id: string;
  src: string;
  category: GalleryCategory;
  title: string;
  span?: "tall" | "wide" | "normal";
}

export const galleryItems: GalleryItem[] = [
  { id: "g1", src: wedding, category: "Wedding", title: "Royal Maroon Mandap", span: "tall" },
  { id: "g2", src: haldi, category: "Haldi", title: "Golden Haldi Setup" },
  { id: "g3", src: mehendi, category: "Mehendi", title: "Floral Mehendi Jhula", span: "tall" },
  { id: "g4", src: pellikuthuru, category: "Pelli Kuthuru", title: "Traditional Pelli Kuthuru" },
  { id: "g5", src: engagement, category: "Engagement", title: "Crystal Ring Ceremony", span: "wide" },
  { id: "g6", src: reception, category: "Reception", title: "Modern Orchid Reception", span: "tall" },
  { id: "g7", src: floral, category: "Wedding", title: "Floral Detailing" },
  { id: "g8", src: wedding, category: "Wedding", title: "Grand Wedding Stage" },
  { id: "g9", src: haldi, category: "Haldi", title: "Marigold Haldi Decor" },
  { id: "g10", src: engagement, category: "Engagement", title: "Pastel Engagement Stage" },
  { id: "g11", src: reception, category: "Reception", title: "Cascading Florals" },
  { id: "g12", src: mehendi, category: "Mehendi", title: "Evening Mehendi Lights" },
];

export const services = [
  { title: "Pelli Kuthuru Decoration", desc: "Sacred traditional setup with banana leaves, kalash & marigold.", img: pellikuthuru },
  { title: "Haldi Decoration", desc: "Vibrant yellow florals and brass accents for a joyful morning.", img: haldi },
  { title: "Mehendi Decoration", desc: "Whimsical jhula swings, umbrellas and fairy-lit corners.", img: mehendi },
  { title: "Engagement Decoration", desc: "Elegant pastel stages with crystal and roses.", img: engagement },
  { title: "Wedding Stage Decoration", desc: "Grand Telugu mandaps in maroon, gold & fresh flowers.", img: wedding },
  { title: "Reception Decoration", desc: "Modern luxury backdrops with orchids and chandeliers.", img: reception },
  { title: "Floral Decoration", desc: "Custom florals — roses, jasmine, marigold & exotic blooms.", img: floral },
  { title: "Customized Event Themes", desc: "Bespoke themes tailored to your story and traditions.", img: wedding },
];

export const features = [
  { title: "Traditional Telugu Expertise", desc: "Deep-rooted understanding of every ritual and aesthetic." },
  { title: "Personalized Decorations", desc: "Every setup designed around your story and preferences." },
  { title: "Premium Quality Materials", desc: "Fresh flowers, fine fabrics and finest props only." },
  { title: "Affordable Packages", desc: "Luxury experiences crafted to fit your budget." },
  { title: "Timely Execution", desc: "Punctual setups so your celebration runs flawlessly." },
  { title: "Experienced Team", desc: "Skilled artisans and planners with 100+ events delivered." },
];

export const aboutHighlights = [
  "Customized Decor",
  "Professional Team",
  "Traditional & Modern Themes",
  "End-to-End Support",
];

export const processSteps = [
  { n: "01", title: "Contact Us", desc: "Reach out via WhatsApp or our contact form." },
  { n: "02", title: "Share Requirements", desc: "Tell us about your event, venue and vision." },
  { n: "03", title: "Theme Discussion", desc: "We curate themes and mood boards together." },
  { n: "04", title: "Decoration Planning", desc: "Detailed planning, mockups and timelines." },
  { n: "05", title: "Event Setup", desc: "Our team executes every detail flawlessly." },
  { n: "06", title: "Celebrate Your Day", desc: "You relax — your moments become memories." },
];

export const testimonials = [
  {
    name: "Sravani & Arjun",
    event: "Wedding & Reception",
    photo: engagement,
    quote: "Harivillu turned our wedding into a fairytale. Every detail — from the pelli kuthuru to the reception stage — was pure magic.",
  },
  {
    name: "Lakshmi Reddy",
    event: "Haldi & Mehendi",
    photo: haldi,
    quote: "The haldi setup was breathtaking. Guests are still talking about the marigold installation months later!",
  },
  {
    name: "Priya & Kiran",
    event: "Engagement",
    photo: reception,
    quote: "Elegant, on-time, and so personal. They captured our story perfectly through the decor.",
  },
  {
    name: "Anitha Family",
    event: "Full Wedding Package",
    photo: wedding,
    quote: "End-to-end professionalism. From planning to setup, everything exceeded our expectations.",
  },
];

export const instagramFeed = [
  pellikuthuru, haldi, mehendi, engagement, wedding, reception, floral, wedding,
];
