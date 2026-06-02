export const perguntas = [
  {
    id: 1,
    fase: 1,
    tipo: "decisao",
    nivel: "difícil",
    pergunta:
      "A escola produz muitos resíduos recicláveis, mas poucos alunos realizam a separação correta. Qual estratégia teria maior impacto educativo?",
    alternativas: [
      {
        texto: "Implantar coleta seletiva junto com campanhas de conscientização",
        correta: true,
        impacto: {
          sustentabilidade: 15,
          consciencia: 15,
          recursos: -5,
        },
      },
      {
        texto: "Apenas colocar mais lixeiras pela escola",
        correta: false,
        impacto: {
          sustentabilidade: 5,
          consciencia: 0,
          recursos: -5,
        },
      },
      {
        texto: "Punir os estudantes que descartarem lixo errado",
        correta: false,
        impacto: {
          sustentabilidade: 2,
          consciencia: -10,
          recursos: 0,
        },
      },
      {
        texto: "Ignorar, pois o lixo será recolhido pela coleta urbana",
        correta: false,
        impacto: {
          sustentabilidade: -15,
          consciencia: -10,
          recursos: 0,
        },
      },
    ],
  },

  {
    id: 2,
    fase: 1,
    tipo: "decisao",
    nivel: "difícil",
    pergunta:
      "Qual ação contribui melhor para reduzir a poluição causada por resíduos sólidos na escola?",
    alternativas: [
      {
        texto: "Separar resíduos recicláveis e reduzir o uso de descartáveis",
        correta: true,
        impacto: {
          sustentabilidade: 15,
          consciencia: 10,
          recursos: -3,
        },
      },
      {
        texto: "Concentrar todo lixo em uma única lixeira grande",
        correta: false,
        impacto: {
          sustentabilidade: -8,
          consciencia: -5,
          recursos: 2,
        },
      },
      {
        texto: "Queimar parte dos resíduos para diminuir volume",
        correta: false,
        impacto: {
          sustentabilidade: -20,
          consciencia: -8,
          recursos: 0,
        },
      },
      {
        texto: "Descartar resíduos somente no final da semana",
        correta: false,
        impacto: {
          sustentabilidade: -5,
          consciencia: -3,
          recursos: 0,
        },
      },
    ],
  },

  {
    id: 3,
    fase: 1,
    tipo: "quiz",
    nivel: "médio",
    pergunta:
      "Na coleta seletiva, qual é a relação correta entre material e tipo de resíduo?",
    alternativas: [
      {
        texto: "Garrafa PET: plástico",
        correta: true,
        impacto: {
          sustentabilidade: 10,
          consciencia: 10,
        },
      },
      {
        texto: "Jornal: vidro",
        correta: false,
        impacto: {
          sustentabilidade: -5,
          consciencia: -3,
        },
      },
      {
        texto: "Lata de alumínio: papel",
        correta: false,
        impacto: {
          sustentabilidade: -5,
          consciencia: -3,
        },
      },
      {
        texto: "Garrafa de vidro: metal",
        correta: false,
        impacto: {
          sustentabilidade: -5,
          consciencia: -3,
        },
      },
    ],
  },
];