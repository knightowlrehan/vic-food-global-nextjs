import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" aria-label="VicFoods home" className="flex items-center">
      <Image
        src="/icons/logo.svg"
        alt="VicFoods"
        width={145}
        height={44}
        priority
      />
    </Link>
  );
}
