import { useState } from 'react';

export default function ButtonCounter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Interacciones realizadas en el restaurante: {count}
    </button>
  );
}
