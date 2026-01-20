export class Plato {
    public nombre: string;
    private codigo: any;
    protected idRestaurante: string = '99182898982988';

    constructor(nombre: string) {
        this.nombre = nombre;
        this.generarCodigo();
    }

    generarCodigo(): void {
        this.codigo = (new Date()).toDateString();
    }

    getCodigo(): any {
        return this.codigo;
    }

    getAttributes(): any {
        return {
            nombre: this.nombre,
            codigo: this.codigo,
            id: this.idRestaurante
        };
    }
}
