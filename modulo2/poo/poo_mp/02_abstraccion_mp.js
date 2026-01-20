class Cliente {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    verificarEdad() {
        if (this.edad >= 18) {
            console.log("El cliente puede ingresar al restaurante");
        } else {
            console.log("El cliente no puede ingresar sin acompañante adulto");
        }
    }
    mostrar() {
        console.log(this.nombre, this.edad);
    }
}
const cliente1 = new Cliente('Carlos', 17);
cliente1.mostrar();
cliente1.verificarEdad();
