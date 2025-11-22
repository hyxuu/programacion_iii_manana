import { Plato, Postre } from "./11_herencia_mp";

const miPlato = new Plato('Encebollado', 'Mariscos');
console.log(miPlato.nombre);
console.log(miPlato.tipo);
miPlato.servirse();

const miPostre = new Postre('Tres leches', 'Dulce');
console.log(miPostre.nombre);
console.log(miPostre.tipo);
miPostre.servirse();
