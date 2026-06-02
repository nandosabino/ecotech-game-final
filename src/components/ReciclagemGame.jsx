import { useState } from "react";
import { residuos } from "../data/residuos";

const lixeiras = [
  {
    nome: "Papel",
    cor: "bg-blue-500 text-white",
    emoji: "🔵",
  },
  {
    nome: "Plástico",
    cor: "bg-red-500 text-white",
    emoji: "🔴",
  },
  {
    nome: "Vidro",
    cor: "bg-green-500 text-white",
    emoji: "🟢",
  },
  {
    nome: "Metal",
    cor: "bg-yellow-400 text-slate-950",
    emoji: "🟡",
  },
];

export default function ReciclagemGame({ finalizar }) {
  const [indice, setIndice] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);

  const residuoAtual = residuos[indice];

  function escolherLixeira(lixeira) {
    const acertou = lixeira === residuoAtual.resposta;
    const novaPontuacao = acertou ? pontos + 10 : pontos;

    setPontos(novaPontuacao);

    if (acertou) {
      setAcertos((prev) => prev + 1);
      setFeedback("✅ Correto! Resíduo separado adequadamente.");
    } else {
      setErros((prev) => prev + 1);
      setFeedback(
        `❌ Incorreto. O destino correto seria: ${residuoAtual.resposta}.`,
      );
    }

    setTimeout(() => {
      if (indice < residuos.length - 1) {
        setIndice((prev) => prev + 1);
        setFeedback("");
      } else {
        finalizar(novaPontuacao);
      }
    }, 1200);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-6">
      <section className="w-full max-w-[430px] mx-auto">
        <p className="text-green-400 text-xs font-bold uppercase">
          Minigame • Coleta Seletiva
        </p>

        <h1 className="text-2xl font-bold mt-2">
          Separe o resíduo corretamente
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          Escolha a lixeira adequada para cada item.
        </p>

        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 mt-6">
          <p className="text-amber-400 font-bold text-sm mb-2">
            Diagnóstico da Escola 📊
          </p>

          <p className="text-slate-300 text-sm leading-relaxed">
            A pesquisa realizada mostrou que a maioria dos estudantes não possui
            o hábito de separar resíduos recicláveis corretamente.
          </p>

          <p className="text-slate-300 text-sm leading-relaxed mt-2">
            Sua missão é ajudar a escola a melhorar esse indicador, realizando o
            descarte correto dos materiais e promovendo práticas sustentáveis.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
            <p className="text-xs text-slate-400">Acertos</p>
            <strong className="text-2xl text-green-400">{acertos}</strong>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
            <p className="text-xs text-slate-400">Erros</p>
            <strong className="text-2xl text-red-400">{erros}</strong>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mt-6 text-center">
          <p className="text-slate-400 text-sm mb-3">Resíduo atual</p>

          <div className="bg-slate-800 rounded-2xl p-4">
            <p className="text-sm leading-relaxed">{residuoAtual.item}</p>
          </div>

          <p className="text-slate-400 text-sm">
            Item {indice + 1} de {residuos.length}
          </p>

          <div className="w-full h-2 bg-slate-800 rounded-full mt-4 overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full transition-all"
              style={{ width: `${((indice + 1) / residuos.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-6">
          {lixeiras.map((lixeira) => {
            <button
              key={lixeira.nome}
              onClick={() => escolherLixeira(lixeira.nome)}
              className={`rounded-2xl font-bold p-4 active:scale-[0.97] transition-all ${lixeira.cor}`}
            >
              <span className="block text-xl mb-1">{lixeira.emoji}</span>
              {lixeira.nome}
            </button>;
          })}
        </div>

        {feedback && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mt-5">
            <p className="text-sm text-slate-300">{feedback}</p>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-slate-400 text-sm">Pontuação</p>
          <h2 className="text-3xl font-bold text-green-400">{pontos}</h2>
        </div>
      </section>
    </main>
  );
}
