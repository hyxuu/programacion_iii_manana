class Empleado{
    constructor(nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    }
    trabajar(){
        console.log("Empleado trabajando . . .");
    }
    calcularVacaciones(){
        return this.salario*0.15;
    }
    horasExtra(horas){
        return ((this.salario/30)/8)*horas*3;
    }
}
class Programador extends Empleado{
    calcularVacaciones(){
        return this.salario*0.20;
    }

}
class Diseñador extends Empleado{
    calcularVacaciones(){
        return this.salario*0.10;
    }
}



const progPedro = new Programador('Pedro',2000);
const diseJuan = new Diseñador('Juan',1200);
console.log(progPedro.trabajar());
console.log(diseJuan.trabajar());
console.log(progPedro.calcularVacaciones());
console.log(diseJuan.calcularVacaciones());
console.log(progPedro.horasExtra(5));
console.log(diseJuan.horasExtra(4));