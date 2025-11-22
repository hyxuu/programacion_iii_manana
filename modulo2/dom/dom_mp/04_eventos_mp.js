let parrafo = null;
document.getElementById('crear').addEventListener('click', () => {
    parrafo = document.createElement('p');
    parrafo.textContent = "Nuevo plato agregado al menú";
    document.getElementById('contenedor').appendChild(parrafo);
});
document.getElementById('eliminar').addEventListener('click', () => {
    if (parrafo) parrafo.remove();
});
function saludar() {
    alert("Bienvenido a Restaurante Cumbre");
}
document.getElementById('nombre')
    .addEventListener('input', (e) => {
        console.log("Escribiendo nombre del cliente:", e.target.value);
    });
