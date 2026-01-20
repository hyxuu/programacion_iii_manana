/*Contador con useState y "Reset"
Reto: Crea un componente que tenga un número. Un botón aumenta (+1), otro disminuye 
(-1) y un tercero pone el contador en 0.
Punto clave: Asegúrate de usar la función actualizadora 
setCount(prev => prev + 1) para las buenas prácticas.*/

import { useState } from "react";

export default function ContadorEjemplo(){
const [ contador, setContador] = useState(0);
const limitmax= 10;
const limitmin = 0;

const increment = ()=>{
    if (contador<limitmax){
        setContador(prev => prev + 1);
    }
};

const decrement =()=>{
    if(contador>limitmin){
        setContador(prev => prev -1);
    }
};
const reset =()=>{
    setContador(0);
};

return(
    <>
    <h2> Contador: {contador}</h2>
    <button onClick={increment} disabled={contador === limitmax}>
        haz click para aumentar
    </button>
    <button onClick={decrement} disabled={contador === limitmin}>
        haz click para decrementar
    </button>
    <button onClick={reset}>resetear</button>
    </>
);


}



