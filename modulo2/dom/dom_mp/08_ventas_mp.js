const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorRestaurante');
let pedidos = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const direccion = document.getElementById('direccion').value.trim(); 
  const descripcion = document.getElementById('descripcion').value.trim();
  const precio = parseFloat(document.getElementById('precio').value.trim());

  if (direccion && descripcion && !isNaN(precio)) {
    const nuevoPedido = { id: Date.now(), direccion, descripcion, precio };
    pedidos.push(nuevoPedido);
    renderizarPedido(nuevoPedido);
    formulario.reset();
  }
});

function renderizarPedido({ id, direccion, descripcion, precio }) {
  const div = document.createElement('div');
  div.className = 'pedido';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>Cliente: ${direccion}</h3>
    <p>Pedido: ${descripcion}</p>
    <p><strong>Total: $${precio.toFixed(2)}</strong></p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.pedido');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    pedidos = pedidos.filter(p => p.id !== id);
    tarjeta.remove();
  }
});
