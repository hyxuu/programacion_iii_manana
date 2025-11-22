class Empleado {
    constructor(nombre) {
        this.nombre = nombre;
    }
    realizarAccion() {
        console.log("Realiza una tarea en el restaurante")
    }
}
class Mesero extends Empleado {}
const mesero = new Mesero('Andrés');
const empleado = new Empleado('Lucía');
mesero.realizarAccion();
empleado.realizarAccion();
