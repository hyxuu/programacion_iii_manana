for(let i=1; i <=10;i++){
    console.log("numero", i);
}

suma=0;
for (let i=1; i <=10;i++){
    suma+=i;
}
console.log("sumatoria indices", suma);

for (let i = 1; i <= 10; i++) {
    console.log(`4 * ${i} = ${4 * i}`);
}

let nombre="Francisco";
for(let i=0; i <nombre.length;i++){
    console.log(nombre[i]);
}

for (let i=1; i <=10; i++) {
    console.log("cuadrado de", i, "es", i**2)
}

console.log("Bucle while");
let i=1
while(1<=6){
    console.log("indice", i)
    i++;
}

let miArreglo=[2,3,1,2,3];
let indice=1
while(indice<miArreglo.length){
    console.log("valor",indice,"es", miArreglo[indice]);
    indice++;
}

let numero=1
while (numero<=10){
    if(numero%2===0)
    console.log("numero",numero,"es par");
    numero++; 
}

let x = 5
do {
    console.log("x es: ", x)
    x--;
} while(x!=0);


let mult=1
while(mult<=10){
    console.log(mult, "+5=",mult*5);
    mult++;
}

let arreglo5=[1,2,3,4,5];
let indi=0
let mayor=0
while(indi>arreglo5.length){
    if(arreglo5[indi]>mayor){
        mayor=arreglo5[indi]
    }
    indi++;
}
console.log(mayor);



