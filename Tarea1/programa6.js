let duracionsegundos = prompt("Ingrese la duración en segundos de su animacion:");
let fps = prompt("Ingrese los cuadros por segundo de su animacion:");
let fotogramastotal = parseInt(duracionsegundos) * parseInt(fps);
alert("Su animacion tiene " + fotogramastotal);