import { motion } from "framer-motion";
import { useState } from "react";
import Fases from "../pages/Fases";

export default function Inicio({ iniciarJogo }) {
  const [mostrarFases, setMostrarFases] = useState(false);

  if (mostrarFases) {
    return <Fases voltar={() => setMostrarFases(false)} faseLiberada={1} />;
  }

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

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-3 leading-tight"
        >
          EcoTech
        </motion.h1>

        <h2 className="text-green-400 text-xl font-semibold mb-6">
          Guardião da Cidade Sustentável
        </h2>

        <p className="text-slate-300 text-base leading-relaxed mb-8">
          Assuma o papel de um gestor ambiental e enfrente desafios reais para
          transformar a cidade EcoTech em um exemplo de sustentabilidade.
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

        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-4 mb-6">
          <p className="text-xs uppercase text-slate-400 mb-3">Sua jornada</p>
        </div>

        <div className="grid grid-cols-3 gap-2 text-sm">
          <span>🌱 Consciência</span>
          <span>♻️ Resíduos</span>
          <span>💧 Água</span>
          <span>🌳 Poluição</span>
          <span>🤖 Tecnologia</span>
          <span>🏆 Final</span>
        </div>

        <motion.button
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.02 }}
          onClick={iniciarJogo}
          className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-slate-950 font-bold py-4 rounded-2xl shadow-lg shadow-green-500/20"
        >
          Começar Desafio
        </motion.button>

        <button
          onClick={() => setMostrarFases(true)}
          className="w-full mt-4 bg-slate-900 border border-slate-800 text-white font-semibold py-4 rounded-xl"
        >
          📚 Ver Fases
        </button>
      </motion.section>
    </main>
  );
}
