// Animação de bolhas (estrelas)
const canvas = document.getElementById("bg-bubbles");
const ctx = canvas.getContext("2d");

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

let bubbles = Array.from({ length: 30 }, () => ({
  x: Math.random() * width,
  y: Math.random() * height,
  r: Math.random() * 4 + 1,
  d: Math.random() * 2,
}));

function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
  bubbles.forEach((b) => {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
    ctx.fill();
  });
  move();
}

function move() {
  bubbles.forEach((b) => {
    b.y -= b.d;
    if (b.y < 0) {
      b.y = height;
      b.x = Math.random() * width;
    }
  });
}

function animate() {
  draw();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

// Mostrar FAQ
const toggleBtn = document.getElementById("toggle-faq");
const faqList = document.getElementById("faq-list");

toggleBtn.addEventListener("click", () => {
  faqList.style.display = faqList.style.display === "none" ? "block" : "none";
});
