export default function IntroReciclagem({ iniciar }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 flex items-center">
      <section className="w-full max-w-[430px] mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <h1 className="text-2xl font-bold mb-4">
            Desafio Coleta Seletiva ♻️
          </h1>

          <p className="text-slate-300 text-sm leading-relaxed mt-4">
            Sua missão é ajudar a escola a melhorar esse indicador realizando o
            descarte correto dos materiais.
          </p>

          <div className="bg-slate-800 rounded-2xl p-4 mt-5">
            <p className="text-slate-400 text-xs">Meta da fase</p>

            <strong className="text-green-400 text-xl">7 acertos de 10</strong>
          </div>

          <button
            onClick={iniciar}
            className="w-full bg-green-500 text-slate-950 font-bold py-4 rounded-2xl mt-6"
          >
            Iniciar Desafio
          </button>
        </div>
      </section>
    </main>
  );
}
