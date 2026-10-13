let nombre;
let proyecto;
let ancho;
let alto;
let pixeles;

nombre = prompt("Ingrese su nombre:");

proyecto = prompt("Ingrese el nombre de su proyecto multimedia:");

ancho = Number(prompt("Ingrese el ancho de la imagen en píxeles:"));

alto = Number(prompt("Ingrese el alto de la imagen en píxeles:"));

pixeles = ancho * alto;

console.log("================================");

console.log("     MI PROYECTO MULTIMEDIA");

console.log("================================");

console.log("Estudiante: " + nombre);

console.log("Proyecto: " + proyecto);

console.log("");

console.log("Resolución:");

console.log(ancho + " x " + alto + " px");

console.log("");

console.log("Total de píxeles: " + pixeles);

console.log("================================");
console.log("Programa desarrollado en JavaScript.");