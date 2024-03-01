let valor = prompt("Digite un numero")
if ((valor % 2) == 0) {
    alert("Es numero " + valor + " es par")
}
else {
    alert("Es numero " + valor + " es Impar")
}


let dia = prompt("Digite el dia de la semana")
if ((dia == "sabado") || (dia == "domingo")) {
    alert("El dia corresponde a un fin de semana")
}
else {
    alert("El día " + dia + " es un día laboral")
}
let dia = prompt("Digite el dia de la semana")
if ((dia == "sabado") || (dia == "domingo")) {
    alert("El dia corresponde a un fin de semana")
}
else if ((dia == "lunes") || (dia == "martes") || (dia == "miercoles") || (dia == "jueves") || (dia == "viernes")) {
    alert("El día " + dia + " es un día laboral")
}
else {
    alert("la palabra " + dia + " no corresponde a un dia de la semana")
}