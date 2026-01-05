import { useState } from 'react';

export default function SecurityPass(){
  const[ pass, setPass] = useState("");
  const[visible, setVisible] = useState(false);

  return(
    <div>
        <input 
        type={visible ? "text" : "password"}
        value={pass}
        placeholder='Ingrese su contraseña aqui'
        onChange={e=>setPass(e.target.value)}/>
        <button onClick={()=>setVisible(!visible)}>
            {visible ? "Ocultar" : "Ver"}
        </button>
        {pass.length > 0 && pass.length < 6 && (<p style={{color: 'orange'}}>Contraseña muy corta</p>)}
    </div>
  );
}