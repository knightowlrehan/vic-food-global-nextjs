export const siteConfig = {
  name: "Vic Food Global",
  description:
    "Vic Food Global — quality food products and global distribution.",
  url: "https://vicfoodglobal.com",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Markets", href: "/markets" },
  { label: "Certifications", href: "/certifications" },
  { label: "FAQ & Support", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];
