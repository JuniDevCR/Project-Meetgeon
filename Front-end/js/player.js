const player = new Image();
player.src = "/Front-end/Assets/qwerty.webp";

player.onload = function () {
  context.drawImage(player, 0, 0, 100, 100);
};

// Variables necesarias
let isPlaying = false;
let animationId;

let x = 0;
let y = 0;
let vx = 0;
let vy = 0;

// actualizar el juego
function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  x += vx;
  y += vy;

  context.drawImage(player, x, y, 100, 100);

  animationId = requestAnimationFrame(update);
}
// Controlador del boton de start
const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
  if (!isPlaying) {
    isPlaying = true;
    startButton.innerText = "Pause";

    cancelAnimationFrame(animationId);
    update();
  } else {
    isPlaying = false;
    startButton.innerText = "Continue";
    cancelAnimationFrame(animationId);

    vx = 0;
    vy = 0;
  }
});

// Trackeadores de  las teclas
addEventListener("keydown", function (e) {
  if (!isPlaying) return;

  if (e.code == "KeyD") vx = 5;
  if (e.code == "KeyA") vx = -5;
  if (e.code == "KeyW") vy = -5; // Restar en Y sube al personaje
  if (e.code == "KeyS") vy = 5; // Sumar en Y baja al personaje
});

addEventListener("keyup", function (e) {
  if (e.code == "KeyD") vx = 0;
  if (e.code == "KeyA") vx = 0;
  if (e.code == "KeyW") vy = 0;
  if (e.code == "KeyS") vy = 0;
});
