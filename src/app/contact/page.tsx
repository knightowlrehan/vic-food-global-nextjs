import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 text-foreground/60">Contact page content</p>
    </Container>
  );
}
