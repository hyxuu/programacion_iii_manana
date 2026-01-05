import { useState} from 'react';

export default function FormularioEjemplo(props){
    const[nombre, setNombre] = useState("");
    const[email, setEmail]= useState("");
    
    const enviar = (e) => {
    e.preventDefault();
    alert(`Bienvenido/a ${nombre}`)
    props.onLogin({ email, nombre });
  };

    const datos=()=>{
        setEmail(email);
        setNombre(nombre);
    }

    const borrar=()=>{
        setNombre("");
        setEmail("");
    }

    return(
        <form onSubmit={enviar}>
            <h1>Registro de Usuario</h1>
            <input 
            type='text'
            value={nombre}
            placeholder='Escriba su nombre aqui'
            onChange={e => setNombre(e.target.value)}/>
            <input
            type='text'
            value={email}
            placeholder='Escriba su email'
            onChange={email=> setEmail(email.target.value)}/>
            <button type='submit' onClick={datos} disabled={nombre.length === 0 || email.length === 0 }>Enviar Datos</button>
            <button type='button' onClick={borrar} disabled={nombre.length === 0 || email.length === 0}>Borrar</button>
            {nombre.length === 0 && email.length === 0 && <p style={{color:'gray'}}>Por favor completa todos los campos</p>}
            
        </form>
    )
}