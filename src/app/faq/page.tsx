import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "FAQ & Support",
};

export default function FaqPage() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-semibold tracking-tight">FAQ &amp; Support</h1>
      <p className="mt-4 text-foreground/60">FAQ &amp; Support page content</p>
    </Container>
  );
}
