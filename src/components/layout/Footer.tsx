import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";
import Container from "@/components/ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-black/5">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold">{siteConfig.name}</p>
          <p className="mt-1 max-w-xs text-sm text-foreground/60">
            {siteConfig.description}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>

      <Container className="border-t border-black/5 py-6">
        <p className="text-xs text-foreground/50">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
