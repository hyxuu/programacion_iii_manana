let temperatura = 35;

if(temperatura>30){
    console.log("Hace calor, recomendamos terraza en Cumbre");
}

let clave_acceso = "cumbre2023";
if(clave_acceso==="cumbre2023"){
    console.log("Acceso concedido al sistema de Cumbre");
} else{
    console.log("Acceso denegado al sistema de Cumbre");
}

let calificacion_cliente = 7;
if(calificacion_cliente>=9){
    console.log("Excelente experiencia en Cumbre");
} else if (calificacion_cliente>=6) {
    console.log("Buena experiencia en Cumbre");
} else {
    console.log("Mejoraremos en Cumbre");
}


let edad_cliente = 20;
let tiene_identificacion = true;
if (edad_cliente>=18){
    if(tiene_identificacion){
        console.log("Puede ordenar bebidas alcoholicas en Cumbre");
    } else {
        console.log("Necesita identificacion para bebidas alcoholicas en Cumbre");
    }
} else {
    console.log("Es menor de edad para bebidas alcoholicas en Cumbre");
}

// Estructura Switch
let dia_semana = "lunes";
switch(dia_semana){
    case "lunes":
        console.log("Especial de lunes en Cumbre: Pasta");
        break;
    case "viernes":
        console.log("Especial de viernes en Cumbre: Mariscos");
        break;
    default:
        console.log("Menu regular en Cumbre");
}

let precio_plato1 = 20;
let precio_plato2 = 30;
let precio_plato3 = 60;
switch(precio_plato3){
    case(precio_plato3):
        console.log("Plato premium en Cumbre");
        break;
    case(precio_plato1):
        console.log("Plato economico en Cumbre");
        break;
    default:
        console.log("Plato estandar en Cumbre")
}

let precio_pasta = 30;
let precio_carne = 40;
let precio_mariscos = 50;
mayor_precio = 0;
if (precio_pasta > precio_carne){
    mayor_precio = precio_pasta;
} if(precio_mariscos > mayor_precio){
    mayor_precio = precio_mariscos;
}
console.log("El plato mas caro en Cumbre es" , mayor_precio);
