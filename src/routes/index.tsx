import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Sparkles,
  Briefcase,
  Cake,
  Plane,
  GlassWater,
  ShieldCheck,
  Clock,
  Gem,
  UserCheck,
  MapPin,
  Mail,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-maybach.jpg.asset.json";
import limoImg from "@/assets/stretch-limo.jpg.asset.json";
import suvImg from "@/assets/escalade-estate.jpg.asset.json";
import partyImg from "@/assets/party-interior.jpg.asset.json";
import castleImg from "@/assets/escalade-castle.jpg.asset.json";
import chauffeurImg from "@/assets/chauffeur-door.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royal Ride Car & Limo Rental | Luxury Chauffeur Service" },
      {
        name: "description",
        content:
          "Royal Ride offers stretch limousines, executive SUVs and luxury sedans with professional chauffeurs for weddings, corporate travel and airport transfers.",
      },
      {
        property: "og:title",
        content: "Royal Ride Car & Limo Rental | Luxury Chauffeur Service",
      },
      {
        property: "og:description",
        content:
          "Premium chauffeur-driven transportation for weddings, corporate events and unforgettable occasions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/13105550147";
const PHONE = "+1 (310) 555-0147";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Fleet Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

const fleet = [
  {
    name: "Classic Stretch Limo",
    image: limoImg.url,
    alt: "Black stretch limousine waiting outside a luxury hotel at night",
    copy: "The timeless silhouette. Eight-passenger comfort, mirrored bar and a red-carpet arrival every time.",
    badges: ["Chauffeur Included", "Up to 8 Guests", "Bar Service"],
  },
  {
    name: "Executive SUV & Sedans",
    image: suvImg.url,
    alt: "Glossy black Cadillac Escalade parked outside a beige estate",
    copy: "Discreet, punctual and immaculate. Built for boardroom schedules and private airport transfers.",
    badges: ["Chauffeur Included", "Wi-Fi Onboard", "Leather Seats"],
  },
  {
    name: "Premium Party Limo",
    image: partyImg.url,
    alt: "Luxury limousine interior with blue neon lighting and a crystal bar",
    copy: "Fibre-optic ceiling, champagne bar and concert-grade sound for celebrations that keep moving.",
    badges: ["Ambient Lighting", "Climate Control", "Premium Audio"],
  },
];

const occasions = [
  {
    title: "Weddings",
    icon: Sparkles,
    copy: "Ribboned arrivals, bridal-party convoys and a chauffeur who knows the timeline.",
  },
  {
    title: "Corporate Travel",
    icon: Briefcase,
    copy: "Account-managed executive transfers with discretion and hourly reliability.",
  },
  {
    title: "Birthdays",
    icon: Cake,
    copy: "Party limousines styled for the night, with lighting and sound to match.",
  },
  {
    title: "Airport VIP",
    icon: Plane,
    copy: "Flight-tracked pickups, meet-and-greet service and luggage handled for you.",
  },
  {
    title: "Private Events",
    icon: GlassWater,
    copy: "Galas, premieres and milestone dinners with door-to-door choreography.",
  },
];

const whyUs = [
  {
    title: "Impeccable Fleet",
    icon: Gem,
    copy: "Meticulously maintained latest models, detailed before every single journey.",
  },
  {
    title: "Professional Chauffeurs",
    icon: UserCheck,
    copy: "Licensed, vetted and strictly professional — trained in etiquette and discretion.",
  },
  {
    title: "Punctual & Reliable",
    icon: Clock,
    copy: "We value your time. Guaranteed on-time arrival, tracked and confirmed.",
  },
  {
    title: "Bespoke Comfort",
    icon: ShieldCheck,
    copy: "Tailored interior amenities arranged around your specific requirements.",
  },
];

const gallery = [
  {
    src: castleImg.url,
    alt: "Black Cadillac Escalade parked outside a stone castle at dusk",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: chauffeurImg.url,
    alt: "Chauffeur in white gloves opening a luxury car door",
    span: "",
  },
  {
    src: heroImg.url,
    alt: "Mercedes-Maybach sedan on a rain-slicked city street at night",
    span: "",
  },
  {
    src: partyImg.url,
    alt: "Limousine interior with blue ambient lighting",
    span: "sm:col-span-2",
  },
  { src: limoImg.url, alt: "Stretch limousine outside a hotel entrance", span: "" },
  { src: suvImg.url, alt: "Executive SUV at a private estate", span: "" },
];

const steps = [
  {
    no: "01",
    title: "Select Fleet",
    copy: "Choose the vehicle that suits your occasion, guest count and style.",
  },
  {
    no: "02",
    title: "Check Availability",
    copy: "Send your date and route. We confirm your chauffeur within the hour.",
  },
  {
    no: "03",
    title: "Enjoy Your Ride",
    copy: "Your chauffeur arrives early, dressed for the occasion. You simply arrive.",
  },
];

const testimonials = [
  {
    quote:
      "Royal Ride handles every executive transfer for our leadership team. In two years, not one late arrival — and the vehicles are spotless without exception.",
    name: "Daniel Reyes",
    role: "Director of Operations, Kestrel Capital",
  },
  {
    quote:
      "Our chauffeur arrived twenty minutes early, kept the champagne chilled and knew the venue better than we did. It made the whole morning feel effortless.",
    name: "Amara & Josh Whitfield",
    role: "Married in Napa Valley",
  },
  {
    quote:
      "We booked three limousines for a client gala on short notice. The coordination was flawless and the interiors genuinely impressed our guests.",
    name: "Priya Nandakumar",
    role: "Head of Events, Lumen Group",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-10">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/60 font-display text-base text-gold">
              R
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-lg text-ivory sm:text-xl">
                Royal Ride
              </span>
              <span className="block text-[0.55rem] tracking-[0.3em] text-muted-foreground uppercase">
                Car &amp; Limo Rental
              </span>
            </span>
          </a>

          <div className="flex items-center gap-8">
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="hidden shrink-0 bg-gold px-6 py-3 text-xs font-medium tracking-[0.18em] text-primary-foreground uppercase transition-colors hover:bg-gold-soft sm:inline-block"
            >
              Check Availability
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="shrink-0 text-ivory lg:hidden"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-border/60 bg-charcoal px-5 py-4 lg:hidden">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-border/40 py-3 text-sm tracking-wide text-muted-foreground last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 block bg-gold px-6 py-3 text-center text-xs font-medium tracking-[0.18em] text-primary-foreground uppercase"
            >
              Check Availability
            </a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate min-h-[92vh] overflow-hidden">
        <img
          src={heroImg.url}
          alt="Black Mercedes-Maybach sedan on a rain-slicked city street at night"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pt-32 pb-20 lg:px-10">
          <Reveal>
            <p className="eyebrow">Est. 2009 — Chauffeur Service</p>
            <h1 className="mt-6 max-w-3xl font-display text-[2.75rem] leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              Arrive in Luxury.
              <span className="block text-gold italic">Celebrate in Style.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed font-light text-muted-foreground sm:text-lg">
              Premium chauffeur-driven transportation for weddings, corporate
              events, and unforgettable occasions.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="bg-gold px-8 py-4 text-center text-xs font-medium tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-gold-soft"
              >
                Check Availability
              </a>
              <a
                href="#fleet"
                className="border border-gold/60 px-8 py-4 text-center text-xs font-medium tracking-[0.2em] text-gold uppercase transition-colors hover:bg-gold/10"
              >
                Explore Our Fleet
              </a>
            </div>
            <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["15+", "Years Driving"],
                ["40", "Vehicle Fleet"],
                ["24/7", "Dispatch"],
              ].map(([v, k]) => (
                <div key={k}>
                  <dt className="font-display text-3xl text-gold">{v}</dt>
                  <dd className="mt-1 text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
                    {k}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">The Fleet</p>
            <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl lg:text-6xl">
              Choose Your Ride
            </h2>
            <div className="gold-rule mt-8 w-24" />
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {fleet.map((car, i) => (
              <Reveal key={car.name} delay={i * 120}>
                <article className="group flex h-full flex-col border border-border bg-charcoal transition-colors hover:border-gold/60">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-2xl text-ivory">{car.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
                      {car.copy}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {car.badges.map((b) => (
                        <li
                          key={b}
                          className="border border-gold/30 px-3 py-1.5 text-[0.6rem] tracking-[0.14em] text-gold uppercase"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="mt-8 border border-gold/60 py-3.5 text-center text-[0.66rem] font-medium tracking-[0.2em] text-gold uppercase transition-colors hover:bg-gold hover:text-primary-foreground"
                    >
                      Book Now
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-charcoal px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Occasions</p>
            <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl lg:text-6xl">
              Tailored For Every Event
            </h2>
            <div className="gold-rule mt-8 w-24" />
          </Reveal>

          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {occasions.map((o, i) => (
              <Reveal key={o.title} delay={i * 90}>
                <div className="group h-full bg-background p-9 transition-colors hover:bg-secondary">
                  <o.icon
                    size={26}
                    strokeWidth={1.2}
                    className="text-gold transition-transform duration-700 group-hover:-translate-y-1"
                  />
                  <h3 className="mt-6 font-display text-2xl text-ivory">{o.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
                    {o.copy}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={450}>
              <a
                href="#contact"
                className="flex h-full flex-col justify-between bg-gold p-9 text-primary-foreground"
              >
                <span className="text-[0.62rem] tracking-[0.28em] uppercase opacity-80">
                  Ready when you are
                </span>
                <span className="mt-10 font-display text-3xl">
                  Check Availability →
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Why Royal Ride</p>
            <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl lg:text-6xl">
              The Royal Ride Experience
            </h2>
            <div className="gold-rule mt-8 w-24" />
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 100}>
                <div className="border-t border-gold/40 pt-7">
                  <w.icon size={24} strokeWidth={1.2} className="text-gold" />
                  <h3 className="mt-5 font-display text-2xl text-ivory">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
                    {w.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-charcoal px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Fleet Gallery</p>
            <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl lg:text-6xl">
              Moments Worth Arriving For
            </h2>
            <div className="gold-rule mt-8 w-24" />
          </Reveal>

          <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[200px]">
            {gallery.map((g, i) => (
              <Reveal key={g.src + i} delay={i * 80} className={`h-full ${g.span}`}>
                <div className="h-full overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl lg:text-6xl">
              Three Quiet Steps
            </h2>
            <div className="gold-rule mt-8 w-24" />
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.no} delay={i * 130}>
                <div className="border border-border p-9">
                  <span className="font-display text-5xl text-gold/40">{s.no}</span>
                  <h3 className="mt-5 font-display text-2xl text-ivory">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
                    {s.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-charcoal px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Testimonials</p>
            <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl lg:text-6xl">
              Trusted By Those Who Notice
            </h2>
            <div className="gold-rule mt-8 w-24" />
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <figure className="flex h-full flex-col justify-between border border-border bg-background p-9">
                  <blockquote className="font-display text-xl leading-relaxed text-ivory italic">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8 border-t border-border pt-5">
                    <p className="text-sm text-gold">{t.name}</p>
                    <p className="mt-1 text-xs tracking-wide text-muted-foreground">
                      {t.role}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <p className="eyebrow">Check Availability</p>
            <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl">
              Reserve Your Chauffeur
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed font-light text-muted-foreground">
              Share your date and route. A dispatch manager confirms your vehicle
              and chauffeur within the hour.
            </p>

            <form
              className="mt-10 grid gap-5 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {[
                { label: "Full Name", type: "text", name: "name" },
                { label: "Phone / WhatsApp", type: "tel", name: "phone" },
                { label: "Event Date", type: "date", name: "date" },
                { label: "Pick-up Location", type: "text", name: "pickup" },
              ].map((f) => (
                <label key={f.name} className="block">
                  <span className="text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
                    {f.label}
                  </span>
                  <input
                    required
                    type={f.type}
                    name={f.name}
                    className="mt-2 w-full border border-input bg-charcoal px-4 py-3.5 text-sm text-ivory outline-none transition-colors focus:border-gold"
                  />
                </label>
              ))}

              <label className="block sm:col-span-2">
                <span className="text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
                  Vehicle Type
                </span>
                <select
                  name="vehicle"
                  className="mt-2 w-full border border-input bg-charcoal px-4 py-3.5 text-sm text-ivory outline-none transition-colors focus:border-gold"
                >
                  <option>Classic Stretch Limo</option>
                  <option>Executive SUV &amp; Sedans</option>
                  <option>Premium Party Limo</option>
                  <option>Not sure yet — advise me</option>
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-none border border-input bg-charcoal px-4 py-3.5 text-sm text-ivory outline-none transition-colors focus:border-gold"
                />
              </label>

              <button
                type="submit"
                className="bg-gold px-8 py-4 text-xs font-medium tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-gold-soft sm:col-span-2"
              >
                {sent ? "Request Received — We'll Call You" : "Check Availability"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={140}>
            <div className="flex h-full flex-col gap-5">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 border border-gold/50 bg-charcoal p-7 transition-colors hover:bg-gold hover:text-primary-foreground"
              >
                <MessageCircle size={26} strokeWidth={1.3} />
                <span>
                  <span className="block font-display text-xl">Chat on WhatsApp</span>
                  <span className="text-xs tracking-wide opacity-70">
                    Instant replies, 24 hours a day
                  </span>
                </span>
              </a>

              <div className="border border-border bg-charcoal p-7">
                <p className="eyebrow">Direct Line</p>
                <a
                  href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}
                  className="mt-4 flex items-center gap-3 font-display text-3xl text-gold"
                >
                  <Phone size={22} strokeWidth={1.3} /> {PHONE}
                </a>
                <p className="mt-3 text-xs tracking-wide text-muted-foreground">
                  Dispatch answers around the clock, every day of the year.
                </p>
                <div className="mt-7 space-y-3 border-t border-border pt-6 text-sm font-light text-muted-foreground">
                  <p className="flex items-center gap-3">
                    <Mail size={16} strokeWidth={1.3} className="shrink-0 text-gold" />
                    reservations@royalride.com
                  </p>
                  <p className="flex items-start gap-3">
                    <MapPin size={16} strokeWidth={1.3} className="mt-0.5 shrink-0 text-gold" />
                    1120 Wilshire Boulevard, Los Angeles, CA
                  </p>
                </div>
              </div>

              <div className="flex-1 overflow-hidden border border-border">
                <img
                  src={chauffeurImg.url}
                  alt="Chauffeur in white gloves opening a luxury car door"
                  loading="lazy"
                  className="h-full min-h-[200px] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-charcoal px-5 py-14 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-2xl text-ivory">Royal Ride</p>
            <p className="mt-2 text-xs tracking-[0.24em] text-muted-foreground uppercase">
              Car &amp; Limo Rental
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Royal Ride. All rights reserved.
          </p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gold text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle size={24} strokeWidth={1.6} />
      </a>
    </div>
  );
}
