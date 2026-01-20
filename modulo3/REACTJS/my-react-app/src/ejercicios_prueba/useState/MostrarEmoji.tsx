import { useState } from 'react';

export default function MostrarEmoji(){
    const[visible, setVisible] = useState(false);

    return(
        <div>
            <button onClick={()=>setVisible(!visible)}>
                {visible ? "ocultar" : "mostrar"}
            </button>
            {visible && <p> felicidades haz dado click</p>}
        </div>
    )
}