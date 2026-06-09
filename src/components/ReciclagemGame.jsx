import { useState } from "react";
import IntroReciclagem from "../components/IntroReciclagem";
import ResultadoReciclagem from "../components/ResultadoReciclagem";

const lixeiras = [
  {
    nome: "Papel",
    emoji: "📄",
    cor: "bg-blue-500 text-white",
  },
  {
    nome: "Plástico",
    emoji: "🧴",
    cor: "bg-red-500 text-white",
  },
  {
    nome: "Vidro",
    emoji: "🍾",
    cor: "bg-green-500 text-white",
  },
  {
    nome: "Metal",
    emoji: "🥫",
    cor: "bg-yellow-400 text-slate-950",
  },
];

export default function ReciclagemGame({ finalizar }) {
  const [indice, setIndice] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [mostrarIntro, setMostrarIntro] = useState(true);
  const [bloqueado, setBloqueado] = useState(false);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const residuoAtual = residuos[indice];

  if (!residuoAtual) {
    return null;
  }

  function escolherLixeira(lixeira) {
    if (bloqueado) return;

    setBloqueado(true);

    const acertou = lixeira === residuoAtual.resposta;
    const novaPontuacao = acertou ? pontos + 100 : pontos;

    setPontos(novaPontuacao);

    if (acertou) {
      setAcertos((prev) => prev + 1);
      setFeedback(`✅ Correto! Categoria: ${residuoAtual.resposta}.`);
    } else {
      setErros((prev) => prev + 1);
      setFeedback(`❌ Incorreto! Correto: ${residuoAtual.resposta}.`);
    }

    setTimeout(() => {
      if (indice < residuos.length - 1) {
        setIndice((prev) => prev + 1);
        setFeedback("");
        setBloqueado(false);
      } else {
        setMostrarResultado(true);
      }
    }, 1200);
  }

  if (mostrarIntro) {
    return <IntroReciclagem iniciar={() => setMostrarIntro(false)} />;
  }

  if (mostrarResultado) {
    return (
      <ResultadoReciclagem
        acertos={acertos}
        erros={erros}
        pontos={pontos}
        continuar={() => finalizar(pontos)}
      />
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-4">
      <section className="w-full max-w-[430px] mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">Coleta Seletiva ♻️</h1>

          <span className="text-green-400 text-sm font-bold">{pontos} pts</span>
        </div>

        <div className="flex justify-between items-center mt-3 text-sm">
          <span className="text-green-400 font-bold">✅ {acertos}</span>
          <span className="text-red-400 font-bold">❌ {erros}</span>
          <span className="text-slate-400">
            Item {indice + 1}/{residuos.length}
          </span>
        </div>

        <div className="w-full h-2 bg-slate-800 rounded-full mt-3 overflow-hidden">
          <div
            className="h-full bg-green-500 rounded-full transition-all"
            style={{ width: `${((indice + 1) / residuos.length) * 100}%` }}
          />
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-4 text-center min-h-[140px] flex items-center justify-center">
          <p className="text-sm leading-relaxed max-h-[150px] overflow-y-auto">
            {residuoAtual.item}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          {lixeiras.map((lixeira) => (
            <button
              key={lixeira.nome}
              disabled={bloqueado}
              onClick={() => escolherLixeira(lixeira.nome)}
              className={`rounded-2xl font-bold p-4 px-3 py-6 active:scale-[0.97] transition-all ${lixeira.cor}`}
            >
              <span className="block text-lg mb-1">{lixeira.emoji}</span>
              {lixeira.nome}
            </button>
          ))}
        </div>

        <div className="mt-5 bg-slate-900 border border-slate-800 rounded-2xl p-3">
          <p className="text-xs text-slate-400">Meta da fase</p>
          <p className="text-green-400 font-bold">
            Acerte pelo menos 7 dos 10 resíduos
          </p>
        </div>

        {feedback && (
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-3 mt-4">
            <p className="text-sm text-slate-300">{feedback}</p>
          </div>
        )}
      </section>
    </main>
  );
}
