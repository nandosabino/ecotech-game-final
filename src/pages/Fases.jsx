import { motion } from "framer-motion";
import { fases } from "../data/fases";

export default function Fases({ voltar, faseLiberada = 1 }) {
  function getIcone(id) {
    const icones = {
      1: "🌱",
      2: "♻️",
      3: "💧",
      4: "🌳",
      5: "🤖",
      6: "🏆",
    };

    return icones[id] || "🎮";
  }
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#064e3b_0%,_#020617_45%)] text-white px-5 py-6">
      <section className="max-w-[430px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-green-400 text-xs font-bold uppercase">
            Jornada EcoTech
          </p>

          <h1 className="text-4xl font-bold mt-3">Fases do Jogo</h1>

          <p className="text-slate-300 mt-3 leading-relaxed">
            Complete cada missão para avançar e se tornar o Guardião EcoTech.
          </p>

          <div className="space-y-4 mt-6">
            {fases.map((fase) => {
              const liberada = fase.id <= faseLiberada;

              return (
                <motion.div
                  key={fase.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: fase.id * 0.05 }}
                  className={`rounded-3xl p-4 border shadow-lg shadow-black/20 ${
                    liberada
                      ? "bg-slate-900/90 border-green-500/40"
                      : "bg-slate-900/50 border-slate-800 opacity-60"
                  }`}
                >
                  <div className="flex gap-4 items-start">
                    <div className="text-4xl">
                      {liberada ? getIcone(fase.id) : "🔒"}
                    </div>

                    <div className="flex-1">
                      <p className="text-green-400 text-xs font-bold uppercase">
                        Fase {fase.id}
                      </p>

                      <h2 className="font-bold text-lg mt-1">{fase.nome}</h2>

                      <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                        {fase.descricao}
                      </p>

                      <div className="mt-3 flex justify-between text-xs">
                        <span>{liberada ? "✅ Liberada" : "🔒 Bloqueada"}</span>

                        <span className="text-slate-400">
                          Meta: {fase.pontuacaoMinima} pts
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={voltar}
          className="w-full mt-6 bg-gradient-to-r from-green-400 to-emerald-500 text-slate-950 font-bold py-4 rounded-2xl shadow-lg shadow-green-500/20"
        >
          Voltar
        </motion.button>
      </section>
    </main>
  );
}
