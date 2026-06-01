import { EMAIL, PHONE_DISPLAY, INSTAGRAM_URL, LOCATION } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-maroon text-maroon-foreground py-14 border-t-4 border-gold/40">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-gold text-2xl">❦</span>
              <div>
                <div className="font-serif text-2xl">Harivillu Events</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Wedding Decoration</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Premium Telugu wedding decoration & event management. Transforming moments into timeless memories.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#about" className="hover:text-gold">About</a></li>
              <li><a href="#services" className="hover:text-gold">Services</a></li>
              <li><a href="#gallery" className="hover:text-gold">Gallery</a></li>
              <li><a href="#contact" className="hover:text-gold">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gold mb-3">Reach Us</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>{PHONE_DISPLAY}</li>
              <li className="break-all">{EMAIL}</li>
              <li>{LOCATION}</li>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Harivillu Events. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
