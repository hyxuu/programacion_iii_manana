
import { useRef } from 'react';

export default function CuadradoColorido() {
  const cuadradoRef = useRef(null);

  const cambiarColor = () => {
    const colores = ['blue', 'red', 'yellow', 'orange', 'violet'];
    const color = colores[Math.floor(Math.random() * colores.length)];
    cuadradoRef.current.style.backgroundColor = color;
  };

  return (
    <>
      <div
        ref={cuadradoRef}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '0%',
          backgroundColor: 'gray',
          marginBottom: '1rem',
          transition: 'background-color 0.5s'
        }}
      />
      <button onClick={cambiarColor}>Cambiar color del círculo</button>
    </>
  );
}
