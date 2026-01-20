/*Contador con Límites:
Crea un componente ContadorLimitado.
Usa useState para un estado valor (inicial: 0).
Añade botones para Incrementar y Decrementar.
Implementa una lógica: el valor nunca debe ser inferior a 0 ni superior a 10. 
Deshabilita el botón correspondiente cuando se alcance el límite.*/


import { useState } from 'react';

export default function ContadorLim(){
    const[cont, setCont] = useState(0);
    const limitemin = 0;
    const limitemax = 1000000;

    const aumentar =()=>{
        if(cont < limitemax ){
            setCont( cont + 1);
        }
    }

    const restar =()=>{
        if(cont > limitemin){
            setCont(cont - 1);
        }
    }

    return(
        <>
        <p>Contador: {cont}</p>
        <button onClick={aumentar} disabled={ cont === limitemax }>aumentar</button>
        <button onClick={restar} disabled={ cont === limitemin}>Restar</button>
        </>
    )
}