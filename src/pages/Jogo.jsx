import { fases } from "../data/fases";
import { useState } from "react";
import { perguntas } from "../data/perguntas";
import FaseIntro from "../components/FaseIntro";
import ReciclagemGame from "../components/ReciclagemGame";
import Final from "./Final";
import FaseResultado from "../components/FaseResultado";

export default function Jogo() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [faseAtual, setFaseAtual] = useState(0);
  const [fimDeJogo, setFimDeJogo] = useState(false);

  const [status, setStatus] = useState({
    sustentabilidade: 50,
    agua: 50,
    energia: 50,
    consciencia: 50,
    recursos: 50,
  });

  const [pontuacao, setPontuacao] = useState(0);
  const [pontosFase, setPontosFase] = useState(0);

  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [respondido, setRespondido] = useState(false);
  const [mostrarIntroFase, setMostrarIntroFase] = useState(true);
  const [desafioConcluido, setDesafioConcluido] = useState(false);
  const [mostrarResultadoFase, setMostrarResultadoFase] = useState(false);

  const fase = fases[faseAtual];

  const perguntasDaFase = perguntas.filter(
    (pergunta) => pergunta.fase === fase.id,
  );

  const perguntaAtual = perguntasDaFase[indiceAtual];

  if (mostrarIntroFase) {
    return <FaseIntro fase={fase} iniciar={() => setMostrarIntroFase(false)} />;
  }

  function responder(alternativa, index) {
    if (respondido) return;

    setRespostaSelecionada(index);
    setRespondido(true);

    const impacto = alternativa.impacto;

    setStatus((prev) => ({
      sustentabilidade: prev.sustentabilidade + (impacto.sustentabilidade || 0),

      agua: prev.agua + (impacto.agua || 0),

      energia: prev.energia + (impacto.energia || 0),

      consciencia: prev.consciencia + (impacto.consciencia || 0),

      recursos: prev.recursos + (impacto.recursos || 0),
    }));

    if (alternativa.correta) {
      setPontuacao((prev) => prev + 10);

      setPontosFase((prev) => prev + 10);
    }

    setTimeout(() => {
      if (indiceAtual < perguntasDaFase.length - 1) {
        setIndiceAtual((prev) => prev + 1);

        if (indiceAtual === perguntasDaFase.length - 1) {
          setMostrarResultadoFase(true);
        }
      } else {
        setFimDeJogo(true);
      }

      setRespostaSelecionada(null);
      setRespondido(false);
    }, 1500);
  }

  if (fase.tipo === "residuos" && !desafioConcluido) {
    return (
      <ReciclagemGame
        finalizar={(pontosMinigame) => {
          setPontuacao((prev) => prev + pontosMinigame);

          setPontosFase((prev) => prev + pontosMinigame);

          setStatus((prev) => ({
            ...prev,
            sustentabilidade: prev.sustentabilidade + 15,
            consciencia: prev.consciencia + 10,
          }));

          setDesafioConcluido(true);
        }}
      />
    );
  }

  if (fimDeJogo) {
    return (
      <Final
        pontuacao={pontuacao}
        status={status}
        reiniciar={() => window.location.reload()}
      />
    );
  }

  if (mostrarResultadoFase) {
    const aprovado = pontosFase >= fase.pontuacaoMinima;

    return (
      <FaseResultado
        fase={fase}
        pontosFase={pontosFase}
        aprovado={aprovado}
        continuar={() => {
          if (faseAtual < fases.length - 1) {
            setFaseAtual((prev) => prev + 1);

            setIndiceAtual(0);

            setPontosFase(0);

            setDesafioConcluido(false);

            setMostrarIntroFase(true);

            setMostrarResultadoFase(false);
          } else {
            setFimDeJogo(true);
          }
        }}
        repetir={() => {
          setIndiceAtual(0);

          setPontosFase(0);

          setDesafioConcluido(false);

          setMostrarIntroFase(true);

          setMostrarResultadoFase(false);
        }}
      />
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-5">
      <section className="w-full max-w-[430px] mx-auto">
        <div className="mb-5">
          <p className="text-green-400 text-xs font-semibold uppercase">
            Fase {fase.id} • {fase.nome}
          </p>

          <div className="flex items-center justify-between mt-1">
            <h1 className="text-xl font-bold">Desafio Ambiental</h1>

            <span className="text-xs text-slate-400">
              {indiceAtual + 1}/{perguntasDaFase.length}
            </span>
          </div>

          <div className="w-full h-2 bg-slate-800 rounded-full mt-4 overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full transition-all"
              style={{
                width: `${((indiceAtual + 1) / perguntasDaFase.length) * 100}%`,
              }}
            />
          </div>

          <div className="mt-2 flex justify-between text-xs text-slate-400">
            <span>Pontuação da fase: {pontosFase}</span>

            <span>Meta: {fase.pontuacaoMinima}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="border border-slate-800 rounded-2xl p-3">
            <p className="text-xs text-slate-400">Sustentabilidade 🌱</p>
            <strong className="text-2xl">{status.sustentabilidade}</strong>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3">
            <p className="text-xs text-slate-400">Água 💧</p>
            <strong className="text-xl font-bold">{status.agua}</strong>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3">
            <p className="text-xs text-slate-400">Energia ⚡</p>
            <strong className="text-2xl">{status.energia}</strong>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3">
            <p className="text-xs text-slate-400">Consciência 🧠</p>
            <strong className="text-2xl">{status.consciencia}</strong>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 mb-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-green-400 text-xs font-bold uppercase">
              {perguntaAtual.nivel}
            </span>

            <span className="text-xs text-slate-400">+10 pontos</span>
          </div>

          <h2 className="text-lg font-bold leading-relaxed">
            {perguntaAtual.pergunta}
          </h2>
        </div>

        <div className="flex flex-col gap-3 pb-6">
          {perguntaAtual.alternativas.map((alternativa, index) => (
            <button
              key={index}
              onClick={() => responder(alternativa, index)}
              disabled={respondido}
              className={`w-full min-h-[64px] rounded-2xl px-4 py-4 text-left text-sm leading-relaxed 
                transition-all border active:scale-[0.98] ${
                  respondido
                    ? alternativa.correta
                      ? "bg-green-500 border-green-400 text-slate-950"
                      : respostaSelecionada === index
                        ? "bg-red-500 border-red-400 text-white"
                        : "bg-slate-900 border-slate-800 text-slate-500"
                    : "bg-slate-900 border-slate-800 hover:border-green-500"
                }`}
            >
              <span className="font-bold text-green-400 mr-2">
                {String.fromCharCode(65 + index)}
              </span>
              {alternativa.texto}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
