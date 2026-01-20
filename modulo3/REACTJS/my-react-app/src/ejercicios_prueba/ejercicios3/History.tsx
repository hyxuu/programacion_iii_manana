import { useRef } from "react";

interface props{
    signal: number
}

export default function History({signal}: props){
    const cambios = useRef(0);

    cambios.current += 1;
    return(
        <div>
            <h1>Historial de actividad</h1>
            <p> valor actual recibido: {signal}</p>
            <p> el contador ha cambiado: {cambios.current}</p>
        </div>
    )
}