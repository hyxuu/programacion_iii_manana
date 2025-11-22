function saludar(nombre?: string): string {
    return `Bienvenido ${nombre} al Restaurante Cumbre`;
}
console.log(saludar('Carlos'));
const sumar = (a: number, b: number): number => {
    return a + b;
}
console.log(sumar(5, 5));
function saludarDeNuevo(): void {
    console.log(`Hola`);
    console.log(`Gracias por visitar el Restaurante Cumbre`);
}
saludarDeNuevo();

function calcularPrecioPlato(precioBase: number): number {
    return precioBase * 1.12; 
}
function calcularPrecioPlatoVoid(precioBase: number): void {
    console.log(precioBase * 1.12);
}
console.log(calcularPrecioPlato(5));
calcularPrecioPlatoVoid(7);
