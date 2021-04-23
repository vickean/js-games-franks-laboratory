// https://www.youtube.com/watch?v=CY0HE277IBM&list=PLYElE_rzEw_sowQGjRdvwh9eAEt62d_Eu @ 19:41
const canvas = document.getElementById("canvas1");
const fpsCounter = document.getElementById("fps-counter");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
let FRAME_DELTA = 0;
let FPS = 0;

const IDLE_AMIMATION = { maxColumn: 6, row: 0 };
const JUMP_AMIMATION = { maxColumn: 6, row: 1 };
const FALL_AMIMATION = { maxColumn: 6, row: 2 };
const RUN_AMIMATION = { maxColumn: 8, row: 3 };
const DIZZY_AMIMATION = { maxColumn: 10, row: 4 };
const SIT_AMIMATION = { maxColumn: 4, row: 5 };
const ROLL_AMIMATION = { maxColumn: 6, row: 6 };
const BITE_AMIMATION = { maxColumn: 6, row: 7 };
const KO_AMIMATION = { maxColumn: 11, row: 8 };
const GETHIT_AMIMATION = { maxColumn: 3, row: 9 };

const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWidth = 575; // divide spritesheet width by image columns
const spriteHeight = 523; // divide spritesheet height by image rows
let frameX = 0;
let frameY = 1;

const animate = () => {
  const benchmarkStart = performance.now();
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //   ctx.fillRect(50, 50, 100, 100);
  //   ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  ctx.drawImage(
    playerImage,
    frameX * spriteWidth, // cropping x
    frameY * spriteHeight, // cropping y
    spriteWidth, // cropping width
    spriteHeight, // cropping height
    0, // cropped position x
    0, // cropped position y
    CANVAS_WIDTH, // cropped position width
    CANVAS_HEIGHT // cropped position height
  );

  if (frameX < IDLE_AMIMATION.maxColumn) frameX++;
  else frameX = 0;

  FRAME_DELTA = performance.now() - benchmarkStart;
  FPS = 1000 / FRAME_DELTA;
  fpsCounter.innerHTML = FPS;

  requestAnimationFrame(animate);
};

animate();
