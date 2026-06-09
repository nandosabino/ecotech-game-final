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

  return (
    <div className="bg-slate-900/80 border border/slate-800 rounded-3xl p-4 mb-5 shadow-lg shadow-black/20">
      <h2 className="text-sm font-bold text-green-400 mb-4">
        Indicadores da Cidade
      </h2>

      <div className="space-y-3">
        {indicadores.map((item) => (
          <div key={item.nome}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">
                {item.emoji} {item.nome}
              </span>

              <span className="text-green-400 font-bold">{item.valor}%</span>
            </div>

            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${item.valor}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
