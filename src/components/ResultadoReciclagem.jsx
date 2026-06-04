export default function ResultadoReciclagem({
  acertos,
  erros,
  pontos,
  continuar,
}) {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 flex items-center">
      <section className="w-full max-w-[430px] mx-auto text-center">
        <p className="text-green-400 text-xs font-bold uppercase">
          Desafio concluído
        </p>

        <h1 className="text-3xl font-bold mt-2">Coleta Seletiva ♻️</h1>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mt-6">
          <p className="text-slate-400 text-sm">Pontuação obtida</p>

          <h2 className="text-5xl font-bold text-green-400 mt-2">{pontos}</h2>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <div>
              <p className="text-slate-400 text-xs">Acertos</p>
              <strong className="text-green-400 text-2xl">{acertos}</strong>
            </div>

            <div>
              <p className="text-slate-400 text-xs">Erros</p>
              <strong className="text-red-400 text-2xl">{erros}</strong>
            </div>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mt-6">
          Agora você seguirá para as perguntas estratégicas da fase.
        </p>

        <button
          onClick={continuar}
          className="w-full bg-green-500 text-slate-950 font-bold py-4 rounded-2xl mt-8 active:scale-[0.98]"
        >
          Continuar
        </button>
      </section>
    </main>
  );
}
