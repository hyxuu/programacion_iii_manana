import { useState } from "react";

export default function SelectorPuntuacion() {
  const [puntos, setPuntos] = useState(0);

  return(
  <div>
      <button onClick={() => setPuntos(1)}>1</button>
      <button onClick={()=> setPuntos(2)}>2</button>
      <button onClick={()=>setPuntos(3)}>3</button>
      <button onClick={()=>setPuntos(4)}>4</button>
      <button onClick={()=>setPuntos(5)}>5</button>

      <p>{puntos === 0 ? "por favor vota":"has seleccionado:"+puntos+"estrellas"}</p>
  </div>
  );
}
