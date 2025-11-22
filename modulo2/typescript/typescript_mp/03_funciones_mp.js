function saludar(nombre) {
    return "Bienvenido ".concat(nombre, " al Restaurante Cumbre");
}
console.log(saludar('Carlos'));
var sumar = function (a, b) {
    return a + b;
};
console.log(sumar(5, 5));
function saludarDeNuevo() {
    console.log("Hola");
    console.log("Gracias por visitar el Restaurante Cumbre");
}
saludarDeNuevo();
function calcularPrecioPlato(precioBase) {
    return precioBase * 1.12;
}
function calcularPrecioPlatoVoid(precioBase) {
    console.log(precioBase * 1.12);
}
console.log(calcularPrecioPlato(5));
calcularPrecioPlatoVoid(7);
