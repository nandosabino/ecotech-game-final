import { motion } from "framer-motion";

export default function QuestionCard({
  pergunta,
  responder,
  respondido,
  respostaSelecionada,
}) {
  function definirClasse(alternativa, index) {
    if (!respondido) {
      return "bg-slate-800 hover:bg-slate-700 border-slate-700";
    }

    if (respostaSelecionada === index) {
      return alternativa.correta
        ? "bg-green-500/20 border-green-500 text-green-300"
        : "bg-red-500/20 border-red-500 text-red-300";
    }

    return "bg-slate-800 border-slate-700 opacity-70";
  }

  function mostrarPontos(nivel) {
    const nivelNormalizado = nivel.toLowerCase();

    if (nivelNormalizado === "fácil" || nivelNormalizado === "facil") return 50;
    if (nivelNormalizado === "médio" || nivelNormalizado === "medio")
      return 100;
    if (nivelNormalizado === "difícil" || nivelNormalizado === "dificil")
      return 150;

    if (
      nivelNormalizado === "muito difícil" ||
      nivelNormalizado === "muito dificil"
    )
      return 200;

    return 100;
  }

  return (
    <motion.div
      key={pergunta.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl shadow-black/20"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-green-400 text-xs font-bold uppercase">
          {pergunta.nivel}
        </span>

        <span className="text-xs text-slate-400">
          +{mostrarPontos(pergunta.nivel)} pontos
        </span>
      </div>

      <h2 className="text-xl font-bold mb-6 leading-relaxed">
        {pergunta.pergunta}
      </h2>

      <div className="space-y-3">
        {pergunta.alternativas.map((alternativa, index) => (
          <motion.button
            whileTap={{ scale: 0.97 }}
            key={alternativa.texto}
            onClick={() => responder(alternativa, index)}
            disabled={respondido}
            className={`w-full text-left p-4 rounded-xl border transition-all disabled:cursor-not-allowed ${definirClasse(alternativa, index)}`}
          >
            <div className="flex items-center justify-between gap-3">
              <span>{alternativa.texto}</span>

              {respondido && respostaSelecionada === index && (
                <span>{alternativa.correta ? "✅" : "❌"}</span>
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
