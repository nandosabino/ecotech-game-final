export default function FaseIntro({ fase, iniciar }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-6 flex items-center">
      <section className="w-full max-w-[430px] mx-auto">
        <span className="text-green-400 text-xs font-bold uppercase">
          Fase {fase.id}
        </span>

        <h1 className="text-4xl font-bold mt-2 leading-tight">{fase.nome}</h1>

        <p className="text-slate-400 mt-5 leading-relaxed">{fase.descricao}</p>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mt-6">
          <p className="text-green-400 text-sm font-semibold mb-">
            Objetivo da fase
          </p>

          <p className="text-slate-300 text-sm leading-relaxed">
            {fase.objetivo}
          </p>
        </div>

        <div className="bg-slate-900 border border-yellow-500/30 rounded-2xl p-4 mt-4">
          <p className="text-yellow-400 text-sm font-semibold">
            Requisito para avançar
          </p>

          <p className="text-slate-300 mt-2 text-sm">
            Alcance pelo menos
            <strong>{fase.pontuacaoMinima} pontos</strong>
            para desbloquear a próxima fase.
          </p>
        </div>

        <button
          onClick={iniciar}
          className="w-full mt-8 bg-green-500 text-slate-950 font-bold py-4 rounded-2xl transition-all active:scale-[0.98]"
        >
          Iniciar Fase
        </button>
      </section>
    </main>
  );
}
