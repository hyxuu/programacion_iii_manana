console.log("FUNCIONES DEL RESTAURANTE CUMBRE");
console.log("FORMA CLASICA");
function saludar(){
    console.log("Bienvenido al Restaurante Cumbre");
}
saludar();

console.log("FORMA CON PARAMETROS Y RETORNO");
function calcularTotal(precio, cantidad){
    return precio * cantidad
}
let total = calcularTotal(8.5,3);
console.log("El total de la orden es", total);

console.log("FUNCION FLECHA");
const descuento = (total, porcentaje)=>{
    return total - (total * porcentaje / 100)
}
let totalDescuento = descuento(50,10);
console.log("El total con descuento es", totalDescuento);

console.log("FUNCION RETORNO DIRECTO");
const propina = total => total * 0.1;
console.log("Propina sugerida de 50 es:", propina(50));

console.log("FUNCION CON PARAMETROS POR DEFECTO");
function saludarCliente(nombre, saludo="Bienvenido a Cumbre"){
    return saludo + " " + nombre;
}
let saludo1 = saludarCliente("Francisco");
let saludo2 = saludarCliente("Francisco","Buenos días");
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
