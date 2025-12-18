import { useState, useCallback } from 'react';

interface ReRender {
  onClick: () => void;
}

function Hijo({ onClick }: ReRender) {
  console.log("Render Hijo");
  return <button onClick={onClick}>Click hijo</button>;
}

export default function Padre() {
  const [count, setCount] = useState<number>(0);

  const handleClick = useCallback(() => {
    alert("Hola desde el hijo");
  }, []);

  return (
    <>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <Hijo onClick={handleClick} />
    </>
  );
}
