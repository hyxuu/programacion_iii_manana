import {useState} from 'react';

interface props{
    onNotify: (val: number) => void;
}

export default function Counter({onNotify}: props){
    const [count, setCount] = useState(0);

    const limitemin = 0;
    const limitemax = 100;

    const actualizar = (v: number)=>{
     setCount(v);
     onNotify(v);
    };

    return(
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={()=> actualizar(count + 1)} disabled={count >= limitemax}>
                Incrementar
            </button>
            <button onClick={()=>actualizar(count - 1)} disabled={ count <= limitemin}>
                Decrementar
            </button>
        </div>
    )
}