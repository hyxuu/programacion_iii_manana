class Empleado{
    constructor(nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    }
    trabajar(){
        console.log("Empleado atendiendo en el restaurante . . .");
    }
    calcularPropina(){
        return this.salario * 0.15;
    }
    horasExtra(horas){
        return ((this.salario/30)/8)*horas*3;
    }
}
class Chef extends Empleado{
    calcularPropina(){
        return this.salario * 0.20;
    }
}
class Mesero extends Empleado{
    calcularPropina(){
        return this.salario * 0.10;
    }
}
const chefPedro = new Chef('Pedro', 2000);
const meseroJuan = new Mesero('Juan', 1200);

chefPedro.trabajar();
meseroJuan.trabajar();
console.log(chefPedro.calcularPropina());
console.log(meseroJuan.calcularPropina());
console.log(chefPedro.horasExtra(5));
console.log(meseroJuan.horasExtra(4));
