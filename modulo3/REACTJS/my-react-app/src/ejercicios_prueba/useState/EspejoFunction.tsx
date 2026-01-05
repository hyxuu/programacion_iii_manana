import { useState } from "react";

export default function EspejoFunction() {
  const [texto, setTexto] = useState("");

  return (
    <>
      <input
        type="text"
        value={texto}
        placeholder="Escriba algo aqui"
        onChange={(e) => setTexto(e.target.value)}
      />
      <p>Usted ha escrito: {texto.toUpperCase()}</p>
    </>
  );
}
