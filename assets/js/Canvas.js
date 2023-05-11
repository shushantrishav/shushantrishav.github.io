const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let spots = [];
let hueh = [
  250, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264,
  265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279,
  280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294,
  295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309,
  310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324,
  325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339,
  340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354,
  355, 356, 357, 358, 359, 360, 359, 358, 357, 356, 355, 354, 353, 352,
  351, 350, 349, 348, 347, 346, 345, 344, 343, 342, 341, 340, 339, 338, 337,
  336, 335, 334, 333, 332, 331, 330, 329, 328, 327, 326, 325, 324, 323, 322,
  321, 320, 319, 318, 317, 316, 315, 314, 313, 312, 311, 310, 309, 308, 307,
  306, 305, 304, 303, 302, 301, 300, 299, 298, 297, 296, 295, 294, 293, 292,
  291, 290, 289, 288, 287, 286, 285, 284, 283, 282, 281, 280, 279, 278, 277,
  276, 275, 274, 273, 272, 271, 270, 269, 268, 267, 266, 265, 264, 263, 262,
  261, 260, 259, 258, 257, 256, 255, 254, 253, 252,251,362
];
let hue = 0;

const mouse = {
  y: undefined,
  x: undefined,
};
canvas.addEventListener("mousemove", function (event) {
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
    this.size = Math.random() * 2 + 0.3;
    this.speedX = Math.random() * 5 ;
    this.speedY = Math.random() * 5;
    this.color = "hsl(" + hueh[hue] + ", 100%, 50%)";
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.1) this.size -= 0.03;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 50);
    ctx.fill();
  }
}
function handleParticle() {
  for (let i = 0; i < spots.length; i++) {
    spots[i].update();
    spots[i].draw();
    for (let j = 0; j < spots.length; j++) {
      const dx = spots[i].x - spots[j].x;
      const dy = spots[i].y - spots[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 90) {
        ctx.beginPath();
        ctx.strokeStyle = spots[i].color;
        ctx.lineWidth = spots[i].size / 40;
        ctx.moveTo(spots[i].x, spots[i].y);
        ctx.lineTo(spots[j].x, spots[j].y);
        ctx.stroke();
      }
    }
    if (spots[i].size <= 0.3) {
      spots.splice(i, 1);
      i--;
    }
  }
}
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticle();
  hue++;
  if (hueh[hue] > 360) {
    hue = 0;
  }

  requestAnimationFrame(animate);
}
window.addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  // Infinity();
});
window.addEventListener("mouseout", function () {
  mouse.x = undefined;
  mouse.y = undefined;
});
animate();

