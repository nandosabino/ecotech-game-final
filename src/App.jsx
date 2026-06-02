import { useState } from "react";
import Inicio from "./pages/Inicio";
import Jogo from "./pages/Jogo";
import ApresentacaoFases from "./pages/ApresentacaoFases";

export default function App() {
  const [tela, setTela] = useState("inicio");

  return (
    <>
      {tela === "inicio" && <Inicio iniciarJogo={() => setTela("fases")} />}

      {tela === "fases" && (
        <ApresentacaoFases iniciarDesafio={() => setTela("jogo")} />
      )}

      {tela === "jogo" && <Jogo />}
    </>
  );
}
