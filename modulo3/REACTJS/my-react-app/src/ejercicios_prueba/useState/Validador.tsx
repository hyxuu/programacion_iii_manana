import { useState } from 'react';

export default function Validador(){
    const[palabra, setPalabra] = useState("");
    const palabraCorrecta = palabra === 'React';

    return(
        <div>
            <h2 style={{color: palabraCorrecta ? "green" : "black"}}> Palabra: {palabra}</h2>
            <input
            type='text'
            value={palabra}
            placeholder='Escriba aqui'
            onChange={e=> setPalabra(e.target.value)}/>
        </div>
    )
}