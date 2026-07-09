import Image from "next/image";

const IMG = "/images/home";

type Deco = {
  src: string;
  alt: string;
  w: number;
  h: number;
  left: string;
  top: string;
  width: string;
  height?: string;
  z: number;
  priority?: boolean;
};

const decorations: Deco[] = [
  {
    src: `${IMG}/leaf-top-left.png`,
    alt: "",
    w: 104,
    h: 164,
    left: "0",
    top: "3.283%",
    width: "7.2%",
    z: 30,
  },
  {
    src: `${IMG}/home-meat-left.png`,
    alt: "Plate of Australian meat",
    w: 315,
    h: 445,
    left: "-6%",
    top: "16.51%",
    width: "33.851%",
    height: "41.276%",
    z: 20,
  },
  {
    src: `${IMG}/home-meat-right.png`,
    alt: "Plate of Australian meat",
    w: 300,
    h: 500,
    left: "78.167%",
    top: "16.51%",
    width: "28.194%",
    height: "38.086%",
    z: 20,
  },
  {
    src: `${IMG}/leaf-middle-left.png`,
    alt: "",
    w: 133,
    h: 170,
    left: "25%",
    top: "55.285%",
    width: "8.5%",
    z: 26,
  },
  {
    src: `${IMG}/home-meat-middle.png`,
    alt: "Signature plate of Australian meat",
    w: 510,
    h: 490,
    left: "32.639%",
    top: "50.094%",
    width: "35.417%",
    height: "47.842%",
    z: 25,
    priority: true,
  },
  {
    src: `${IMG}/leaf-middle-right.png`,
    alt: "",
    w: 191,
    h: 175,
    left: "58%",
    top: "78.799%",
    width: "12%",
    z: 27,
  },
];

export default function Hero() {
  return (
    <section
      className="relative mx-auto w-full max-w-360 overflow-hidden [container-type:inline-size]"
      style={{
        background:
          "linear-gradient(180deg, #FFF3C4 57.69%, rgba(255, 243, 196, 0) 100%)",
      }}
    >
      <div className="relative aspect-1440/1066 w-full">
        <Image
          src={`${IMG}/home-green-shape.svg`}
          alt=""
          width={1440}
          height={797}
          priority
          className="pointer-events-none absolute left-0 top-0 z-0 w-full select-none"
        />

        {/* Decorative plates & leaves */}
        {decorations.map((d) => (
          <Image
            key={d.src}
            src={d.src}
            alt={d.alt}
            width={d.w}
            height={d.h}
            priority={d.priority}
            className={`pointer-events-none absolute select-none ${
              d.height ? "object-contain" : "h-auto"
            }`}
            style={{
              left: d.left,
              top: d.top,
              width: d.width,
              height: d.height,
              zIndex: d.z,
            }}
          />
        ))}

        {/* Text content */}
        <div className="absolute inset-x-0 top-[13.133%] z-40 flex flex-col items-center px-6 text-center">
          <h1 className="max-w-[80%] text-[5cqw] font-extrabold leading-[1.1667] tracking-[-0.02em] text-white">
            Redefining the Standards of Australian Meat Supply.
          </h1>

          <p className="mt-[2.4cqw] max-w-[50%] font-heading text-[1.25cqw] font-medium leading-[1.5556] text-white/90">
            Premium, pasture-raised Australian beef, lamb, and mutton curated
            for the world&apos;s finest hospitality operators, resorts, and
            international retail programs.
          </p>
          <a
            href="/contact"
            className="mt-[3cqw] rounded-full bg-brand-gold px-[2.2cqw] py-[1cqw] text-[1.25cqw] font-medium text-brand-dark transition-opacity hover:opacity-90"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
