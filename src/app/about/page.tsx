import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>
      <p className="mt-4 text-foreground/60">About page content</p>
    </Container>
  );
}
