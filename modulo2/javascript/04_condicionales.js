let temperatura = 35;

if(temperatura>30){
    console.log("hace calor");
}

password = "pass123";
if(password==="pass12345"){
    console.log("Usuario logueado");
} else{
    console.log("Acceso denegado");
}

let nota =7;
if(nota>=9){
    console.log("Sobresaliente");
} else if (nota>=6) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}


let edad=20;
let tiene_licencia=true;
if (edad>=18){
    if(tiene_licencia){
        console.log("Puede Conducir");
    } else {
        console.log("Necesita Licencia para conducir");
    }
} else {
    console.log("Es menor de edad");
}

// Estructura Switch
let dia = "lunes";
switch(dia){
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Ultimo dia laboral");
        break;
    default:
        console.log("Dia normal");  
} 

let num1=20;
let num2=30;
let num3=60;
switch(num3){
    case(num3):
        console.log("El numero es mayor");
        break;
    case(num1):
        console.log("El numero es menor");
        break;
    default:
        console.log("Es un numero normal")
}

let a=30;
let b = 40;
let c = 50;
mayor=0;
if (a>b){
    mayor=a;
} if(c>mayor){
    mayor=c;
}
console.log("el numero mayor es" , mayor);

