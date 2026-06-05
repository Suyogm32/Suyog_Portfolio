import { marqueeSlides } from "@/data/marquee";
import { Slide } from "@/components/ui/slide";

export function Marquee() {
  return (
    <section
      aria-label="Skills marquee"
      className="overflow-hidden border-y-2 border-black bg-accent py-6"
    >
      <div className="animate-marquee flex w-max">
        {marqueeSlides.map((slide) => (
          <Slide key={slide.src} src={slide.src} text={slide.text} />
        ))}
        {marqueeSlides.map((slide) => (
          <Slide key={`${slide.src}-dup`} src={slide.src} text={slide.text} />
        ))}
      </div>
    </section>
  );
}
