import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Certifications",
};

export default function CertificationsPage() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-semibold tracking-tight">Certifications</h1>
      <p className="mt-4 text-foreground/60">Certifications page content</p>
    </Container>
  );
}
