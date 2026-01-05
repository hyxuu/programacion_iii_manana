import { useId } from 'react';

export default function CampoTexto() {
  const id = useId();
  console.log(id)
  return (
    <div>
      <label htmlFor={id}>Nombre:</label>
      <input id={id} type="text" />
    </div>
  );
}
