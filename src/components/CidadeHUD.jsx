import { motion } from "framer-motion";

export default function CidadeHUD({ status }) {
  const indicadores = [
    {
      nome: "Sustentabilidade",
      emoji: "🌱",
      valor: status.sustentabilidade,
    },
    {
      nome: "Água",
      emoji: "💧",
      valor: status.agua,
    },
    {
      nome: "Recursos",
      emoji: "♻️",
      valor: status.recursos,
    },
    {
      nome: "Consciência",
      emoji: "🧠",
      valor: status.consciencia,
    },
  ];

  const media =
    (status.sustentabilidade +
      status.agua +
      status.recursos +
      status.consciencia) /
    4;

  function getEstadoCidade() {
    if (media >= 80) {
      return {
        titulo: "Excelente",
        emoji: "🏆",
        cor: "text-green-400",
      };
    }

    if (media >= 60) {
      return {
        titulo: "Estável",
        emoji: "🌱",
        cor: "text-lime-400",
      };
    }

    if (media >= 40) {
      return {
        titulo: "Atenção",
        emoji: "⚠️",
        cor: "text-yellow-400",
      };
    }

    return {
      titulo: "Crítica",
      emoji: "🚨",
      cor: "text-red-400",
    };
  }

  const estadoCidade = getEstadoCidade();

  function getStatus(valor) {
    if (valor >= 80) return "Excelente";
    if (valor >= 60) return "Estável";
    if (valor >= 40) return "Atenção";
    return "Crítico";
  }

  function getBarColor(valor) {
    if (valor >= 80) return "from-green-400 to-emerald-500";
    if (valor >= 60) return "from-lime-400 to-green-500";
    if (valor >= 40) return "from-yellow-300 to-yellow-500";
    return "from-red-400 to-red-600";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-slate-900/80 border border-slate-800 rounded-3xl p-4 mb-5 shadow-xl shadow-black/20"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-green-400 text-xs font-bold uppercase">
            Cidade EcoTech
          </p>

          <h2 className="text-base font-bold">
            {estadoCidade.emoji} {estadoCidade.titulo}
            <span className="text-slate-400 text-sm ml-2">
              {Math.round(media)}%
            </span>
          </h2>
        </div>

        <span className="text-2xl">🏙️</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {indicadores.map((item) => (
          <div key={item.nome} className="bg-slate-800/90 rounded-2xl p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-slate-300">
                {item.emoji} {item.nome}
              </span>

              <strong className="text-green-400 text-xs">{item.valor}%</strong>
            </div>

            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.valor}%` }}
                transition={{ duration: 0.6 }}
                className={`h-full bg-gradient-to-r ${getBarColor(item.valor)} rounded-full`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
