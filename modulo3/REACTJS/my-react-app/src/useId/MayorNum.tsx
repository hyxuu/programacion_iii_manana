import { useState, useId } from 'react';

export default function MayorNum(){
    const[num1, setNum1] = useState(0);
    const[num2, setNum2] = useState(0);
    const[resultado, setResultado] = useState(0);
    const num1Id = useId();
    const num2Id = useId();

    
    const calcular =()=>{
        if(num1 > num2){
            setResultado(Number(`el numero mayor es  : ${num1}`));
        }else if(num1 < num2){
            setResultado(Number(`El numero menor es: ${num2}`));
        }
    }
    
    return(
        <div>
        <label htmlFor={num1Id}>Numero 1: </label>
        <input
        id={num1Id}
        type='text'
        value={num1}
        placeholder='Numero 1'
        onChange={e=>setNum1(Number(e.target.value))}/>

        <label htmlFor={num2Id}>Numero: 2</label>
         <input
         id={num2Id}
        type='text'
        value={num2}
        placeholder='Numero 2'
        onChange={e=>setNum2(Number(e.target.value))}/>

        <button onClick={calcular}>Calcular</button>
        <p> El resultado es: {resultado}</p>

        </div>
    )
}