export default function Final({ pontuacao, status, reiniciar }) {
  function definirNivel() {
    if (pontuacao >= 120) return "Mestre da Sustentabilidade";
    if (pontuacao >= 80) return "Guardião Verde";
    if (pontuacao >= 40) return "Agente Sustentável";
    return "Aprendiz Ambiental";
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-6 flex items-center">
      <section className="w-full max-w-[430px] mx-auto text-center">
        <p className="text-green-400 text-xs font-bold uppercase">
          Desafio concluído
        </p>

        <h1 className="text-4xl font-bold mt-3 leading-tight">
          Resultado Final
        </h1>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mt-6">
          <p className="text-slate-400 text-sm">Pontuação total</p>

          <h2 className="text-5xl font-bold text-green-400 mt-2">
            {pontuacao}
          </h2>

          <p className="text-slate-300 mt-4 font-semibold">{definirNivel()}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-6 text-left">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3">
            <p className="text-xs text-slate-400">Sustentabilidade 🌱</p>
            <strong className="text-2xl">{status.sustentabilidade}</strong>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3">
            <p className="text-xs text-slate-400">Água 💧</p>
            <strong className="text-2xl">{status.agua}</strong>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3">
            <p className="text-xs text-slate-400">Energia ⚡</p>
            <strong className="text-2xl">{status.energia}</strong>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3">
            <p className="text-xs text-slate-400">Consciência 🧠</p>
            <strong className="text-2xl">{status.consciencia}</strong>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mt-6">
          Seu desempenho representa como suas decisões impactaram a escola e o
          meio ambiente ao longo do desafio.
        </p>

        <button
          onClick={reiniciar}
          className="w-full bg-green-500 text-slate-950 font-bold py-4 rounded-2xl active-slate-[0.98] 
          transition-all"
        >
          Jogar novamente
        </button>
      </section>
    </main>
  );
}
