import { motion } from "framer-motion";

export default function FaseResultado({
  fase,
  pontosFase,
  aprovado,
  continuar,
  repetir,
  voltar,
}) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#064e3b_0%,_#020617_45%)] text-white justify-center px-5 py-6 flex items-center">
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[430px] text-center"
      >
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-black/20">
          <div className="text-6xl mb-4">{aprovado ? "✅" : "⚠️"}</div>

          <p className="text-green-400 text-xs font-bold uppercase">
            Fase {fase.id} concluída
          </p>

          <h1 className="text-3xl font-bold mt-3">
            {aprovado ? "Missão Cumprida!" : "Missão Incompleta"}
          </h1>

          <p className="text-slate-300 mt-4 leading-relaxed">
            {aprovado
              ? "Você atingiu a pontuação necessária e ajudou a cidade a avançar."
              : "Você ainda não atingiu a pontuação mínima. Revise suas escolhas e tente novamente."}
          </p>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="bg-slate-800 rounded-2xl p-4">
              <p className="text-xs text-slate-400">Sua pontuação</p>
              <strong className="text-2xl text-green-400">{pontosFase}</strong>
            </div>

            <div className="bg-slate-800 rounded-2xl p-4">
              <p className="text-xs text-slate-400">Meta</p>
              <strong className="text-2xl text-green-400">
                {fase.pontuacaoMinima}
              </strong>
            </div>
          </div>

          {aprovado ? (
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={continuar}
              className="w-full mt-6 bg-gradient-to-r 
            from-green-400 to-emerald-500 text-slate-950 font-bold py-4 rounded-2xl shadow-lg shadow-green-500/20"
            >
              Continuar →
            </motion.button>
          ) : (
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={repetir}
              className="w-full mt-6 bg-yellow-400 text-slate-950 font-bold py-4 rounded-2xl"
            >
              Tentar novamente
            </motion.button>
          )}

          <button
            onClick={voltar}
            className="w-full mt-3 bg-slate-800 border border-slate-700 hover:border-slate-600 text-white font-semibold py-4 rounded-2xl transition-alw-full mt-3 bg-slate-900 border-2 border-slate-700 text-slate-200 font-bold py-4 rounded-2xl transition-all hover:border-green-500 hover:text-white"
          >
            🏠 Voltar ao início
          </button>
        </div>
      </motion.section>
    </main>
  );
}
