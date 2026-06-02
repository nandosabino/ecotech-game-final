export default function FaseResultado({
  fase,
  pontosFase,
  aprovado,
  continuar,
  repetir,
}) {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-6 flex items-center">
      <section className="w-full max-w-[430px] mx-auto text-center">
        <p className="text-green-400 text-xs font-bold uppercase">
          Fase concluída
        </p>

        <h1 className="text-4xl font-bold mt-3">{fase.nome}</h1>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mt-6">
          <p className="text-slate-400 text-sm">Sua pontuação na fase</p>

          <h2 className="text-5xl font-bold text-green-400 mt-2">
            {pontosFase}
          </h2>

          <p className="text-slate-400 text-sm mt-4">
            Mínimo necessários:{" "}
            <strong className="text-yellow-400">{fase.pontosMinimos}</strong>
          </p>
        </div>

        <p className="text-slate-300 mt-6">
          {aprovado
            ? "Você atingiu a pontuação mínima e desbloqueou a próxima fase."
            : "Você não atingiu a pontuação mínima. Revise o conteúdo e tente novamente."}
        </p>

        <button
          onClick={aprovado ? continuar : repetir}
          className="w-full mt-8 bg-green-500 text-slate-950 font-bold py-4 rounded-2xl active:scale-[0.98] 
          transition-all"
        >
          {aprovado ? "Avançar para a próxima fase" : "Tentar novamente"}
        </button>
      </section>
    </main>
  );
}
