import { useState, useEffect} from 'react';

export default function MensajeFugaz(){
    const[alerta, setAlerta] = useState(false);
    const[segundos, setSegundos] = useState(5);

    useEffect(()=>{
        if(alerta && segundos > 0){
            const tiempo = setTimeout(()=>{
                setSegundos(segundos - 1);
            }, 1000)
            return()=> clearTimeout(tiempo);
        }
        if(segundos === 0){
            setAlerta(false);
            setSegundos(5);
        }
    },[alerta, segundos]);

    return(
        <>
        {alerta && (<p style={{color: 'orange'}}>
            Bienvenido, Este mensaje desaparecera en {segundos}
            </p>)}
        {!alerta && (
            <button type='button' onClick={()=> {setAlerta(true); setSegundos(5);}}>
                Mostrar de nuevo
            </button>
        )}
        </>
    )
}