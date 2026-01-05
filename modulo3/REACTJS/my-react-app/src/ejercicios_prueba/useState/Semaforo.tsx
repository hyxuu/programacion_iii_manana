import { useState } from 'react';

export default function Semaforo(){
    const[color, setColor]=useState("")

    return(
        <>
        <div style={{ backgroundColor: color, width: 100, height: 100, borderRadius: '50%' }}>
        </div>
        <button onClick={() => setColor("red")}>Rojo</button>
        <button onClick={()=>setColor("yellow")}>Amarillo</button>
        <button onClick={()=>setColor("green")}>Verde</button>
        {color === "red" && <p>Alto!, no puedes pasar</p>}
        {color === "green" && <p>Avanza, es seguro pasar</p>}
        </>
    )
}