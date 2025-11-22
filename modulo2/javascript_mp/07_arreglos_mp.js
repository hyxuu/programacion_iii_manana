console.log("ARRAYS DEL RESTAURANTE CUMBRE");
let platos = ["Ceviche", "Arroz con mariscos", "Lomo saltado", "Ensalada César"];
let menuVacio = new Array();
let menuVacio2 = [];
console.log("Menú original", platos);
console.log(menuVacio);
console.log(menuVacio2);
console.log("Acceso a los elementos del menú");
console.log(platos[0]);
console.log(platos[3]);

console.log("Modificar elementos del menú");
platos[0] = "Sopa marinera";
console.log(platos);
console.log("Agregar plato al menú");
platos.push("Parrillada mixta");
console.log(platos);
console.log("Agregar plato al inicio del menú");
platos.unshift("Camarones apanados");
console.log(platos);
console.log("Eliminar el último plato del menú");
platos.pop();
console.log("Eliminar el primer plato del menú");
platos.shift();
console.log(platos);

console.log("Iteración del menú");
let indice = 0;
console.log("Iteración con While");
while(indice < platos.length){
    console.log("Plato", indice, "es", platos[indice]);
    indice++;
}
console.log("Iteración con For");
for (let i = 0; i < platos.length; i++){
    console.log(platos[i]);
}
console.log("Iteración con For ... of");
for (let plato of platos){
    console.log(plato);
}
console.log("Iteración con For Each");
platos.forEach(function(plato, indice){
    console.log(indice, plato);
});
