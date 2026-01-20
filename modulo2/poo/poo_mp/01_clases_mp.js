class Plato {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    preparar() {
        console.log(`${this.nombre} (${this.tipo}) está siendo preparado`);
    }

    servir() {
        console.log(`${this.nombre} (${this.tipo}) está siendo servido`);
    }

    finalizar() {
        console.log(`${this.nombre} (${this.tipo}) ha sido entregado al cliente`);
    }
}

const miPlato = new Plato("Hamburguesa Especial", "Comida Rápida");
miPlato.preparar();
miPlato.servir();
miPlato.finalizar();
