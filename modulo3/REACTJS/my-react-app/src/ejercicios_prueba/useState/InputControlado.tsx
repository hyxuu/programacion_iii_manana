/*Formulario Básico Controlado
Objetivo: Controlar un campo de texto y mostrar su contenido.
Crea un componente InputControlado.
Define un estado texto (inicial: cadena vacía "").
Renderiza un campo de entrada (<input>) y un párrafo (<p>).
El valor del input debe estar controlado por el estado texto (value={texto}).
Usa el handler onChange para actualizar texto con el nuevo valor tecleado (e.target.value).
El párrafo debe mostrar el contenido de texto en tiempo real.*/

import { useState } from 'react';
export default function InputControlado(){
    const [texto, setTexto]= useState("");

    return(
        <>
        <input 
        type="text"
        value={texto}
        onChange={e=> setTexto(e.target.value)}></input>
        <p>Texto: {texto}</p>
        </>
    )
}