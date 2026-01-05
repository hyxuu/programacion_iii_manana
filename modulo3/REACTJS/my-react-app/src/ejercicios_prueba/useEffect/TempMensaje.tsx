import { useState, useEffect} from 'react';

export default function TempMensaje(){
    const[alerta, setAlerta] = useState(false);
    const[segundo,setSegundos] = useState(5);

    useEffect(()=>{
        if(alerta && segundo > 0){
            const timer = setTimeout(()=>{
                setSegundos(segundo - 1);
            }, 1000);
            return()=> clearTimeout(timer);
        }

        if(segundo === 0){
            setAlerta(false);
            setSegundos(5);
        }
    },[alerta,segundo]);

    return(
        <>
        <button onClick={()=> setAlerta(true)}>Activar Alerta</button>
        {alerta && (<h2 style={{color: 'red'}}>este mensaje desaparecera en {segundo} segundos</h2>)}
        </>
    )
}