let cantidad: number = 30;
let plato: string = 'Encebollado';
let disponible: boolean = true;
let valor: any = 6;

if (cantidad > 0 && disponible) {
    console.log('Plato disponible en Restaurante Cumbre');
} else {
    console.log('Plato no disponible en Restaurante Cumbre');
}
let platos: string[] = ['encebollado', 'seco de pollo', 'ceviche'];
for (let i = 0; i < platos.length; i++) {
    console.log(platos[i]);
}
enum PedidoEstado {
    Pendiente,
    Enviado,
    Entregado
}
console.log(PedidoEstado);
console.log(PedidoEstado.Entregado);
