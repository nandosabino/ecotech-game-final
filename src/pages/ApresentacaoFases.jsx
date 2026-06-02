import { fases } from "../data/fases";

export default function ApresentacaoFases({ iniciarDesafio }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-6">
      <section className="w-full max-w-[430px] mx-auto">
        <span className="text-green-400 text-xs font-bold uppercase">
          Estrutura do Jogo
        </span>

        <h1 className="text-3xl font-bold mt-2 mb-3">Fases do EcoTech</h1>

        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          O jogo será dividido em fases progressivas, nas quais o estudante
          enfrentará problemas ambientais relacionados ao diagnóstico do
          projeto.
        </p>

        <div className="flex flex-col gap-4">
          {fases.map((fase) => (
            <div
              key={fase.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-4"
            >
              <p className="text-green-400 text-xs font-bold">Fase {fase.id}</p>

              <h2 className="text-lg font-bold mt-1">{fase.nome}</h2>

              <p className="text-slate-400 text-sm mt-2">{fase.descricao}</p>
            </div>
          ))}
        </div>

        <button
          onClick={iniciarDesafio}
          className="w-full mt-6 bg-green-500 text-slate-950 font-bold py-4 rounded-2xl active:scale-[0.98] 
          transition-all"
        >
          Iniciar protótipo
        </button>
      </section>
    </main>
  );
}
