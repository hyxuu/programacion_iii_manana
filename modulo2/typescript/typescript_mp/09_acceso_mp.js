"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plato = void 0;
var Plato = /** @class */ (function () {
    function Plato(nombre) {
        this.idRestaurante = '99182898982988';
        this.nombre = nombre;
        this.generarCodigo();
    }
    Plato.prototype.generarCodigo = function () {
        this.codigo = (new Date()).toDateString();
    };
    Plato.prototype.getCodigo = function () {
        return this.codigo;
    };
    Plato.prototype.getAttributes = function () {
        return {
            nombre: this.nombre,
            codigo: this.codigo,
            id: this.idRestaurante
        };
    };
    return Plato;
}());
exports.Plato = Plato;
