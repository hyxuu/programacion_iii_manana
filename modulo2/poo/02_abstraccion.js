class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    mayorEdad(){
        if(this>=18){
            console.log("es mayor de edad")
        }else{
            console.log("es menor de edad")
        }
    }
    mostrar(){
        console.log(this.nombre, this.edad);
    }
}

const Pedro = new Persona('Pedro', 17);
pedro.mayorEdad();
pedro.mostrar();