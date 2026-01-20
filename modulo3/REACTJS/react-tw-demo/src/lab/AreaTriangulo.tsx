import React, { useState } from "react";

export default function AreaTriangulo() {
  const [base, setBase] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [resultado, setResultado] = useState<number | null>(null);

  const calculo = (e: React.FormEvent) => {
    e.preventDefault();
    const area = (base * altura) / 2;
    setResultado(area);
  };

  const limpiar = () => {
    setBase(0);
    setAltura(0);
    setResultado(null);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="text-xl font-extrabold">LAB: Form</h2>

        <form onSubmit={calculo} className="mt-5 max-w-xl space-y-3">
          <label className="block text-sm font-semibold text-white/80">Base</label>
          <input
            className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:ring-2 focus:ring-blue-600/50"
            type="number"
            placeholder="Base"
            value={base === 0 ? "" : base}
            onChange={(e) => setBase(Number(e.target.value))}
            required
          />

          <label className="block text-sm font-semibold text-white/80">Altura</label>
          <input
            className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:ring-2 focus:ring-blue-600/50"
            type="number"
            placeholder="Altura"
            value={altura === 0 ? "" : altura}
            onChange={(e) => setAltura(Number(e.target.value))}
            required
          />

          <div className="flex gap-3 pt-2">
            <button
              className="h-11 rounded-xl bg-blue-600 px-5 font-semibold hover:bg-blue-500 transition"
              type="submit"
            >
              Calcular
            </button>
            <button
              className="h-11 rounded-xl bg-white/10 px-5 font-semibold hover:bg-white/20 transition"
              onClick={limpiar}
              type="button" 
            >
              Limpiar
            </button>
          </div>
        </form>
        {resultado !== null && (
          <div className="mt-10 p-5 border border-blue-500/30 bg-blue-500/10 rounded-2xl">
            <p className="text-blue-400 font-medium">Resultado:</p>
            <p className="text-4xl font-bold">
              {resultado} <span className="text-sm text-white/50">unidades²</span>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}