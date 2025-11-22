var cantidad = 30;
var plato = 'Encebollado';
var disponible = true;
var valor = 6;
if (cantidad > 0 && disponible) {
    console.log('Plato disponible en Restaurante Cumbre');
}
else {
    console.log('Plato no disponible en Restaurante Cumbre');
}
var platos = ['encebollado', 'seco de pollo', 'ceviche'];
for (var i = 0; i < platos.length; i++) {
    console.log(platos[i]);
}
var PedidoEstado;
(function (PedidoEstado) {
    PedidoEstado[PedidoEstado["Pendiente"] = 0] = "Pendiente";
    PedidoEstado[PedidoEstado["Enviado"] = 1] = "Enviado";
    PedidoEstado[PedidoEstado["Entregado"] = 2] = "Entregado";
})(PedidoEstado || (PedidoEstado = {}));
console.log(PedidoEstado);
console.log(PedidoEstado.Entregado);
