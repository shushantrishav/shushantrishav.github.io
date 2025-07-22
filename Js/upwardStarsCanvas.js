(() => {
  const canvas = document.getElementById("canvas2");
  const ctx = canvas.getContext("2d");

  // Offscreen canvas for trails
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

  let stars = [];

  class Star {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 3 + 0.8;
      this.speed = Math.random() * 1.5 + 0.5;

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
      this.y -= this.speed;
      if (this.size > 0.2) this.size -= 0.015; // faster shrink
    }

    draw(ctx) {
      const tailLength = 8;
      const tailX = this.x;
      const tailY = this.y + tailLength;

      const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
      gradient.addColorStop(0, this.color);
      gradient.addColorStop(1, this.color.replace(/\d+%\)/, "0%)"));

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
    for (let i = 0; i < 3; i++) {
      // spawn more stars
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height + canvas.height / 2; // spawn across more vertical range
      stars.push(new Star(x, y));
    }
  }

  function animate() {
    // Fade trails
    offCtx.fillStyle = "rgba(0, 0, 0, 0.3)"; // slightly faster fade
    offCtx.globalCompositeOperation = "destination-out";
    offCtx.fillRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);

    // Draw stars
    offCtx.globalCompositeOperation = "source-over";
    handleStars(offCtx);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(offscreenCanvas, 0, 0);

    requestAnimationFrame(animate);
  }

  animate();
  setInterval(spawnAutoStars, 80);
})();