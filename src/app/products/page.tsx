import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-semibold tracking-tight">Products</h1>
      <p className="mt-4 text-foreground/60">Products page content</p>
    </Container>
  );
}
