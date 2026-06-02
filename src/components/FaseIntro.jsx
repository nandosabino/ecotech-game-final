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
          <p className="text-green-400 text-sm font-semibold mb-2">
            Objetivo da fase
          </p>

          <p className="text-slate-300 text-sm leading-relaxed">
            {fase.objetivo}
          </p>
        </div>

        <button
          onClick={iniciar}
          className="w-full mt-8 bg-green-500 text-slate-950 font-bold py-4 rounded-2xl active:scale-[0.98] 
          transition-all"
        >
          Começar fase
        </button>
      </section>
    </main>
  );
}
