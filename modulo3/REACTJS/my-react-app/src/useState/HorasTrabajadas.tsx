import { useState } from 'react';

export default function CalculadoraSalarial() {
  const [horasTotales, setHorasTotales] = useState(0);
  const [precioHora, setPrecioHora] = useState(0);
  const [resultado, setResultado] = useState({ ordinario: 0, extra: 0, total: 0 });

  const calcularSalario = () => {
    const jornadabase = 8;
    const recargoextra = 0.5; 
    
    let horasNormales = 0;
    let horasExtras = 0;

    if (horasTotales > jornadabase) {
      horasNormales = jornadabase;
      horasExtras = horasTotales - jornadabase;
    } else {
      horasNormales = horasTotales;
      horasExtras = 0;
    }

    const pagoOrdinario = horasNormales * precioHora;
    const pagoExtra = horasExtras * (precioHora * recargoextra);

    setResultado({
      ordinario: pagoOrdinario,
      extra: pagoExtra,
      total: pagoOrdinario + pagoExtra
    });
  };

  return (
    <div>
      <h3>Calculadora de Salario</h3>
      <label>Horas trabajadas:</label>
      <input type="number" onChange={(e) => setHorasTotales(Number(e.target.value))} />
      <label>Precio por hora:</label>
      <input type="number" onChange={(e) => setPrecioHora(Number(e.target.value))} />
      <button onClick={calcularSalario}>Calcular</button>
      <p>Pago Normal: {resultado.ordinario}</p>
      <p>Pago Extras: {resultado.extra}</p>
      <h4>Total a cobrar:{resultado.total}</h4>
    </div>
  );
}