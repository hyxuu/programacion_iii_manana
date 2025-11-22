const mensaje = document.getElementById('mensaje');
mensaje.textContent="Mensaje actualizado"
mensaje.style.color = "red"

const link = document.getElementById('link');
link.setAttribute('href','https://google.com')
link.classList.add('boton');