fotogramastotal = prompt("Ingrese el total de fotogramas de su animacion:");
fps = prompt("Ingrese los cuadros por segundo de su animacion:");
duracion = parseInt(fotogramastotal) / parseInt(fps);
alert("Su animacion dura " + duracion + " segundos");
