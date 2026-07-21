import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Wrench,
  Droplets,
  Gauge,
  Search,
  Star,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Flame,
  Thermometer,
  Waves,
  Trash2,
  Video,
  Pipette,
  Toilet,
  Home as HomeIcon,
  Zap,
  Filter,
  Hammer,
} from "lucide-react";
import heroImg from "@/assets/hero-plumber.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "American Plumbing Services, Inc. — Lancaster & Palmdale Plumber" },
      {
        name: "description",
        content:
          "Voted AV's Best 13 years in a row. 24/7 residential & commercial plumbing in Lancaster & Palmdale, CA. Request an estimate today.",
      },
      { property: "og:title", content: "American Plumbing Services, Inc." },
      {
        property: "og:description",
        content:
          "Fast & Friendly Service, Value & Quality You Can Trust. Serving Lancaster & Palmdale 24/7.",
      },
    ],
  }),
});

const EMAIL = "ron@americanplumbingservicesinc.com";
const PHONE = "(661) 266-0123";
const PHONE_TEL = "+16612660123";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Specials", href: "#specials" },
  { label: "Plumbing Secrets", href: "#secrets" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Search,
    title: "Electronic Leak Detection",
    body: "Our specialists pin-point where leaks originate using precise electronic detection—no guesswork, no unnecessary damage.",
  },
  {
    icon: ShieldCheck,
    title: "Preventative Maintenance",
    body: "Peace of mind through a well-maintained plumbing system. Catch small issues before they become expensive problems.",
  },
  {
    icon: Droplets,
    title: "Sewer & Drain Cleaning",
    body: "Clogged drain? Our experienced technicians clear stoppages fast and keep everything running smoothly.",
  },
  {
    icon: Wrench,
    title: "Repipe / Remodel",
    body: "Solve slab leaks, pin-hole leaks, low pressure and rusty water with a professional repipe or remodel.",
  },
  {
    icon: Gauge,
    title: "Water Heaters",
    body: "Same-day installation and repair for tank and tankless water heaters from trusted, courteous technicians.",
  },
  {
    icon: Clock,
    title: "24 Hour Emergency",
    body: "Burst pipes and midnight backups don't wait. Neither do we—call anytime, we're open 24 hours.",
  },
];

const REVIEWS = [
  {
    name: "Stacie Tscherny",
    role: "Local Guide · 20-year customer",
    stars: 5,
    body: "Excellent service as always. They have been our go-to plumbers for almost 20 years. Javier replaced our water heater this morning. Everyone who has worked on our homes are great, including Bennie and Gabe. Highly recommend—and we appreciate their military discount.",
  },
  {
    name: "Kelly",
    role: "Verified Customer",
    stars: 5,
    body: "My water heater pipe out of the wall was leaking and American Plumbing came out the same day I called them. Javier was my service guy and he was able to fix everything—didn't damage anything, very professional. I would recommend them to anybody.",
  },
  {
    name: "Homeowner",
    role: "Palmdale, CA",
    stars: 5,
    body: "The gentleman that came out to give the quote was very nice and sweet. Straightforward pricing, clean work, and they treated our home with respect from start to finish.",
  },
];

const SECRETS = [
  {
    title: "Faucets, Tubs & Showers",
    body: "Continuous drip? It can usually be rebuilt at a minimal cost. It may also be excessive water pressure or calcification build-up.",
  },
  {
    title: "Garbage Disposal",
    body: "If it isn't leaking, chances are it doesn't need replacing. Try the reset button on the bottom of the unit first.",
  },
  {
    title: "High Water or Gas Bill",
    body: "Toilet running? Faucet dripping? Slab leak? Check your water meter for movement. Any indication—give us a call.",
  },
  {
    title: "Main Line Stoppage",
    body: "Everything backing up into the tub or toilet? Locate your outside sewer clean-out and carefully remove the cap to divert the flow. Then call us.",
  },
];

function Landing() {
  const [open, setOpen] = useState(false);

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      {/* Top strip */}
      <div className="bg-primary text-primary-foreground text-xs sm:text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <span className="opacity-90">Fast & Friendly Service — Voted AV's Best 13 Years in a Row</span>
          <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 font-medium hover:text-accent transition">
            <Phone className="h-3.5 w-3.5" /> {PHONE}
          </a>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 bg-background/85 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-md bg-primary text-primary-foreground grid place-items-center font-display font-bold">A</span>
            <div className="leading-tight">
              <div className="font-display font-bold text-primary">American Plumbing</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Services, Inc.</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-soft)] hover:opacity-90 transition"
          >
            Request an Estimate <ArrowRight className="h-4 w-4" />
          </a>

          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-medium text-foreground/80 hover:text-primary"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
              >
                Request an Estimate <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" /> Voted AV's Best · 13 Years
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Lancaster & Palmdale's <span className="text-accent">most trusted</span> plumber.
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl">
              Full-service residential and commercial plumbing—priced by the job, not by the hour.
              Same-day service, honest quotes, and workmanship that lasts.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-elegant)] hover:opacity-90 transition"
              >
                Request an Estimate <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["24/7", "Emergency service"],
                ["13+", "Years AV's Best"],
                ["20yr", "Loyal customers"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-display text-3xl font-bold text-accent">{k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-white/70">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-[2rem]" aria-hidden />
            <img
              src={heroImg}
              alt="American Plumbing Services technician installing a modern faucet"
              width={1600}
              height={1200}
              className="relative rounded-2xl shadow-[var(--shadow-elegant)] object-cover w-full aspect-[4/3]"
            />
            <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-elegant)]">
              <div className="flex text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold text-primary">Trusted for 20+ years</div>
                <div className="text-muted-foreground text-xs">Family-owned. Locally operated.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specials */}
      <section id="specials" className="bg-primary/5 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-wrap items-center gap-6 justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">Special Offer</div>
            <h3 className="mt-1 font-display text-2xl md:text-3xl font-bold text-primary">
              10% Off Labor <span className="text-accent">·</span> First-time, Senior, Military, Non-Profit & 1st Responders
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              One discount per customer, per visit. Mention this ad at time of service.
            </p>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            Claim Your Discount <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">Our Services</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">
              Everything your plumbing system needs—done right the first time.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From a single dripping faucet to a full commercial repipe, our licensed technicians deliver
              premium workmanship with straightforward pricing.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-primary">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">About Us</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">
              A family-run plumbing company built on trust.
            </h2>
            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              American Plumbing Services, Inc. is a full-service commercial and residential plumbing
              company serving Palmdale and Lancaster, CA. Founded by Ron Suko, we're committed to
              professionalism and excellence—providing service by the job, not by the hour, so our
              customers always get outstanding value.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Voted Antelope Valley's Best 13 years running",
                "Priced by the job—no clock-watching",
                "Licensed, insured, background-checked technicians",
                "Discounts for seniors, military & first responders",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["2022", "2023", "2024", "2025"].map((y) => (
              <div
                key={y}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="text-xs uppercase tracking-widest text-accent">AV's Best</div>
                <div className="mt-2 font-display text-5xl font-bold">{y}</div>
                <div className="mt-2 text-sm text-white/70">Awarded by the community we serve.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plumbing Secrets */}
      <section id="secrets" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">Plumbing Secrets & Tips</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">
              We'll tell you what the other guys won't.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Our goal is to educate our customers so you can catch problems before they become expensive.
              A few minutes here could save you hundreds—even thousands—of dollars.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {SECRETS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-display text-xl font-bold text-primary">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 md:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-widest text-accent font-semibold">Reviews</div>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">
                Loved by neighbors across the Antelope Valley.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="font-display text-2xl font-bold text-primary">3.9</span>
              <span className="text-muted-foreground text-sm">based on Google reviews</span>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <figure
                key={r.name}
                className="rounded-2xl bg-card border border-border p-8 flex flex-col"
              >
                <div className="flex text-accent mb-4">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground/85 leading-relaxed flex-1">
                  "{r.body}"
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold text-primary">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div
            className="rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] grid lg:grid-cols-2"
            style={{ background: "var(--gradient-hero)" }}
          >
            <div className="p-10 md:p-14 text-primary-foreground">
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
                Need a plumber <span className="text-accent">today?</span>
              </h2>
              <p className="mt-5 text-white/80 text-lg max-w-md">
                Call us anytime—we're open 24 hours. Or drop us a note and we'll get right back to you.
              </p>

              <div className="mt-10 space-y-5">
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-4 group">
                  <span className="h-11 w-11 rounded-full bg-accent text-accent-foreground grid place-items-center">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-white/60">Call Us 24/7</span>
                    <span className="block font-display text-xl font-bold group-hover:text-accent transition">{PHONE}</span>
                  </span>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                  <span className="h-11 w-11 rounded-full bg-accent text-accent-foreground grid place-items-center">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-widest text-white/60">Email Us</span>
                    <span className="block font-semibold group-hover:text-accent transition break-all">{EMAIL}</span>
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="h-11 w-11 rounded-full bg-accent text-accent-foreground grid place-items-center">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-white/60">Serving</span>
                    <span className="block font-semibold">Lancaster & Palmdale, CA</span>
                  </span>
                </div>
              </div>
            </div>

            <form
              className="bg-card p-10 md:p-14 flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget as HTMLFormElement;
                const data = new FormData(f);
                const subject = encodeURIComponent("Estimate Request from Website");
                const body = encodeURIComponent(
                  `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
                );
                window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
              }}
            >
              <h3 className="font-display text-2xl font-bold text-primary">Request an estimate</h3>
              <p className="text-sm text-muted-foreground -mt-2">
                Tell us about the job and we'll follow up right away.
              </p>
              <input
                required
                name="name"
                placeholder="Full name"
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                required
                type="tel"
                name="phone"
                placeholder="Phone"
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="How can we help?"
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent resize-none"
              />
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground hover:opacity-90 transition"
              >
                Send Request <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground/80 pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-md bg-accent text-accent-foreground grid place-items-center font-display font-bold">A</span>
              <span className="font-display font-bold text-primary-foreground">American Plumbing</span>
            </div>
            <p className="mt-4 text-sm">
              Fast & Friendly Service, Value & Quality You Can Trust. Voted AV's Best 13 years in a row.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-accent mb-4">Company</div>
            <ul className="space-y-2 text-sm">
              {NAV.slice(1).map((n) => (
                <li key={n.label}>
                  <a className="hover:text-accent transition" href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-accent mb-4">Contact</div>
            <ul className="space-y-2 text-sm">
              <li><a href={`tel:${PHONE_TEL}`} className="hover:text-accent">{PHONE}</a></li>
              <li className="break-all"><a href={`mailto:${EMAIL}`} className="hover:text-accent">{EMAIL}</a></li>
              <li>P.O. Box 2885, Lancaster, CA 93539</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-accent mb-4">Hours</div>
            <ul className="space-y-2 text-sm">
              <li>Open 24 Hours</li>
              <li>Emergency service available</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 mt-12 pt-6 border-t border-white/10 text-xs text-white/50">
          © {new Date().getFullYear()} American Plumbing Services, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
