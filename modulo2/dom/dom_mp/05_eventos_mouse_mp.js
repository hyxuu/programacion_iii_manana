const caja = document.getElementById('caja');

caja.addEventListener('mouseover', () => {
    caja.style.backgroundColor = 'darkred';
});
caja.addEventListener('mouseout', () => {
    caja.style.backgroundColor = 'gold';
});
caja.addEventListener('click', () => {
    alert('Plato seleccionado');
});

const areaTouch = document.getElementById('areaTouch');

areaTouch.addEventListener('touchstart', () => {
    areaTouch.style.backgroundColor = 'maroon';
});
areaTouch.addEventListener('touchend', () => {
    areaTouch.style.backgroundColor = 'darkgoldenrod';
});
areaTouch.addEventListener('click', () => {
    alert('Área del chef activada');
});
