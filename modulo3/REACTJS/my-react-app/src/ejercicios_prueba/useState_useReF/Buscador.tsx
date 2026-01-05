import { useState, useRef } from 'react';

export default function Buscado(){
    const[palabra, setPalabra] = useState("");
    const inputRef = useRef();

    const borrar =()=>{
        setPalabra("");
        inputRef.current.focus();
    };

    return(
        <>
        <input ref={inputRef}
        value={palabra}
        placeholder='Escriba aqui'
        onChange={e=> setPalabra(e.target.value)}/>
        <button onClick={borrar}>Limpiar y fijar cursor</button>
        </>
    )
}