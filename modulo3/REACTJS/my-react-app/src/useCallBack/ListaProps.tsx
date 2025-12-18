
import { useCallback } from 'react';

interface ListaProps {
  items: number[];
}

export default function Lista({ items }: ListaProps) {
  const handleClick = useCallback((item: string) => {
    console.log("Seleccionado:", item);
  }, []);

  return (
    <ul>
      {items.map(item => (
        <li key={item}>
          <button onClick={() => handleClick(item)}>{item}*3={item*2}</button>
        </li>
      ))}
    </ul>
  );
}
