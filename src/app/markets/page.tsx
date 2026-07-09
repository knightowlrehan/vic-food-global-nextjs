import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Markets",
};

export default function MarketsPage() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-semibold tracking-tight">Markets</h1>
      <p className="mt-4 text-foreground/60">Markets page content</p>
    </Container>
  );
}
