import { motion } from "framer-motion";

export default function Final({ pontuacao, status, reiniciar }) {
  function definirMedalha() {
    if (pontuacao >= 900) {
      return {
        emoji: "🥇",
        titulo: "Guardião EcoTech Ouro",
        mensagem:
          "Excelente! Você demonstrou grande domínio nas decisões ambientais.",
      };
    }

    if (pontuacao >= 700) {
      return {
        emoji: "🥈",
        titulo: "Guardião EcoTech Prata",
        mensagem: "Muito bom! Suas escolhas ajudaram a transformar a cidade.",
      };
    }

    if (pontuacao >= 500) {
      return {
        emoji: "🥉",
        titulo: "Guardião EcoTech Bronze",
        mensagem:
          "Bom trabalho! Você compreendeu pontos importantes da Educação Ambiental.",
      };
    }

    return {
      emoji: "🌱",
      titulo: "Aprendiz EcoTech",
      mensagem:
        "Continue tentando! Suas decisões ainda podem melhorar a cidade.",
    };
  }

  const medalha = definirMedalha();

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

  function gerarDiagnostico(valor) {
    if (valor >= 80) return "Excelente";
    if (valor >= 60) return "Bom";
    if (valor >= 40) return "Atenção";
    return "Crítico";
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#064e3b_0%,_#020617_45%)] text-white px-4 py-6 flex items-center">
      <section className="w-full max-w-[430px] mx-auto text-center">
        <p className="text-green-400 text-xs font-bold uppercase">
          Desafio concluído
        </p>

        <h1 className="text-4xl font-bold mt-3 leading-tight">
          Resultado Final
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 mt-6 shadow-xl shadow-black/20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.2 }}
            className="text-6xl mb-3"
          >
            {medalha.emoji}
          </motion.div>

          <h2 className="text-2xl font-bold text-green-400">
            {medalha.titulo}
          </h2>

          <p className="text-slate-300 mt-3 text-sm leading-relaxed">
            {medalha.mensagem}
          </p>

          <p className="text-slate-400 text-sm mt-6">Pontuação total</p>

          <strong className="text-5xl font-bold text-green-400 mt-2 block">
            {pontuacao}
          </strong>
        </motion.div>

        <div className="mt-6 text-left">
          <h3 className="text-green-400 font-bold mb-3">
            Relatório Ambiental da Cidade
          </h3>

          <div className="space-y-3">
            {indicadores.map((item) => (
              <div
                key={item.nome}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4"
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm text-slate-300">
                    {item.emoji} {item.nome}
                  </p>

                  <strong className="text-green-400">{item.valor}%</strong>
                </div>

                <div className="w-full h-2 bg-slate-800 rounded-full mt-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                    style={{ width: `${item.valor}%` }}
                  />
                </div>

                <p className="text-xs text-slate-400 mt-2">
                  Situação: {gerarDiagnostico(item.valor)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mt-6">
          Seu desempenho representa como suas decisões impactaram a cidade, a
          escola e o meio ambiente ao longo do desafio.
        </p>

        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          onClick={reiniciar}
          className="w-full mt-6 bg-gradient-to-r from-green-400 to-emerald-500 text-slate-950 font-bold py-4 rounded-2xl shadow-lg shadow-green-500/20"
        >
          Jogar novamente
        </motion.button>
      </section>
    </main>
  );
}
