import { useState } from 'react';

export default function EjemploContador(){
    const[cont, setCont] = useState(0);
    const limitemax= 1000000;
    const limitemin= 0;

    const aumentar=()=>{
        if(cont<limitemax){
            setCont(cont + 1);
        }
    };

    const decrementar=()=>{
        if(cont>limitemin){
            setCont(cont - 1);
        }
    };

    return(
        <div>
            <h2>Contador: {cont}</h2>
            <button onClick={aumentar} disabled={cont === limitemax}>aumentar</button>
            <button onClick={decrementar} disabled={cont === limitemin}>restar</button>
        </div>
    )
}