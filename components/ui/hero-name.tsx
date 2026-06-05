"use client";

type HeroNameProps = {
  name: string;
};

export function HeroName({ name }: HeroNameProps) {
  const words = name.split(" ");

  return (
    <h1
      className="hero-name max-w-full overflow-hidden text-balance break-words font-head font-bold tracking-[-0.05em]"
      style={{
        fontSize: "clamp(2rem, 11vw, 7rem)",
        lineHeight: 1.05,
      }}
    >
      <span className="hero-name__shadow" aria-hidden>
        {name}
      </span>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={
            index === 0 ? "hero-name__word hero-name__word--accent" : "hero-name__word"
          }
          style={{ animationDelay: `${0.25 + index * 0.14}s` }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </h1>
  );
}
