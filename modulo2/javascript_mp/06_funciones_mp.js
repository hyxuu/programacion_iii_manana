console.log("FUNCIONES DEL RESTAURANTE CUMBRE");
console.log("Inicio");
function saludar(){
    console.log("Bienvenido al Restaurante Cumbre");
}
saludar();

console.log("PRECIO:");
function calcularTotal(precio, cantidad){
    return precio * cantidad
}
let total = calcularTotal(8.5,3);
console.log("El total de la orden es", total);

console.log("DESCUENTOS:");
const descuento = (total, porcentaje)=>{
    return total - (total * porcentaje / 100)
}
let totalDescuento = descuento(50,10);
console.log("El total con descuento es", totalDescuento);

console.log("PROPINAS:");
const propina = total => total * 0.1;
console.log("Propina sugerida de 50 es:", propina(50));

console.log("MENU PRINCIPAL:");
function saludarCliente(nombre, saludo="Bienvenido a Cumbre"){
    return saludo + " " + nombre;
}
let saludo1 = saludarCliente("Danna");
let saludo2 = saludarCliente("Danna","Buenos días");
console.log(saludo1);
console.log(saludo2);

function verificarMesa(numero) {
    if (numero%2===0) {
        return "La mesa " + numero + " está disponible";
    } else {
        return "La mesa " + numero + " está ocupada";
    }
}
console.log(verificarMesa(7));  
console.log(verificarMesa(10)); 
console.log(verificarMesa(2));  
