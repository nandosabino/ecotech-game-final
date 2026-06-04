export default function FaseResultado({
  fase,
  pontosFase,
  aprovado,
  continuar,
  repetir,
  voltar,
}) {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 flex items-center">
      <section className="w-full max-w-[430px] mx-auto text-center">
        <p
          className={`text-xs font-bold uppercase ${
            aprovado ? "text-green-400" : "text-red-400"
          }`}
        >
          {aprovado ? "Fase concluída" : "Fase não concluída"}
        </p>

        <h1 className="text-3xl font-bold mt-3">
          {aprovado ? "Missão comprida ✅" : "Missão falhou ❌"}
        </h1>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mt-6">
          <p className="text-slate-400 text-sm">Sua pontuação</p>

          <h2
            className={`text-5xl font-bold mt-2 ${
              aprovado ? "text-green-400" : "text-red-400"
            }`}
          >
            {pontosFase}
          </h2>

          <p className="text-slate-400 text-sm mt-4">
            Meta mínima:{" "}
            <strong className="text-yellow-400">{fase.pontuacaoMinima}</strong>
          </p>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed mt-6">
          {aprovado
            ? "Você atingiu a pontuação mínima e demonstrou domínio sobre a separação correta dos resíduos recicláveis."
            : "Você não atingiu a pontuação mínima necessária. Revise o conteúdo e tente novamente para avançar."}
        </p>

        <div className="flex flex-col gap-3 mt-8">
          {aprovado ? (
            <>
              <button
                onClick={continuar}
                className="w-full bg-green-500 text-slate-950 font-bold py-4 rounded-2xl 
              active:scale-[0.98]"
              >
                Avançar para próxima fase
              </button>

              <button
                onClick={voltar}
                className="w-full bg-slate-900 border border-slate-700 text-white 
              font-bold py-4 rounded-2xl active:scale-[0.98]"
              >
                Voltar ao menu
              </button>
            </>
          ) : (
            <>
              <button
                onClick={repetir}
                className="w-full bg-red-500 text-white font-bold py-4 rounded-2xl active:scale-[0.98]"
              >
                Tentar novamente
              </button>

              <button
                onClick={voltar}
                className="w-full bg-slate-900 border border-slate-700 text-white font-bold py-4 rounded-2xl 
                active:scale-[0.98]"
              >
                Voltar ao menu
              </button>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
