export class Plato {
    public nombre: string;
    public tipo: string;
    constructor(
        nombre: string,
        tipo: string
    ){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    servirse(): void {
        console.log(`El plato ${this.nombre} (${this.tipo}) está listo para servirse en el Restaurante Cumbre.`);
    }
}
export class Postre extends Plato {}
const platoPrincipal = new Plato("Aji de Gallina", "Fondo");
const miPostre = new Postre("Mazamorra Morada", "Dulce");
platoPrincipal.servirse();
miPostre.servirse();