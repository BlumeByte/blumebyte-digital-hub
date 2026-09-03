import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export function MediaGallery({
  title,
  items,
}: {
  title: string;
  items: { src: string; alt: string }[];
}) {
  const track = useRef<HTMLDivElement>(null);
  const move = (direction: number) =>
    track.current?.scrollBy({
      left: direction * track.current.clientWidth * 0.86,
      behavior: "smooth",
    });

  return (
    <section
      className="container-page section-shell"
      aria-labelledby={`${title.toLowerCase().replaceAll(" ", "-")}-gallery`}
    >
      <div className="mb-7 flex items-end justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Product media
          </p>
          <h2
            id={`${title.toLowerCase().replaceAll(" ", "-")}-gallery`}
            className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl"
          >
            Inside {title}
          </h2>
        </div>
        {items.length > 1 ? (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous image"
              className="gallery-control"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next image"
              className="gallery-control"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </div>
      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]"
        tabIndex={0}
        aria-label={`${title} image gallery`}
      >
        {items.map((item) => (
          <figure
            key={item.src}
            className="min-w-[88%] snap-center overflow-hidden rounded-[2rem] border border-black/10 bg-[#f1f1f1] sm:min-w-[72%]"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
            <figcaption className="px-5 py-4 text-sm text-muted-foreground">{item.alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
