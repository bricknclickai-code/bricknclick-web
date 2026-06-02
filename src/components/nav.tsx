"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Magnetic } from "./magnetic";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 240, damping: 28 }}
        className={`flex items-center justify-between gap-4 transition-all duration-500 ${
          scrolled
            ? "w-full max-w-3xl rounded-full border border-[var(--border-c)] bg-[var(--background)]/70 px-3 py-2 backdrop-blur-xl"
            : "w-full max-w-6xl px-6 py-3"
        }`}
      >
        <Logo size="sm" />

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <li key={l.href}>
                <Magnetic strength={0.25} radius={70}>
                  <Link
                    href={l.href}
                    data-cursor={l.label.toLowerCase()}
                    className={`relative inline-flex items-center rounded-full px-3 py-1.5 text-sm transition-colors ${
                      active
                        ? "text-[var(--foreground)]"
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {active ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-[var(--card)]"
                        transition={{ type: "spring", stiffness: 320, damping: 30 }}
                      />
                    ) : null}
                    <span className="relative">{l.label}</span>
                  </Link>
                </Magnetic>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            data-cursor="let's talk"
            className="hidden md:inline-flex h-9 items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
          >
            Start a project
            <span aria-hidden>→</span>
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((s) => !s)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-c)]"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={open ? { clipPath: "inset(0% 0% 0% 0%)" } : { clipPath: "inset(0% 0% 100% 0%)" }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-40 flex flex-col bg-[var(--background)] md:hidden"
      >
        <div className="flex-1 px-6 pt-28">
          <ul className="flex flex-col gap-1">
            {links.map((l, i) => (
              <li key={l.href} className="overflow-hidden border-b border-[var(--border-c)] py-2">
                <motion.div
                  initial={{ y: "110%" }}
                  animate={open ? { y: "0%" } : { y: "110%" }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    className="display block py-4 text-6xl"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 px-6 pb-10 text-sm text-[var(--muted-foreground)]">
          <div>
            <p className="mono mb-2 text-[var(--color-accent)]">WhatsApp · fastest</p>
            <a
              href="https://wa.me/919019508519?text=Hi%20Bricknclick%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="underline-grow"
            >
              +91 90195 08519
            </a>
          </div>
          <div>
            <p className="mono mb-2">Email</p>
            <a href="mailto:info@bricknclick.com" className="underline-grow">
              info@bricknclick.com
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
