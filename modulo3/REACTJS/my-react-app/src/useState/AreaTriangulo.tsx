import { useState } from 'react';

export default function AreaTriangulo() {
  const [base, setBase] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcular = () => {
    const area = (base * altura) / 2;
    setResultado(area);
  };

  return (
    <>
      <input
        type="text"
        value={base}
        placeholder="Base"
        onChange={(e) => setBase(Number(e.target.value))}
      />

      <input
        type="text"
        value={altura}
        placeholder="Altura"
        onChange={(e) => setAltura(Number(e.target.value))}
      />

      <button onClick={calcular}>Calcular</button>

      <p>El resultado es: {resultado}</p>
    </>
  );
}