import { motion } from "framer-motion";

export default function FaseIntro({ fase, iniciar }) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#064e3b_0%,_#20617_45%)] text-white px-5 justify-center flex items-center">
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[430px]"
      >
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 text-center shadow-xl shadow-black/20">
          <div className="text-6xl mb-4">
            {fase.id === 1 && "🌱"}
            {fase.id === 2 && "♻️"}
            {fase.id === 3 && "💧"}
            {fase.id === 4 && "🌳"}
            {fase.id === 5 && "🤖"}
            {fase.id === 6 && "🏆"}
          </div>

          <p className="text-green-400 text-sm font-bold uppercase">
            Fase {fase.id}
          </p>

          <h1 className="text-3xl font-bold mt-2">{fase.nome}</h1>

          <p className="text-slate-400 mt-5 leading-relaxed">
            {fase.descricao}
          </p>

          <div className="bg-slate-800 rounded-2xl p-4">
            <p className="text-xs text-slate-400 uppercase">Meta da fase</p>

            <strong className="text-green-400 text-xl">
              {fase.pontuacaoMinima} pontos
            </strong>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={iniciar}
            className="w-full mt-6 bg-gradient-to-r from-green-400 to-emerald-500 text-slate-950 font-bold py-4 
            rounded-2xl shadow-lg shadow-green-500/20"
          >
            Iniciar Missão
          </motion.button>
        </div>
      </motion.section>
    </main>
  );
}
