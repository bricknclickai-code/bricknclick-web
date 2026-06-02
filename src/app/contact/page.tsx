import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SplitReveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact — Start a project",
  description:
    "Tell Bricknclick what you're working on. We respond to every brief within 24 hours — even if we're not the right fit.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-40 pb-32">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <span className="mono text-[var(--muted-foreground)]">[ Start a project ]</span>
          <h1 className="display mt-6 text-[clamp(48px,9vw,160px)]">
            <SplitReveal text="Let's" />
            <SplitReveal text="talk." delay={0.1} className="text-[var(--color-accent)]" />
          </h1>
          <p className="mt-10 max-w-md text-balance text-lg text-[var(--muted-foreground)]">
            Tell us what you're working on. The more concrete, the better.
            We'll come back within 24 hours with a take.
          </p>

          <div className="mt-16 space-y-8">
            <div>
              <p className="mono text-[var(--color-accent)]">WhatsApp · fastest</p>
              <a
                href="https://wa.me/919019508519?text=Hi%20Bricknclick%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open whatsapp"
                className="underline-grow display mt-2 inline-block text-2xl md:text-3xl"
              >
                +91 90195 08519
              </a>
            </div>
            <div>
              <p className="mono text-[var(--muted-foreground)]">Email</p>
              <a
                href="mailto:info@bricknclick.com"
                className="underline-grow display mt-2 inline-block text-2xl md:text-3xl"
              >
                info@bricknclick.com
              </a>
            </div>
            <div>
              <p className="mono text-[var(--muted-foreground)]">Studio</p>
              <p className="display mt-2 text-2xl md:text-3xl">India · Worldwide</p>
            </div>
            <div>
              <p className="mono text-[var(--muted-foreground)]">Hours</p>
              <p className="display mt-2 text-2xl md:text-3xl">Mon–Fri · 10:00–19:00 IST</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
