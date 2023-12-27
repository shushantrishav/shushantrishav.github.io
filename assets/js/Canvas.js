const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let spots = [];
let hueh = Array.from({ length: 361 }, (_, i) => i + 250);
let hue = 0;

const mouse = { y: undefined, x: undefined };
canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 4; i++) {
    spots.push(new Particle());
  }
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 2 + 0.2;
    this.speedX = Math.random() * 4 + 1;
    this.speedY = Math.random() * 4 + 1;
    this.color = `hsl(${hueh[hue]}, 100%, 50%)`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.1) this.size -= 0.03;
  }

  draw(prevX, prevY) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.size;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
  }
}

function handleParticle() {
  for (let i = 0; i < spots.length; i++) {
    const spot = spots[i];
    spot.update();

    if (i > 0) {
      const prevSpot = spots[i - 1];
      spot.draw(prevSpot.x, prevSpot.y);
    }

    if (spot.size <= 0.3) {
      spots.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticle();
  hue = (hue + 1) % hueh.length;
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

window.addEventListener("mouseout", () => {
  mouse.x = undefined;
  mouse.y = undefined;
});

animate();
