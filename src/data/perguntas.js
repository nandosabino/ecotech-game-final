export const perguntas = [
  // ===== FASE 1 =====

  {
    id: 1,
    fase: 1,
    tipo: "decisao",
    nivel: "médio",

    pergunta:
      "A cidade EcoTech enfrenta aumento no consumo de energia, desperdício de água e acúmulo de lixo. Qual deve ser a primeira estratégia para mudar esse cenário?",

    alternativas: [
      {
        texto: "Criar ações de Educação Ambiental para orientar a população",
        correta: true,
        impacto: {
          sustentabilidade: 15,
          consciencia: 20,
        },
      },

      {
        texto: "Ignorar os problemas até surgirem reclamações",
        correta: false,
        impacto: {
          sustentabilidade: -15,
          consciencia: -10,
        },
      },

      {
        texto: "Aumentar o consumo para estimular a economia",
        correta: false,
        impacto: {
          sustentabilidade: -20,
          recursos: -10,
        },
      },

      {
        texto: "Responsabilizar apenas o governo",
        correta: false,
        impacto: {
          consciencia: -15,
        },
      },
    ],

    explicacao:
      "A Educação Ambiental ajuda a população a compreender os impactos de suas ações e incentiva mudanças de comportamento sustentáveis.",
  },

  {
    id: 2,
    fase: 1,
    tipo: "decisao",
    nivel: "difícil",

    pergunta:
      "Uma escola deseja reduzir seu impacto ambiental. Qual medida apresenta melhor resultado a longo prazo?",

    alternativas: [
      {
        texto: "Implantar um programa permanente de sustentabilidade",
        correta: true,
        impacto: {
          sustentabilidade: 20,
          consciencia: 15,
        },
      },

      {
        texto: "Realizar apenas uma palestra por ano",
        correta: false,
        impacto: {
          consciencia: 5,
        },
      },

      {
        texto: "Comprar materiais descartáveis mais baratos",
        correta: false,
        impacto: {
          sustentabilidade: -15,
          recursos: -10,
        },
      },

      {
        texto: "Não realizar nenhuma ação",
        correta: false,
        impacto: {
          sustentabilidade: -20,
        },
      },
    ],

    explicacao:
      "Projetos contínuos geram mudanças de hábito mais duradouras do que ações isoladas.",
  },

  {
    id: 3,
    fase: 1,
    tipo: "decisao",
    nivel: "médio",

    pergunta:
      "Durante um evento escolar, sobra grande quantidade de alimentos. Qual atitude é mais sustentável?",

    alternativas: [
      {
        texto: "Planejar melhor as quantidades e evitar desperdícios",
        correta: true,
        impacto: {
          sustentabilidade: 15,
          recursos: 10,
        },
      },

      {
        texto: "Descartar toda a comida restante",
        correta: false,
        impacto: {
          sustentabilidade: -15,
        },
      },

      {
        texto: "Produzir ainda mais alimentos no próximo evento",
        correta: false,
        impacto: {
          recursos: -15,
        },
      },

      {
        texto: "Ignorar o desperdício",
        correta: false,
        impacto: {
          consciencia: -10,
        },
      },
    ],

    explicacao:
      "O consumo consciente busca evitar desperdícios e utilizar os recursos de forma responsável.",
  },

  {
    id: 4,
    fase: 1,
    tipo: "decisao",
    nivel: "difícil",

    pergunta:
      "Alguns moradores acreditam que pequenas atitudes individuais não fazem diferença. Qual resposta está correta?",

    alternativas: [
      {
        texto:
          "Pequenas ações, quando realizadas por muitas pessoas, geram grandes impactos positivos",
        correta: true,
        impacto: {
          consciencia: 20,
          sustentabilidade: 10,
        },
      },

      {
        texto: "Somente empresas causam impactos ambientais",
        correta: false,
        impacto: {
          consciencia: -15,
        },
      },

      {
        texto: "Os cidadãos não possuem responsabilidade ambiental",
        correta: false,
        impacto: {
          consciencia: -20,
        },
      },

      {
        texto: "Apenas governos devem agir",
        correta: false,
        impacto: {
          consciencia: -10,
        },
      },
    ],

    explicacao:
      "A responsabilidade ambiental é compartilhada entre cidadãos, empresas e governos.",
  },

  {
    id: 5,
    fase: 1,
    tipo: "decisao",
    nivel: "difícil",

    pergunta:
      "A prefeitura recebeu recursos para investir em um único projeto ambiental. Qual opção traz benefícios mais amplos para a comunidade?",

    alternativas: [
      {
        texto: "Criar hortas comunitárias e programas de Educação Ambiental",
        correta: true,
        impacto: {
          sustentabilidade: 20,
          consciencia: 20,
          recursos: 10,
        },
      },

      {
        texto: "Construir mais estacionamentos removendo áreas verdes",
        correta: false,
        impacto: {
          sustentabilidade: -20,
        },
      },

      {
        texto: "Expandir áreas urbanas sem planejamento",
        correta: false,
        impacto: {
          sustentabilidade: -15,
          recursos: -10,
        },
      },

      {
        texto: "Não utilizar os recursos disponíveis",
        correta: false,
        impacto: {
          sustentabilidade: -20,
          consciencia: -10,
        },
      },
    ],

    explicacao:
      "Hortas comunitárias promovem educação, alimentação saudável, participação social e sustentabilidade.",
  },

  // ===== FASE 2 =====

  {
  id: 6,
  fase: 2,
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
      },
    },
    {
      texto: "Ignorar, pois o lixo será recolhido pela coleta urbana",
      correta: false,
      impacto: {
        sustentabilidade: -15,
        consciencia: -10,
      },
    },
  ],
  explicacao:
    "A coleta seletiva funciona melhor quando vem acompanhada de Educação Ambiental. Só colocar lixeiras não garante mudança de hábito.",
},

{
  id: 7,
  fase: 2,
  tipo: "decisao",
  nivel: "médio",
  pergunta:
    "Na triagem da cidade, aparece uma garrafa PET com resto de refrigerante. Qual é a melhor atitude antes do descarte?",
  alternativas: [
    {
      texto: "Esvaziar a garrafa e descartá-la no plástico",
      correta: true,
      impacto: {
        sustentabilidade: 12,
        consciencia: 10,
      },
    },
    {
      texto: "Descartar com líquido dentro na lixeira de plástico",
      correta: false,
      impacto: {
        sustentabilidade: -8,
        consciencia: -5,
      },
    },
    {
      texto: "Colocar no lixo orgânico por conter líquido",
      correta: false,
      impacto: {
        sustentabilidade: -10,
      },
    },
    {
      texto: "Misturar com vidro e metal",
      correta: false,
      impacto: {
        sustentabilidade: -12,
      },
    },
  ],
  explicacao:
    "A garrafa PET é plástico, mas deve ser esvaziada para evitar contaminação dos outros resíduos recicláveis.",
},

{
  id: 8,
  fase: 2,
  tipo: "decisao",
  nivel: "difícil",
  pergunta:
    "Uma caixa de pizza está parcialmente engordurada. Qual decisão é mais correta?",
  alternativas: [
    {
      texto: "Separar a parte limpa para reciclagem e descartar a parte engordurada como rejeito",
      correta: true,
      impacto: {
        sustentabilidade: 15,
        consciencia: 15,
      },
    },
    {
      texto: "Colocar toda a caixa na lixeira de papel",
      correta: false,
      impacto: {
        sustentabilidade: -12,
        consciencia: -8,
      },
    },
    {
      texto: "Colocar toda a caixa no plástico",
      correta: false,
      impacto: {
        sustentabilidade: -15,
      },
    },
    {
      texto: "Queimar a caixa para reduzir volume",
      correta: false,
      impacto: {
        sustentabilidade: -20,
        consciencia: -10,
      },
    },
  ],
  explicacao:
    "Papel engordurado pode contaminar outros recicláveis. A melhor opção é separar a parte limpa e descartar a parte contaminada como rejeito.",
},

{
  id: 9,
  fase: 2,
  tipo: "decisao",
  nivel: "difícil",
  pergunta:
    "Durante a coleta, foram encontradas pilhas usadas misturadas ao lixo comum. Qual deve ser a destinação correta?",
  alternativas: [
    {
      texto: "Encaminhar para ponto de coleta específico ou logística reversa",
      correta: true,
      impacto: {
        sustentabilidade: 18,
        consciencia: 15,
        recursos: -5,
      },
    },
    {
      texto: "Jogar no lixo comum, pois são pequenas",
      correta: false,
      impacto: {
        sustentabilidade: -20,
        consciencia: -10,
      },
    },
    {
      texto: "Enterrar no solo para evitar contato com pessoas",
      correta: false,
      impacto: {
        sustentabilidade: -25,
      },
    },
    {
      texto: "Misturar com metais recicláveis",
      correta: false,
      impacto: {
        sustentabilidade: -15,
      },
    },
  ],
  explicacao:
    "Pilhas e baterias podem conter substâncias tóxicas e devem ser encaminhadas para pontos de coleta específicos.",
},

{
  id: 10,
  fase: 2,
  tipo: "decisao",
  nivel: "médio",
  pergunta:
    "Qual alternativa apresenta uma relação correta entre resíduo e destino?",
  alternativas: [
    {
      texto: "Jornal limpo → papel",
      correta: true,
      impacto: {
        sustentabilidade: 10,
        consciencia: 10,
      },
    },
    {
      texto: "Garrafa PET → vidro",
      correta: false,
      impacto: {
        sustentabilidade: -8,
        consciencia: -5,
      },
    },
    {
      texto: "Lata de alumínio → papel",
      correta: false,
      impacto: {
        sustentabilidade: -8,
      },
    },
    {
      texto: "Garrafa de vidro → plástico",
      correta: false,
      impacto: {
        sustentabilidade: -8,
      },
    },
  ],
  explicacao:
    "Jornal limpo deve ser destinado à reciclagem de papel. A separação correta melhora o reaproveitamento dos materiais.",
},

// ===== FASE 3 =====

{
  id: 11,
  fase: 3,
  tipo: "decisao",
  nivel: "médio",
  pergunta:
    "A cidade EcoTech está enfrentando uma estiagem prolongada. Qual ação deve ser priorizada para reduzir o desperdício de água?",
  alternativas: [
    {
      texto: "Identificar vazamentos e promover campanhas de uso consciente",
      correta: true,
      impacto: {
        agua: 20,
        consciencia: 15,
        recursos: 5,
      },
    },
    {
      texto: "Aumentar o consumo para manter a rotina da população",
      correta: false,
      impacto: {
        agua: -20,
        consciencia: -10,
      },
    },
    {
      texto: "Ignorar pequenos vazamentos por parecerem pouco importantes",
      correta: false,
      impacto: {
        agua: -15,
        recursos: -5,
      },
    },
    {
      texto: "Usar água potável para lavar calçadas diariamente",
      correta: false,
      impacto: {
        agua: -20,
        consciencia: -10,
      },
    },
  ],
  explicacao:
    "Durante uma crise hídrica, corrigir vazamentos e orientar a população são medidas eficientes para reduzir perdas e evitar desperdícios.",
},

{
  id: 12,
  fase: 3,
  tipo: "decisao",
  nivel: "difícil",
  pergunta:
    "Uma escola quer economizar água sem prejudicar suas atividades. Qual solução é mais sustentável?",
  alternativas: [
    {
      texto: "Captar água da chuva para limpeza de áreas externas e irrigação",
      correta: true,
      impacto: {
        agua: 20,
        sustentabilidade: 15,
        recursos: 8,
      },
    },
    {
      texto: "Usar água potável para todas as atividades, mesmo as que não exigem",
      correta: false,
      impacto: {
        agua: -18,
        sustentabilidade: -8,
      },
    },
    {
      texto: "Suspender qualquer ação educativa sobre o tema",
      correta: false,
      impacto: {
        consciencia: -15,
      },
    },
    {
      texto: "Regar plantas nos horários mais quentes do dia",
      correta: false,
      impacto: {
        agua: -15,
        sustentabilidade: -5,
      },
    },
  ],
  explicacao:
    "A captação de água da chuva permite reutilizar água em atividades que não exigem água potável, reduzindo o consumo e o desperdício.",
},

{
  id: 13,
  fase: 3,
  tipo: "decisao",
  nivel: "médio",
  pergunta:
    "Em uma residência, qual atitude representa melhor o consumo consciente de água?",
  alternativas: [
    {
      texto: "Tomar banhos mais curtos e fechar a torneira ao escovar os dentes",
      correta: true,
      impacto: {
        agua: 15,
        consciencia: 15,
      },
    },
    {
      texto: "Deixar a torneira aberta durante toda a escovação",
      correta: false,
      impacto: {
        agua: -12,
        consciencia: -8,
      },
    },
    {
      texto: "Lavar o carro com mangueira aberta por vários minutos",
      correta: false,
      impacto: {
        agua: -18,
      },
    },
    {
      texto: "Ignorar o consumo porque a conta de água ainda está baixa",
      correta: false,
      impacto: {
        agua: -10,
        consciencia: -10,
      },
    },
  ],
  explicacao:
    "Pequenas mudanças de hábito, quando praticadas por muitas pessoas, reduzem significativamente o consumo de água.",
},

{
  id: 14,
  fase: 3,
  tipo: "decisao",
  nivel: "difícil",
  pergunta:
    "A cidade percebeu que parte da água tratada se perde antes de chegar às casas. Qual medida resolve melhor esse problema?",
  alternativas: [
    {
      texto: "Investir em manutenção da rede de abastecimento e detecção de vazamentos",
      correta: true,
      impacto: {
        agua: 22,
        recursos: 10,
        sustentabilidade: 10,
      },
    },
    {
      texto: "Aumentar a retirada de água dos rios sem corrigir vazamentos",
      correta: false,
      impacto: {
        agua: -20,
        sustentabilidade: -15,
      },
    },
    {
      texto: "Culpar apenas os moradores pelo consumo elevado",
      correta: false,
      impacto: {
        consciencia: -10,
      },
    },
    {
      texto: "Reduzir campanhas educativas e não fiscalizar perdas",
      correta: false,
      impacto: {
        agua: -15,
        consciencia: -10,
      },
    },
  ],
  explicacao:
    "Perdas na rede de abastecimento desperdiçam água tratada. Manutenção e monitoramento são essenciais para uma gestão hídrica eficiente.",
},

{
  id: 15,
  fase: 3,
  tipo: "decisao",
  nivel: "difícil",
  pergunta:
    "Durante a crise hídrica, a população precisa escolher uma medida coletiva. Qual opção apresenta maior impacto positivo?",
  alternativas: [
    {
      texto: "Criar um plano comunitário de economia, reuso e monitoramento do consumo",
      correta: true,
      impacto: {
        agua: 25,
        consciencia: 20,
        sustentabilidade: 10,
      },
    },
    {
      texto: "Esperar a chuva voltar sem mudar hábitos",
      correta: false,
      impacto: {
        agua: -20,
        consciencia: -15,
      },
    },
    {
      texto: "Usar reservatórios sem controle ou planejamento",
      correta: false,
      impacto: {
        agua: -15,
        recursos: -10,
      },
    },
    {
      texto: "Priorizar atividades que gastam muita água, mesmo durante a seca",
      correta: false,
      impacto: {
        agua: -25,
        sustentabilidade: -10,
      },
    },
  ],
  explicacao:
    "A crise hídrica exige ação coletiva, planejamento e mudança de hábitos. Reuso, economia e monitoramento ajudam a preservar os recursos hídricos.",
},

// ===== FASE 4 =====

{
  id: 16,
  fase: 4,
  tipo: "decisao",
  nivel: "difícil",

  pergunta:
    "Uma indústria próxima à cidade está despejando resíduos em um rio. Qual medida deve ser tomada primeiro?",

  alternativas: [
    {
      texto: "Fiscalizar a empresa e exigir tratamento adequado dos efluentes",
      correta: true,
      impacto: {
        sustentabilidade: 20,
        agua: 20,
        consciencia: 10,
      },
    },

    {
      texto: "Permitir o descarte apenas durante a noite",
      correta: false,
      impacto: {
        agua: -20,
      },
    },

    {
      texto: "Ignorar o problema porque o rio é grande",
      correta: false,
      impacto: {
        agua: -25,
        consciencia: -10,
      },
    },

    {
      texto: "Transferir o despejo para outro local",
      correta: false,
      impacto: {
        sustentabilidade: -15,
      },
    },
  ],

  explicacao:
    "O tratamento adequado dos efluentes evita a contaminação da água e protege a saúde da população e dos ecossistemas.",
},
{
  id: 17,
  fase: 4,
  tipo: "decisao",
  nivel: "médio",

  pergunta:
    "Uma área de vegetação será removida para construção de novos empreendimentos. Qual consequência ambiental pode ocorrer?",

  alternativas: [
    {
      texto: "Perda de biodiversidade e aumento da temperatura local",
      correta: true,
      impacto: {
        sustentabilidade: 15,
        consciencia: 15,
      },
    },

    {
      texto: "Melhoria automática da qualidade do ar",
      correta: false,
      impacto: {
        consciencia: -10,
      },
    },

    {
      texto: "Aumento da infiltração de água no solo",
      correta: false,
      impacto: {
        agua: -10,
      },
    },

    {
      texto: "Nenhum impacto relevante",
      correta: false,
      impacto: {
        consciencia: -15,
      },
    },
  ],

  explicacao:
    "O desmatamento reduz a biodiversidade, aumenta o calor e compromete o equilíbrio ambiental.",
},
{
  id: 18,
  fase: 4,
  tipo: "decisao",
  nivel: "difícil",

  pergunta:
    "Moradores estão descartando resíduos em terrenos baldios. Qual solução apresenta melhor resultado a longo prazo?",

  alternativas: [
    {
      texto: "Educação ambiental, fiscalização e coleta adequada",
      correta: true,
      impacto: {
        sustentabilidade: 20,
        consciencia: 20,
      },
    },

    {
      texto: "Apenas limpar o local sem investigar a causa",
      correta: false,
      impacto: {
        sustentabilidade: -5,
      },
    },

    {
      texto: "Queimar os resíduos acumulados",
      correta: false,
      impacto: {
        sustentabilidade: -20,
        consciencia: -10,
      },
    },

    {
      texto: "Transferir os resíduos para outro terreno",
      correta: false,
      impacto: {
        sustentabilidade: -15,
      },
    },
  ],

  explicacao:
    "Resolver a causa do problema é mais eficiente do que apenas remover os resíduos temporariamente.",
},
{
  id: 19,
  fase: 4,
  tipo: "decisao",
  nivel: "difícil",

  pergunta:
    "A cidade apresenta altos índices de poluição do ar causados pelo trânsito. Qual medida gera maior impacto positivo?",

  alternativas: [
    {
      texto: "Investir em transporte público e mobilidade sustentável",
      correta: true,
      impacto: {
        sustentabilidade: 20,
        consciencia: 15,
      },
    },

    {
      texto: "Aumentar o número de veículos particulares",
      correta: false,
      impacto: {
        sustentabilidade: -20,
      },
    },

    {
      texto: "Ignorar os índices de poluição",
      correta: false,
      impacto: {
        consciencia: -15,
      },
    },

    {
      texto: "Remover áreas verdes para ampliar estacionamentos",
      correta: false,
      impacto: {
        sustentabilidade: -25,
      },
    },
  ],

  explicacao:
    "O transporte público reduz emissões, congestionamentos e melhora a qualidade do ar.",
},
{
  id: 20,
  fase: 4,
  tipo: "decisao",
  nivel: "difícil",

  pergunta:
    "Uma área degradada precisa ser recuperada. Qual ação é mais adequada?",

  alternativas: [
    {
      texto: "Reflorestamento com espécies adequadas e monitoramento ambiental",
      correta: true,
      impacto: {
        sustentabilidade: 25,
        agua: 10,
        consciencia: 10,
      },
    },

    {
      texto: "Cobrir a área com concreto para evitar erosão",
      correta: false,
      impacto: {
        sustentabilidade: -20,
      },
    },

    {
      texto: "Abandonar a área sem acompanhamento",
      correta: false,
      impacto: {
        sustentabilidade: -10,
      },
    },

    {
      texto: "Utilizar espécies invasoras de crescimento rápido",
      correta: false,
      impacto: {
        sustentabilidade: -15,
      },
    },
  ],

  explicacao:
    "A recuperação ambiental exige planejamento, reflorestamento adequado e acompanhamento técnico.",
},

// ===== FASE 5 =====

{
  id: 21,
  fase: 5,
  tipo: "decisao",
  nivel: "médio",
  pergunta:
    "A cidade EcoTech quer reduzir o consumo de energia em prédios públicos. Qual tecnologia seria mais adequada?",
  alternativas: [
    {
      texto: "Instalar painéis solares e sistemas de iluminação inteligente",
      correta: true,
      impacto: {
        sustentabilidade: 20,
        consciencia: 10,
        recursos: 10,
      },
    },
    {
      texto: "Manter lâmpadas antigas ligadas durante todo o dia",
      correta: false,
      impacto: {
        sustentabilidade: -20,
        recursos: -15,
      },
    },
    {
      texto: "Aumentar o consumo energético sem monitoramento",
      correta: false,
      impacto: {
        sustentabilidade: -15,
        consciencia: -10,
      },
    },
    {
      texto: "Ignorar o gasto de energia porque ele é responsabilidade da prefeitura",
      correta: false,
      impacto: {
        consciencia: -15,
      },
    },
  ],
  explicacao:
    "Energia solar e iluminação inteligente reduzem o consumo, diminuem custos e tornam os prédios públicos mais sustentáveis.",
},

{
  id: 22,
  fase: 5,
  tipo: "decisao",
  nivel: "difícil",
  pergunta:
    "Durante a crise hídrica, a cidade quer usar tecnologia para evitar desperdícios. Qual solução é mais eficiente?",
  alternativas: [
    {
      texto: "Instalar sensores para detectar vazamentos na rede de abastecimento",
      correta: true,
      impacto: {
        agua: 20,
        sustentabilidade: 15,
        recursos: 10,
      },
    },
    {
      texto: "Aumentar a retirada de água sem monitorar perdas",
      correta: false,
      impacto: {
        agua: -20,
        sustentabilidade: -10,
      },
    },
    {
      texto: "Ignorar vazamentos pequenos porque não causam impacto",
      correta: false,
      impacto: {
        agua: -15,
        consciencia: -10,
      },
    },
    {
      texto: "Usar água potável para atividades que não exigem controle",
      correta: false,
      impacto: {
        agua: -15,
      },
    },
  ],
  explicacao:
    "Sensores inteligentes ajudam a identificar vazamentos rapidamente, evitando perdas de água e melhorando a gestão dos recursos hídricos.",
},

{
  id: 23,
  fase: 5,
  tipo: "decisao",
  nivel: "médio",
  pergunta:
    "A prefeitura deseja melhorar a coleta de resíduos usando tecnologia. Qual alternativa é mais sustentável?",
  alternativas: [
    {
      texto: "Usar sensores em lixeiras para otimizar rotas de coleta",
      correta: true,
      impacto: {
        sustentabilidade: 15,
        consciencia: 10,
        recursos: 10,
      },
    },
    {
      texto: "Realizar coleta sem planejamento, mesmo com caminhões vazios",
      correta: false,
      impacto: {
        sustentabilidade: -15,
        recursos: -10,
      },
    },
    {
      texto: "Misturar todos os resíduos para acelerar o processo",
      correta: false,
      impacto: {
        sustentabilidade: -20,
        consciencia: -10,
      },
    },
    {
      texto: "Reduzir a coleta em áreas com maior acúmulo de lixo",
      correta: false,
      impacto: {
        sustentabilidade: -15,
      },
    },
  ],
  explicacao:
    "Sensores em lixeiras permitem identificar quando estão cheias, otimizando rotas, reduzindo custos e melhorando a gestão de resíduos.",
},

{
  id: 24,
  fase: 5,
  tipo: "decisao",
  nivel: "difícil",
  pergunta:
    "A cidade quer investir em energia limpa, mas possui áreas com muito vento e boa incidência solar. Qual decisão é mais adequada?",
  alternativas: [
    {
      texto: "Avaliar o potencial local e combinar energia solar e eólica",
      correta: true,
      impacto: {
        sustentabilidade: 25,
        recursos: 10,
        consciencia: 10,
      },
    },
    {
      texto: "Usar apenas combustíveis fósseis por serem tradicionais",
      correta: false,
      impacto: {
        sustentabilidade: -25,
      },
    },
    {
      texto: "Escolher qualquer tecnologia sem estudar o território",
      correta: false,
      impacto: {
        recursos: -15,
        sustentabilidade: -10,
      },
    },
    {
      texto: "Abandonar o projeto por exigir planejamento",
      correta: false,
      impacto: {
        consciencia: -10,
        sustentabilidade: -15,
      },
    },
  ],
  explicacao:
    "Tecnologias sustentáveis devem considerar as características locais. Energia solar e eólica podem se complementar quando há planejamento adequado.",
},

{
  id: 25,
  fase: 5,
  tipo: "decisao",
  nivel: "difícil",
  pergunta:
    "Para transformar EcoTech em uma cidade inteligente sustentável, qual conjunto de ações é mais completo?",
  alternativas: [
    {
      texto: "Energia limpa, sensores ambientais, coleta inteligente e participação da população",
      correta: true,
      impacto: {
        sustentabilidade: 25,
        agua: 10,
        consciencia: 15,
        recursos: 10,
      },
    },
    {
      texto: "Apenas instalar equipamentos modernos sem educação ambiental",
      correta: false,
      impacto: {
        sustentabilidade: 5,
        consciencia: -15,
        recursos: -10,
      },
    },
    {
      texto: "Priorizar tecnologia sem considerar impactos sociais e ambientais",
      correta: false,
      impacto: {
        sustentabilidade: -10,
        consciencia: -10,
      },
    },
    {
      texto: "Manter práticas antigas e evitar inovação",
      correta: false,
      impacto: {
        sustentabilidade: -20,
        recursos: -10,
      },
    },
  ],
  explicacao:
    "Uma cidade inteligente sustentável combina inovação tecnológica, preservação ambiental, eficiência no uso de recursos e participação social.",
},

// ===== FASE 5 =====

{
  id: 26,
  fase: 6,
  tipo: "decisao",
  nivel: "difícil",

  pergunta:
    "Uma escola deseja reduzir seu impacto ambiental. Qual conjunto de ações apresenta os melhores resultados?",

  alternativas: [
    {
      texto: "Educação Ambiental, economia de água e coleta seletiva",
      correta: true,
      impacto: {
        sustentabilidade: 20,
        consciencia: 20,
      },
    },

    {
      texto: "Apenas aumentar o consumo de recursos",
      correta: false,
      impacto: {
        sustentabilidade: -20,
      },
    },

    {
      texto: "Ignorar os impactos ambientais",
      correta: false,
      impacto: {
        consciencia: -15,
      },
    },

    {
      texto: "Realizar ações isoladas sem planejamento",
      correta: false,
      impacto: {
        sustentabilidade: -10,
      },
    },
  ],

  explicacao:
    "A integração entre educação, economia de recursos e gestão de resíduos gera resultados ambientais mais duradouros.",
},

{
  id: 27,
  fase: 6,
  tipo: "decisao",
  nivel: "difícil",

  pergunta:
    "Durante uma crise hídrica, qual atitude é mais eficiente?",

  alternativas: [
    {
      texto: "Reduzir desperdícios e monitorar o consumo",
      correta: true,
      impacto: {
        agua: 20,
        consciencia: 15,
      },
    },

    {
      texto: "Ignorar pequenos vazamentos",
      correta: false,
      impacto: {
        agua: -15,
      },
    },

    {
      texto: "Aumentar o consumo de água",
      correta: false,
      impacto: {
        agua: -20,
      },
    },

    {
      texto: "Esperar a chuva resolver tudo",
      correta: false,
      impacto: {
        agua: -10,
      },
    },
  ],

  explicacao:
    "O uso consciente da água é fundamental durante períodos de escassez.",
},

{
  id: 28,
  fase: 6,
  tipo: "decisao",
  nivel: "médio",

  pergunta:
    "Qual é o destino correto para pilhas e baterias usadas?",

  alternativas: [
    {
      texto: "Pontos de coleta específicos e logística reversa",
      correta: true,
      impacto: {
        sustentabilidade: 15,
        consciencia: 15,
      },
    },

    {
      texto: "Lixo comum",
      correta: false,
      impacto: {
        sustentabilidade: -20,
      },
    },

    {
      texto: "Enterrar no quintal",
      correta: false,
      impacto: {
        sustentabilidade: -25,
      },
    },

    {
      texto: "Descartar em rios",
      correta: false,
      impacto: {
        sustentabilidade: -30,
      },
    },
  ],

  explicacao:
    "Pilhas e baterias possuem metais que podem contaminar o solo e a água.",
},

{
  id: 29,
  fase: 6,
  tipo: "decisao",
  nivel: "difícil",

  pergunta:
    "Qual medida ajuda a reduzir a poluição do ar nas cidades?",

  alternativas: [
    {
      texto: "Investir em transporte público sustentável",
      correta: true,
      impacto: {
        sustentabilidade: 20,
      },
    },

    {
      texto: "Aumentar o número de veículos particulares",
      correta: false,
      impacto: {
        sustentabilidade: -20,
      },
    },

    {
      texto: "Remover áreas verdes",
      correta: false,
      impacto: {
        sustentabilidade: -25,
      },
    },

    {
      texto: "Ignorar os índices de poluição",
      correta: false,
      impacto: {
        consciencia: -10,
      },
    },
  ],

  explicacao:
    "A mobilidade sustentável reduz emissões e melhora a qualidade do ar.",
},

{
  id: 30,
  fase: 6,
  tipo: "decisao",
  nivel: "difícil",

  pergunta:
    "Para transformar uma cidade em sustentável, qual estratégia é mais completa?",

  alternativas: [
    {
      texto:
        "Educação Ambiental, tecnologia sustentável, gestão de resíduos e preservação dos recursos naturais",
      correta: true,
      impacto: {
        sustentabilidade: 25,
        consciencia: 20,
        agua: 10,
      },
    },

    {
      texto: "Investir apenas em tecnologia",
      correta: false,
      impacto: {
        consciencia: -10,
      },
    },

    {
      texto: "Investir apenas em reciclagem",
      correta: false,
      impacto: {
        sustentabilidade: -5,
      },
    },

    {
      texto: "Não realizar planejamento ambiental",
      correta: false,
      impacto: {
        sustentabilidade: -25,
      },
    },
  ],

  explicacao:
    "A sustentabilidade depende da integração entre educação, gestão, tecnologia e preservação ambiental.",
}

];


