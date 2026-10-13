pixeles = prompt("Ingrese el tamaño en pixeles de su imagen:");
resolucionppi = prompt("Ingrese la resolución en ppi(pixeles por pulgada) de su imagen:");
pulgadas = parseInt(pixeles) / parseInt(resolucionppi);
alert("El tamaño de la imagen en pulgadas es: " + pulgadas + " pulgadas");