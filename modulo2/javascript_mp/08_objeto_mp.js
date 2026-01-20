console.log("OBJETOS DEL RESTAURANTE CUMBRE");
let plato = {
    nombre: "Ceviche Mixto",
    precio: 12.50,
    categoria: "Mariscos"
};

console.log(plato);
console.log(plato.nombre);
console.log(plato.categoria);
console.log(plato["precio"]);

console.log("Modificación de una clave del objeto");
plato.nombre = "Ceviche Especial";
console.log(plato);
console.log("Incluir clave al objeto");
plato.disponible = true;
console.log(plato);
console.log("Eliminar clave del objeto");
delete plato.disponible;
console.log(plato);

console.log("Recorrer un objeto");
for(let clave in plato){
    console.log(clave);
}
console.log("Mostrar claves con Object.keys");
console.log(Object.keys(plato));
console.log("Mostrar valores con Object.values");
console.log(Object.values(plato));
console.log("Objetos Anidados");
let menu = {
    nombre: "Menú del Día",
    chef: "Carlos Ramírez",
    detalles:{
        tipo: "Almuerzo Ejecutivo",
        horario: "12:00 - 15:00",
        ubicacion: "Restaurante Cumbre - Quito"
    },
    platos:[
        {
            nombre: "Arroz con camarones",
            precio: 10.50 
        },
        {
            nombre: "Filete de pollo a la plancha",
            precio: 9.00
        },
    ]
};
console.log("Menú: ", menu);
