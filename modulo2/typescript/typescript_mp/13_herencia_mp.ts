import { Plato } from "./11_herencia_mp";

export class Especial extends Plato {
    getTipoPreparacion(): void {
        console.log('Preparación especial del chef');
    }
}

const miEspecial = 
    new Especial('Parrillada Cumbre', 'Especialidad de la casa');
console.log(miEspecial.nombre);
console.log(miEspecial.tipo);
miEspecial.servirse();
miEspecial.getTipoPreparacion();
