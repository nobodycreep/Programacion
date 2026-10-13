let ancho;
let alto;

ancho = Number(prompt("Ingrese el ancho de la imagen en píxeles:"));

alto = Number(prompt("Ingrese el alto de la imagen en píxeles:"));

let pixeles = ancho * alto;

console.log("Ancho: " + ancho + " px");
console.log("Alto: " + alto + " px");
console.log("Total de píxeles: " + pixeles);