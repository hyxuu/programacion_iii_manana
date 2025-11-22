const titulo = document.getElementById('titulo');
console.log("Título:", titulo.textContent);
const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(nota => console.log("Nota:", nota.textContent));
const items = document.getElementsByClassName('item');
Array.from(items).forEach(item => console.log("Plato del menú:", item.textContent));
const usuario = document.getElementsByName('usuario');
Array.from(usuario).forEach(u => console.log("Cliente:", u.textContent));
