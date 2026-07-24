/*typed.js*/
var typed = new Typed("#sub_ti", {
  strings: ['"Nest"', '"Home"', '"Space"'],
  typeSpeed: 50,
  backSpeed: 50,
  smartBackspace: true,
  backDelay: 1500,
  loop: true,
});

/*canvas shit*/
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.style.backgroundColor = "lightgray";
canvas.style.backgroundImage = "url('Front-end/img/space.png')";
context.imageSmoothingEnabled = false;

/*Secret messages on the console*/

let text_1 = "Welcome to the web Dev how is it going ?";
let text_2 =
  "If you are here probably you are looking for a way to personalize your nest, and you are in the right place.";
console.log(text_1);
console.log(text_2);
console.log(`
╔════════════════════╗
║     MeetGeon       ║
╚════════════════════╝
`);

/*Button script*/
const root = document.querySelector(":root");
const button = document.querySelector(".button");

button.addEventListener("mousemove", (e) => {
  const rect = e.target.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  root.style.setProperty("--gradient-pos-x", `${x}%`);
  root.style.setProperty("--gradient-pos-y", `${y}%`);
});

button.addEventListener("mouseout", () => {
  root.style.setProperty("--gradient-pos-x", `50%`);
  root.style.setProperty("--gradient-pos-y", `50%`);
});
