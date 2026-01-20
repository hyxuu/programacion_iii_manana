class Car{
    constructor(brand,model){
        this.brand = brand;
        this.model = model;
    }   

    start(){
        console.log(`${this.brand} ${this.model} esta encendido`)
    } 
    run(){
        console.log(`${this.brand} ${this.model} esta en movimiento`)
    }
    stop(){
        console.log(`${this.brand} ${this.model} se ha detenido`)
    }
}

const miCarro = new Car("Toyota","Corolla");
miCarro.start();
miCarro.run();
miCarro.stop()