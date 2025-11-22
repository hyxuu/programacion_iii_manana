"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Postre = exports.Plato = void 0;
var Plato = /** @class */ (function () {
    function Plato(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    Plato.prototype.servirse = function () {
        console.log("El plato ".concat(this.nombre, " (").concat(this.tipo, ") est\u00E1 listo para servirse en el Restaurante Cumbre."));
    };
    return Plato;
}());
exports.Plato = Plato;
var Postre = /** @class */ (function (_super) {
    __extends(Postre, _super);
    function Postre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Postre;
}(Plato));
exports.Postre = Postre;
var platoPrincipal = new Plato("Aji de Gallina", "Fondo");
var miPostre = new Postre("Mazamorra Morada", "Dulce");
platoPrincipal.servirse();
miPostre.servirse();
