import { useState } from 'react';

export default function ContadorInteligente(){
    const[cont, setCont ] = useState(0);
    const limitemin = 0;
    const limitemax = 1000000;

    const sumar=()=>{
        if(cont < limitemax){
            setCont(cont + 1);
        }
    }
    const restar=()=>{
        if(cont > limitemin){
            setCont(cont - 1);
        }
    }

    return(
        <>
        <p>Contador: {cont} </p>
        <button onClick={sumar} disabled={cont === limitemax}>Sumar</button>
        <button onClick={restar} disabled={cont === limitemin}> Restar</button>
        </>
    )
}