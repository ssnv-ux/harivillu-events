export function Ornament({ label }: { label?: string }) {
  return (
    <div className="divider-ornament mx-auto max-w-xs my-4">
      <span aria-hidden className="text-gold text-lg">❦</span>
      {label && <span className="font-serif italic text-sm tracking-widest uppercase whitespace-nowrap">{label}</span>}
      <span aria-hidden className="text-gold text-lg">❦</span>
    </div>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
      {eyebrow && <Ornament label={eyebrow} />}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-maroon leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
