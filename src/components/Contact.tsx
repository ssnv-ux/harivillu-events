import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./Ornament";
import { WHATSAPP_NUMBER, PHONE_DISPLAY, EMAIL, LOCATION, waLink } from "@/data/site";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    eventType: "Wedding",
    eventDate: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 80) e.name = "Please enter your name";
    if (!/^[0-9+\s\-()]{7,20}$/.test(form.phone)) e.phone = "Enter a valid phone number";
    if (form.message.length > 1000) e.message = "Message too long";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const text =
`New Enquiry from website
Name: ${form.name}
Phone: ${form.phone}
Event: ${form.eventType}
Date: ${form.eventDate || "Not specified"}
Message: ${form.message || "—"}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <section id="contact" className="py-20 md:py-32 bg-beige/30">
      <div className="container mx-auto px-5">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Begin Your Celebration"
          subtitle="Share a few details and we'll reach out within hours."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-background p-6 border border-gold/20 rounded-sm">
              <h3 className="font-serif text-2xl text-maroon mb-4">Contact Info</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3"><span className="text-gold">📞</span><a href={`tel:${WHATSAPP_NUMBER}`} className="hover:text-maroon">{PHONE_DISPLAY}</a></li>
                <li className="flex gap-3"><span className="text-gold">💬</span><a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-maroon">WhatsApp Chat</a></li>
                <li className="flex gap-3"><span className="text-gold">✉</span><a href={`mailto:${EMAIL}`} className="hover:text-maroon break-all">{EMAIL}</a></li>
                <li className="flex gap-3"><span className="text-gold">📍</span><span>{LOCATION}</span></li>
              </ul>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm border border-gold/20">
              <iframe
                title="Location"
                src="https://www.google.com/maps?q=Hyderabad,Telangana&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={submit}
            className="lg:col-span-3 bg-background p-6 md:p-10 border border-gold/20 rounded-sm space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" error={errors.name}>
                <input type="text" value={form.name} onChange={onChange("name")} maxLength={80} required
                  className="input-style" />
              </Field>
              <Field label="Phone Number" error={errors.phone}>
                <input type="tel" value={form.phone} onChange={onChange("phone")} required
                  className="input-style" />
              </Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Event Type">
                <select value={form.eventType} onChange={onChange("eventType")} className="input-style">
                  {["Wedding", "Reception", "Engagement", "Haldi", "Mehendi", "Pelli Kuthuru", "Other"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <Field label="Event Date">
                <input type="date" value={form.eventDate} onChange={onChange("eventDate")} className="input-style" />
              </Field>
            </div>
            <Field label="Message" error={errors.message}>
              <textarea value={form.message} onChange={onChange("message")} rows={4} maxLength={1000}
                className="input-style resize-none" placeholder="Tell us about your vision..." />
            </Field>
            <button
              type="submit"
              className="w-full py-4 bg-maroon text-maroon-foreground tracking-wide hover:bg-maroon/90 transition-all rounded-sm border border-gold/30"
            >
              Send via WhatsApp
            </button>
            <p className="text-xs text-muted-foreground text-center">All enquiries open in WhatsApp for instant reply.</p>
          </motion.form>
        </div>
      </div>

      <style>{`
        .input-style {
          width: 100%;
          padding: 0.75rem 1rem;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          border-radius: 2px;
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--color-foreground);
          transition: border-color 0.2s;
        }
        .input-style:focus {
          outline: none;
          border-color: var(--color-gold);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-gold) 20%, transparent);
        }
      `}</style>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs tracking-widest uppercase text-maroon font-medium">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}
