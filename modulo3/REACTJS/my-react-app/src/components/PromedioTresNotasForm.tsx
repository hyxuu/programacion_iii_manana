import { useState } from 'react';

export default function PromedioTresNotasForm() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [numero3, setNumero3] = useState(0);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Resultado promedio, ${(numero1 +  numero2 + numero3) / 3}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Numero1"
        value={numero1}
        onChange={(e) => setNumero1(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Numero2"
        value={numero2}
        onChange={(e) => setNumero2(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Numero3"
        value={numero3}
        onChange={(e) => setNumero3(Number(e.target.value))}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}