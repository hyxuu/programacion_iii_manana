import { useState } from 'react';

export default function FormularioBasico() {
  const [perimetro, setPerimetro] = useState(0);
  const [apotema, setApotema] = useState(0);
  const[resultado, setResultado] = useState(0)

  const calculo=()=>{
    const area = (perimetro * apotema)/2;
    setResultado(area)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Resultado es : ${resultado}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Perimetro"
        value={perimetro}
        onChange={e => setPerimetro(Number(e.target.value))}
      /><br />

      <input
        type="number"
        placeholder="Apotema"
        value={apotema}
        onChange={e => setApotema(Number(e.target.value))}
      /><br />
      <button type="submit" onClick={calculo}>Enviar</button>
    </form>
  );
}