const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Offscreen canvas for trail buffer
const offscreenCanvas = document.createElement("canvas");
const offCtx = offscreenCanvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  offscreenCanvas.width = canvas.width;
  offscreenCanvas.height = canvas.height;
}
resize();
window.addEventListener("resize", resize);

let bhX = window.innerWidth / 2;
let bhY = 0;
let stars = [];

const mouse = { x: null, y: null };
canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  const numStars = Math.random() < 0.5 ? 1 : 0;
  for (let i = 0; i < numStars; i++) {
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;
    stars.push(new Star(mouse.x + offsetX, mouse.y + offsetY));
  }
});

class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 0.8;
    this.speed = Math.random() * 3 + 0.8;

    const starColors = [
      { h: 285, s: 96, l: 84 },
      { h: 285, s: 100, l: 80 },
      { h: 290, s: 98, l: 82 },
      { h: 280, s: 70, l: 90 },
      { h: 295, s: 60, l: 95 },
      { h: 285, s: 50, l: 98 },
      { h: 270, s: 90, l: 85 },
      { h: 275, s: 85, l: 88 },
      { h: 300, s: 90, l: 85 },
      { h: 305, s: 85, l: 88 },
    ];

    const selectedColor =
      starColors[Math.floor(Math.random() * starColors.length)];
    this.color = `hsl(${selectedColor.h}, ${selectedColor.s}%, ${selectedColor.l}%)`;
  }

  update() {
    const dx = bhX - this.x;
    const dy = bhY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const pull = this.speed / (dist / 50 + 2);
    this.x += dx * pull * 0.01;
    this.y += dy * pull * 0.01;
    if (this.size > 0.2) this.size -= 0.01;
  }

  draw(ctx) {
    const tailLength = 6;
    const angle = Math.atan2(bhY - this.y, bhX - this.x);
    const tailX = this.x - Math.cos(angle) * tailLength;
    const tailY = this.y - Math.sin(angle) * tailLength;

    const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, this.color.replace(/[\d.]+\)$/g, "0)")); // fade out

    ctx.beginPath();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = this.size;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(tailX, tailY);
    ctx.stroke();
  }
}

function handleStars(ctx) {
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].draw(ctx);
    if (stars[i].size < 0.2 || stars[i].y < -10) {
      stars.splice(i, 1);
      i--;
    }
  }
}

function spawnAutoStars() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * (canvas.height * 0.75) + canvas.height * 0.25;
  stars.push(new Star(x, y));
}

function animate() {
  // Step 1: Fade old trails more aggressively
  offCtx.fillStyle = "rgba(0, 0, 0, 0.25)"; // Increase this for faster fading
  offCtx.globalCompositeOperation = "destination-out";
  offCtx.fillRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);

  // Step 2: Draw stars
  offCtx.globalCompositeOperation = "source-over";
  handleStars(offCtx);

  // Step 3: Clear visible canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(offscreenCanvas, 0, 0);

  requestAnimationFrame(animate);
}

animate();
setInterval(spawnAutoStars, 90);