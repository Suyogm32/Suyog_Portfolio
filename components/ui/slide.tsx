import Image, { type StaticImageData } from "next/image";

type PhraseProps = {
  src: string | StaticImageData;
  text?: string;
};

type SlideProps = {
  src: string | StaticImageData;
  text?: string;
};

export function Slide({ src, text = "Front End Developer" }: SlideProps) {
  return (
    <div className="relative flex shrink-0 whitespace-nowrap">
      <Phrase src={src} text={text} />
      <Phrase src={src} text={text} />
      <Phrase src={src} text={text} />
    </div>
  );
}

export function Phrase({ src, text = "Front End Developer" }: PhraseProps) {
  return (
    <div className="flex items-center gap-5 px-5">
      <p className="font-head text-[7.5vw] uppercase text-foreground">{text}</p>
      <span className="relative aspect-[4/2] h-[7.5vw] overflow-hidden border-2 border-black shadow-sm">
        <Image
          src={src}
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </span>
    </div>
  );
}
