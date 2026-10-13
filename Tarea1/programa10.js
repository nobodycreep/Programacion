nombreproyecto = prompt("Ingrese el nombre de su proyecto:");
horastrabajadas = prompt("Ingrese las horas trabajadas en su proyecto:");
valorhora = prompt("Ingrese el valor por hora de su proyecto:");
costorecursos = prompt("Ingrese el costo de los recursos de su proyecto:");
costo = (parseInt(horastrabajadas) * parseInt(valorhora)) 
costototal= (parseInt(costo) - parseInt(costorecursos));
alert("Su participacion en el proyecto " +nombreproyecto+" tiene un costo de " +costo + " por "+ horastrabajadas + " horas trabajadas, su total descontando costos de recursos es de " + costototal);