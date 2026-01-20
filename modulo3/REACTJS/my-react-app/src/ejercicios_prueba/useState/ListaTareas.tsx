import { useState } from 'react';

export default function ListaTareas(){
    const[tarea, setTarea] = useState([]);
    const[nueva, setNueva] = useState("");

    const enviar=(e)=>{
        e.preventDefault();
    }
    return(
        <form onSubmit={enviar}>
           <input
           type='text'
           value={nueva}
           placeholder='Escriba aqui'
           onChange={e=> setNueva(e.target.value)}/>
           <button type='submit' onClick={()=> {setTarea([...tarea,nueva]); setNueva("") }}>
            Agregar
           </button>

           <ul>
            {tarea.map((item, index) => <li key={index}>{item} 
                <button type='button' onClick={()=>setTarea(tarea.filter((_, i) => i !== index))}>Borrar</button>
                </li>)}
           </ul>
        </form>
    )
}