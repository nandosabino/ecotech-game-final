import { fases } from "../data/fases";
import { useState } from "react";
import { perguntas } from "../data/perguntas";
import FaseIntro from "../components/FaseIntro";
import ReciclagemGame from "../components/ReciclagemGame";
import Final from "./Final";
import FaseResultado from "../components/FaseResultado";
import QuestionCard from "../components/QuestionCard";
import CidadeHUD from "../components/CidadeHUD";
import { AnimatePresence, motion } from "framer-motion";

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
  const [feedback, setFeedback] = useState(null);

  const fase = fases[faseAtual];

  if (fimDeJogo) {
    return (
      <Final
        pontuacao={pontuacao}
        status={status}
        reiniciar={() => window.location.reload()}
      />
    );
  }

  const perguntasDaFase = perguntas.filter(
    (pergunta) => pergunta.fase === fase.id,
  );

  const perguntaAtual = perguntasDaFase[indiceAtual];

  if (mostrarIntroFase) {
    return <FaseIntro fase={fase} iniciar={() => setMostrarIntroFase(false)} />;
  }

  if (fase.tipo === "residuos" && !desafioConcluido) {
    return (
      <ReciclagemGame
        finalizar={(pontosMinigame) => {
          setPontuacao((prev) => prev + pontosMinigame);
          setPontosFase((prev) => prev + pontosMinigame);

          setStatus((prev) => ({
            ...prev,
            sustentabilidade: Math.min(100, prev.sustentabilidade + 15),
            consciencia: Math.min(100, prev.consciencia + 10),
          }));

          setDesafioConcluido(true);
          setMostrarResultadoFase(false);
        }}
      />
    );
  }

  if (!perguntaAtual && !mostrarResultadoFase && !fimDeJogo) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
        <p>Nenhuma pergunta encontrada para esta fase</p>
      </main>
    );
  }

  function calcularPontos(nivel) {
    const nivelNormalizado = nivel.toLowerCase();

    if (nivelNormalizado === "facil" || nivelNormalizado === "facil") return 50;

    if (nivelNormalizado === "medio" || nivelNormalizado === "medio")
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

  function responder(alternativa, index) {
    if (respondido) return;

    setRespostaSelecionada(index);
    setRespondido(true);
    setFeedback(null);

    setFeedback({
      correta: alternativa.correta,
      explicacao: perguntaAtual.explicacao,
    });

    const impacto = alternativa.impacto || {};

    setStatus((prev) => ({
      sustentabilidade: Math.max(
        0,
        Math.min(100, prev.sustentabilidade + (impacto.sustentabilidade || 0)),
      ),
      agua: Math.max(0, Math.min(100, prev.agua + (impacto.agua || 0))),
      energia: Math.max(
        0,
        Math.min(100, prev.energia + (impacto.energia || 0)),
      ),
      consciencia: Math.max(
        0,
        Math.min(100, prev.consciencia + (impacto.consciencia || 0)),
      ),
      recursos: Math.max(
        0,
        Math.min(100, prev.recursos + (impacto.recursos || 0)),
      ),
    }));

    if (alternativa.correta) {
      const pontosGanhos = calcularPontos(perguntaAtual.nivel);

      setPontuacao((prev) => prev + pontosGanhos);
      setPontosFase((prev) => prev + pontosGanhos);
    }
  }

  function proximaPergunta() {
    if (indiceAtual < perguntasDaFase.length - 1) {
      setIndiceAtual((prev) => prev + 1);
    } else {
      setMostrarResultadoFase(true);
    }

    setRespostaSelecionada(null);
    setRespondido(false);
    setFeedback(null);
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
        voltar={() => window.location.reload()}
      />
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#064e3b_0%,_#020617_45%)] text-white px-4 py-5">
      <section className="w-full max-w-[430px] mx-auto">
        <div className="mb-5">
          <p className="text-green-400 text-xs font-semibold uppercase">
            Fase {fase.id} • {fase.nome}
          </p>

          <div className="flex justify-between items-center mt-3">
            <span className="text-xs text-slate-400">
              Pergunta {indiceAtual + 1}/{perguntasDaFase.length}
            </span>

            <span className="text-green-400 font-bold">⭐ {pontosFase}</span>
          </div>

          <div className="flex items-center justify-between mt-1">
            <h1 className="text-xl font-bold">Desafio Ambiental</h1>

            <span className="text-xs text-slate-400">
              {indiceAtual + 1}/{perguntasDaFase.length}
            </span>
          </div>

          <div className="w-full h-2 bg-slate-800 rounded-full mt-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
              animate={{
                width: `${((indiceAtual + 1) / perguntasDaFase.length) * 100}%`,
              }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <div className="flex justify-between mt-2 text-xs">
            <span className="text-slate-400">Meta: {fase.pontuacaoMinima}</span>

            <span className="text-green-400">{pontosFase} pts</span>
          </div>

          <div className="mt-2 flex justify-between text-xs text-slate-400">
            <span>Pontuação da fase: {pontosFase}</span>

            <span>Meta: {fase.pontuacaoMinima}</span>
          </div>
        </div>

        <CidadeHUD status={status} />

        <div className="flex flex-col gap-3 pb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={perguntaAtual.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <QuestionCard
                pergunta={perguntaAtual}
                responder={responder}
                respondido={respondido}
                respostaSelecionada={respostaSelecionada}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={`mt-4 rounded-2xl border p-4 text-sm ${
              feedback.correta
                ? "bg-green-500/10 border-green-500 text-green-300"
                : "bg-red-500/10 border-red-500 text-red-300"
            }`}
          >
            <strong>
              {feedback.correta ? "✅ Correto!" : "❌ Incorreto!"}
            </strong>

            <p className="mt-2 text-slate-300">{feedback.explicacao}</p>
          </motion.div>
        )}

        {respondido && (
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.01 }}
            onClick={proximaPergunta}
            className="w-full mt-4 bg-green-500 text-slate-950 font-bold py-4 rounded-2xl active:scale-[0.98] transition"
          >
            {indiceAtual < perguntasDaFase.length - 1
              ? "Próxima pergunta →"
              : "Ver resultado da fase"}
          </motion.button>
        )}
      </section>
    </main>
  );
}
