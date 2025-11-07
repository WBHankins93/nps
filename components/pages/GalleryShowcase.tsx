import Image from "next/image";

const IMAGES = [
  {
    src: "/adonyi-gabor-DfSDlvCZz40-unsplash.jpg",
    title: "Resort-inspired geometry",
  },
  {
    src: "/artem-militonian-UYW6FZLlnL8-unsplash.jpg",
    title: "Evening ambience lighting",
  },
  {
    src: "/jubeo-hernandez-ZmWLGkPe1Sg-unsplash.jpg",
    title: "Cascading water features",
  },
  {
    src: "/tim-bermudez-sIiyCDSbDpE-unsplash.jpg",
    title: "Infinity edge redesign",
  },
  {
    src: "/adheesha-paranagama-kOYh8C_xLUQ-unsplash.jpg",
    title: "Sleek modern refinish",
  },
  {
    src: "/zhiqiang-wang-uWB32BEOnuw-unsplash.jpg",
    title: "Luxury residential oasis",
  },
] as const;

export default function GalleryShowcase() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#0B1F3F]">
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(70,143,175,0.4),_transparent_55%)]" />
      </div>

      <div className="relative z-10 flex h-full flex-col px-6 py-8 text-white md:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-10">
          <header className="space-y-4 md:space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-white/60 md:text-base">
              Portfolio Preview
            </p>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Capturing the Art of Water and Light
            </h1>
            <p className="text-base leading-relaxed text-white/80 md:text-lg">
              A curated look at recent renovations and maintenance clients across greater New Orleans.
              Each project is an expression of our commitment to precision, ambience, and lasting quality.
            </p>
          </header>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md md:p-7">
            <h2 className="text-xl font-semibold md:text-2xl">Boutique Gallery</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
              Request a full gallery with specification details tailored to your project goals.
            </p>
            <dl className="mt-4 grid grid-cols-2 gap-4 text-sm text-white/70 md:text-base">
              <div>
                <dt className="font-semibold text-white">30+</dt>
                <dd>Luxury pool transformations</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">15</dt>
                <dd>Years of Gulf South expertise</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-6 flex-1">
          <div className="grid h-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {IMAGES.map((image) => (
              <figure
                key={image.src}
                className="group relative h-full min-h-[160px] overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 767px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 py-4 text-sm font-medium tracking-wide text-white md:text-base">
                  {image.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

