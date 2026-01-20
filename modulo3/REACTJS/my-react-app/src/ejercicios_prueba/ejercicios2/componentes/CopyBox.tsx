interface Props{
    text: string,
    setText: (v: string) => void,
    copy: string,
    setCopy: (v: string) => void
}
export default function CopyBox({text, setText, copy, setCopy}: Props){
      return(
        <div>
            <h1>Ejercicio 1</h1>
            <input 
            type="text"
            value={text}
            placeholder="Escriba aqui"
            onChange={e=>setText(e.target.value)}/>
            <button onClick={()=>setCopy(text)}>Copiar</button>
            {text === '' && <p style={{color: 'red'}}>No hay texto para copiar</p> }
            <h3>Original: {text}</h3>
            <h3>Copiado: {copy}</h3>
        </div>
      )
}