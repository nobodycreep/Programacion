let nombre = prompt("Ingrese su nombre:");

let proyecto = prompt("Ingrese el nombre de su proyecto multimedia:");

let ancho = Number(prompt("Ingrese el ancho de la imagen en píxeles:"));

let alto = Number(prompt("Ingrese el alto de la imagen en píxeles:"));

let pixeles = ancho * alto;

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