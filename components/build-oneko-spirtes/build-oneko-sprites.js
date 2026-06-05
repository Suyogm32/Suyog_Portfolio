import sharp from "sharp";

const ROW_BOUNDS = [
  { y0: 16, y1: 199, frames: [0, 1, 2, 3, 4, 5, 6, 9] },
  { y0: 235, y1: 406, frames: [0, 1, 2, 3, 4, 5, 12, 12] },
  { y0: 451, y1: 633, frames: [0, 1, 2, 3, 4, 8, 9, 10] },
  { y0: 664, y1: 843, frames: [0, 1, 2, 3, 4, 7, 8, 9] },
];
const MIN_W = 40;
const CELL = 96;
const COLS = 8;

async function getBoxes(y0, y1) {
  const { data, info } = await sharp("public/profile_image.png")
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, channels } = info;
  const boxes = [];
  let inSprite = false;
  let minX = 0;

  for (let x = 0; x < width; x++) {
    let hasPixel = false;
    for (let y = y0; y <= y1; y++) {
      const i = (y * width + x) * channels;
      if (data[i] > 30 || data[i + 1] > 30 || data[i + 2] > 30) {
        hasPixel = true;
        break;
      }
    }
    if (hasPixel && !inSprite) {
      minX = x;
      inSprite = true;
    }
    if (!hasPixel && inSprite) {
      const w = x - minX;
      if (w >= MIN_W) boxes.push({ x: minX, w, y0, y1 });
      inSprite = false;
    }
  }
  return boxes;
}

const composites = [];
for (let ri = 0; ri < 4; ri++) {
  const { y0, y1, frames } = ROW_BOUNDS[ri];
  const boxes = await getBoxes(y0, y1);
  for (let ci = 0; ci < COLS; ci++) {
    const fi = frames[ci] ?? frames[0] ?? 0;
    const b = boxes[fi] ?? boxes[0];
    const buf = await sharp("public/profile_image.png")
      .extract({
        left: b.x,
        top: b.y0,
        width: b.w,
        height: b.y1 - b.y0 + 1,
      })
      .resize(CELL, CELL, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();
    composites.push({ input: buf, left: ci * CELL, top: ri * CELL });
  }
}

const sheetW = COLS * CELL;
const sheetH = 4 * CELL;

await sharp({
  create: {
    width: sheetW,
    height: sheetH,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
})
  .composite(composites)
  .png()
  .toFile("public/oneko-sprites.png");

await sharp("public/oneko-sprites.png").gif().toFile("public/oneko.gif");

console.log(`Wrote public/oneko.gif (${sheetW}x${sheetH}) from profile_image.png`);
