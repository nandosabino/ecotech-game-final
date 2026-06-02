import { motion } from "framer-motion";

export default function Inicio({ iniciarJogo }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-5 py-6">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[430px] text-center"
      >
        <span
          className="inline-block mb-4 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm 
                font-medium border border-green-500/20"
        >
          Projeto de Extensão • Educação Ambiental
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          EcoTech: Crise Ambiental
        </h1>

        <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed">
          Tome decisões, resolva desafios e teste seus conhecimentos sobre
          sustentabilidade, reciclagem, tecnologia sustentável e preservação
          ambiental.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid gap-4 mb-10"
        >
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-green-400 font-semibold mb-2">Decisões</h3>
            <p className="text-slate-400 text-sm">
              Suas escolhas afetam os indicadores ambientais.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-green-400 font-semibold mb-2">Desafios</h3>
            <p className="text-slate-400 text-sm">
              Responda perguntas com dificuldade progressiva.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-green-400 font-semibold mb-2">Impacto</h3>
            <p className="text-slate-400 text-sm">
              Veja como suas ações influenciam o meio ambiente.
            </p>
          </div>
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.02 }}
          onClick={iniciarJogo}
          className="w-full bg-linear-to-r from-green-400 to-green-500 text-slate-950 font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-500/20"
        >
          Começar Desafio
        </motion.button>
      </motion.section>
    </main>
  );
}
