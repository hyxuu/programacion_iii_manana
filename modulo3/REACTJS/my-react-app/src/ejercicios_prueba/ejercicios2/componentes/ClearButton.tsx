interface Props{
    onClear: ()=> void
}
export default function ClearButton({onClear}: Props){
    return(
         <button onClick={onClear}>Limpiar</button>
    )
    
}