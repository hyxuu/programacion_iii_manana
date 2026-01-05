import { useState, useEffect } from "react";

export default function SaludoEfecto(){
    const[nombre, setNombre]=useState("");

    useEffect(()=> {
        if(nombre !== ""){
            console.log("El nombre cambió a:", nombre);
        }
    }, [nombre]);

    return(
        <>
        <p>Escribe tu nombre para activar el efecto:</p>
        <input
        type="text"
        value={nombre}
        onChange={(e)=> setNombre(e.target.value)}
        />
        <h3>tu nombre es: {nombre}</h3>
        </>
    )
}