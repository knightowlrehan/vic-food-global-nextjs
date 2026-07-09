"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site";
import Logo from "@/components/layout/Logo";

const navType =
  "font-sans text-[16px] font-medium leading-6 tracking-[0.005em]";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-360 items-stretch justify-between px-6 lg:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-stretch gap-6 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center px-4 transition-colors ${navType} ${
                  active
                    ? "rounded-b-3xl bg-[#FFF3C4] text-brand-dark"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Get In Touch (desktop) */}
        <div className="hidden items-center lg:flex">
          <Link
            href="/contact"
            className={`rounded-full bg-brand-gold px-6 py-3 text-brand-dark transition-opacity hover:opacity-90 ${navType}`}
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav className="mx-4 rounded-2xl bg-brand-cream p-3 shadow-lg lg:hidden">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`block rounded-xl px-4 py-2.5 text-brand-dark transition-colors hover:bg-black/5 ${navType} ${
                  active ? "bg-black/5 font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={`mt-2 block rounded-full bg-brand-gold px-6 py-3 text-center text-brand-dark ${navType}`}
          >
            Get In Touch
          </Link>
        </nav>
      )}
    </header>
  );
}
