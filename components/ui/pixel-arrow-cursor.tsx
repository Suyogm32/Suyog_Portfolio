/** Classic 11×16 pixel arrow — transparent background, no white box */
const PIXEL_GRID = [
  "X..........",
  "XX.........",
  "XWX........",
  "XWWX.......",
  "XWWWX......",
  "XWWWWX.....",
  "XWWWWWX....",
  "XWWWWWWX...",
  "XWWWWWWWX..",
  "XWWWWWWWWX.",
  "XWWWWWWWWXX",
  "XWWWWX.....",
  "XWWWX......",
  "XWWX.......",
  "XWX........",
  "XX.........",
] as const;

type Pixel = { x: number; y: number; type: "fill" | "stroke" };

function buildPixels(): Pixel[] {
  const pixels: Pixel[] = [];
  PIXEL_GRID.forEach((row, y) => {
    row.split("").forEach((cell, x) => {
      if (cell === "W") pixels.push({ x, y, type: "fill" });
      if (cell === "X") pixels.push({ x, y, type: "stroke" });
    });
  });
  return pixels;
}

const PIXELS = buildPixels();

export function PixelArrowCursor() {
  const fillPixels = PIXELS.filter((p) => p.type === "fill");
  const strokePixels = PIXELS.filter((p) => p.type === "stroke");

  return (
    <svg
      className="retro-cursor__arrow"
      width="22"
      height="32"
      viewBox="0 0 11 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {fillPixels.map((p) => (
        <rect
          key={`f-${p.x}-${p.y}`}
          x={p.x}
          y={p.y}
          width={1}
          height={1}
          fill="var(--cursor-fill)"
        />
      ))}
      {strokePixels.map((p) => (
        <rect
          key={`s-${p.x}-${p.y}`}
          x={p.x}
          y={p.y}
          width={1}
          height={1}
          fill="var(--cursor-stroke)"
        />
      ))}
    </svg>
  );
}
