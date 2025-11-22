const caja=document.getElementById('caja')

caja.addEventListener('mouseover',()=>{
    caja.style.backgroundColor='black';
});
caja.addEventListener('mouseout',()=>{
    caja.style.backgroundColor='Red';
});
caja.addEventListener('click',()=>{
    alert('Clic');
});   

const areaTouch=document.getElementById('areaTouch')

areaTouch.addEventListener('touchstart',()=>{
    areaTouch.style.backgroundColor='blue';
});
areaTouch.addEventListener('touchend',()=>{
    areaTouch.style.backgroundColor='green';
});
areaTouch.addEventListener('click',()=>{
    alert('Clic Area Touch');
});   