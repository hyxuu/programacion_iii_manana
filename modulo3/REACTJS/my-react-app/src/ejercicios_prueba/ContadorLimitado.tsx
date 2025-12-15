/*Contador con Límites:
Crea un componente ContadorLimitado.
Usa useState para un estado valor (inicial: 0).
Añade botones para Incrementar y Decrementar.
Implementa una lógica: el valor nunca debe ser inferior a 0 ni superior a 10. 
Deshabilita el botón correspondiente cuando se alcance el límite.*/


import { useState } from 'react';

export default function ContadorLimitado(){
    const [contador, setContador] = useState(0);
    const limitemax= 10;
    const limitemin= 0;

    const incrementar = ()=> {
        if (contador < limitemax){
            setContador(contador + 1);
        }
    };

    const decrementar =()=>{
        if(contador > limitemin){
            setContador(contador - 1);
        }
    };

    return (
        <>
         <h2>Contador:{contador}</h2>
          <button onClick={incrementar} disabled={contador === limitemax}>
            Has click para incrementar
          </button>
          <button onClick={decrementar} disabled={contador === limitemin}>
            has click para decrementar
          </button>
        </>
    )
}