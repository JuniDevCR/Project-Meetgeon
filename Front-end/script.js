/*typed.js*/
var typed = new Typed("#sub_ti", {
  strings: ['"Nest"', '"Home"', '"Space"'],
  typeSpeed: 50, // Velocidad al escribir
  backSpeed: 50, // Velocidad al borrar
  smartBackspace: true, // ¡Esta es la clave! Solo borrará la última palabra
  backDelay: 1500, // Tiempo que se queda la palabra fija antes de borrarse (1.5 segundos)
  loop: true, // Para que se repita infinitamente
});

/*canvas shit*/

let canvas = document.getElementById("canvas");

canvas.style.backgroundColor = "lightgray";

let context = canvas.getContext("2d");

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

/*Comandos nuevos
let = es para crear variables como piton
console.log = es como el print de piton
promt = print xd
if & else = funcionan literal igual pero se pone {}pa ver donde empieza o termina
function = es para crear funciones y se pueden invocar cuando uno quiera
const = es como let pero no se puede cambiar el valor de la variable es constante xd
[] = es para crear listas

*/
