"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, soy ".concat(this.nombre, ", tengo ").concat(this.edad, " a\u00F1os y trabajo en el Restaurante Cumbre."));
    };
    return Persona;
}());
exports.Persona = Persona;
const empleado1 = new exports.Persona("Danna", 20);
empleado1.saludar();
