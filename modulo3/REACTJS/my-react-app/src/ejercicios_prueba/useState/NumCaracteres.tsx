import { useState } from 'react';

export default function NumCaracteres(){
    const[texto, setTexto]=useState("");

    const reset=()=>{
        setTexto("")
    }

    return(
        <div>
            <input 
            type='text'
            value={texto}
            placeholder='Escriba aqui'
            onChange={e => setTexto(e.target.value)}/>
            <p style={{color: texto.length > 20 ? 'red' : 'white'}}>
                numero de caracteres: {texto.length}
            </p>
            {texto.length > 20 && <p>Demasiados Caracteres!</p>}
            {texto.length > 0 && <button onClick={reset}>Borrar</button>}
        </div>
    );
}