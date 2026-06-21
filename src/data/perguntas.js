export const perguntas = [
  // ===== FASE 1 =====

  {
id: 1,
fase: 1,
tipo: "decisao",
nivel: "medio",

pergunta:
"A cidade EcoTech enfrenta aumento no consumo de energia, desperdício de água e acúmulo de lixo. A prefeitura deseja iniciar um programa ambiental com baixo custo e resultados duradouros. Qual estratégia apresenta maior potencial de sucesso?",

alternativas: [
{
texto:
"Realizar uma palestra anual sobre sustentabilidade para a população",
correta: false,
impacto: {
consciencia: 5,
},
},

{
  texto:
    "Criar um programa contínuo de Educação Ambiental com participação da comunidade e acompanhamento dos resultados",
  correta: true,
  impacto: {
    sustentabilidade: 15,
    consciencia: 20,
    recursos: 5,
  },
},

{
  texto:
    "Investir apenas na compra de equipamentos sustentáveis sem ações educativas",
  correta: false,
  impacto: {
    sustentabilidade: 5,
    recursos: -10,
  },
},

{
  texto:
    "Concentrar todas as ações ambientais exclusivamente nos órgãos públicos",
  correta: false,
  impacto: {
    consciencia: -10,
  },
},

],

explicacao:
"A Educação Ambiental produz melhores resultados quando é contínua, participativa e acompanhada pela comunidade."
},

{
id: 2,
fase: 1,
tipo: "decisao",
nivel: "dificil",

pergunta:
"Uma escola pretende reduzir seus impactos ambientais ao longo dos próximos anos. Qual medida apresenta maior potencial de transformação permanente?",

alternativas: [
{
texto:
"Promover campanhas temáticas em datas comemorativas ambientais",
correta: false,
impacto: {
consciencia: 5,
},
},

{
  texto:
    "Substituir materiais sem modificar hábitos de consumo da comunidade escolar",
  correta: false,
  impacto: {
    sustentabilidade: 5,
  },
},

{
  texto:
    "Implantar um programa permanente de sustentabilidade integrado as atividades escolares",
  correta: true,
  impacto: {
    sustentabilidade: 20,
    consciencia: 15,
  },
},

{
  texto:
    "Realizar apenas investimentos estruturais sem participação dos estudantes",
  correta: false,
  impacto: {
    consciencia: 0,
  },
},

],

explicacao:
"Mudanças permanentes dependem de ações contínuas e da participação ativa da comunidade escolar."
},

{
id: 3,
fase: 1,
tipo: "decisao",
nivel: "medio",

pergunta:
"Após um grande evento escolar, foi identificado desperdício significativo de alimentos. Qual medida é mais eficiente para evitar que o problema se repita?",

alternativas: [
{
texto:
"Distribuir os alimentos excedentes sem avaliar as causas do desperdício",
correta: false,
impacto: {
sustentabilidade: 5,
},
},

{
  texto:
    "Planejar melhor as quantidades produzidas e monitorar o consumo dos participantes",
  correta: true,
  impacto: {
    sustentabilidade: 15,
    recursos: 10,
  },
},

{
  texto:
    "Produzir uma quantidade maior para evitar risco de faltar alimentos",
  correta: false,
  impacto: {
    recursos: -15,
  },
},

{
  texto:
    "Manter o planejamento atual e focar apenas na destinação dos resíduos",
  correta: false,
  impacto: {
    sustentabilidade: -5,
  },
},

],

explicacao:
"O consumo consciente envolve planejamento adequado e prevenção do desperdício antes que ele aconteça."
},

{
id: 4,
fase: 1,
tipo: "decisao",
nivel: "difícil",

pergunta:
"Durante uma reunião comunitária, alguns moradores afirmam que ações individuais têm impacto insignificante nos problemas ambientais. Qual argumento responde melhor a essa afirmação?",

alternativas: [
{
texto:
"Os problemas ambientais são responsabilidade exclusiva das empresas",
correta: false,
impacto: {
consciencia: -10,
},
},

{
  texto:
    "A responsabilidade ambiental pertence apenas aos governos e órgãos fiscalizadores",
  correta: false,
  impacto: {
    consciencia: -10,
  },
},

{
  texto:
    "Pequenas ações individuais, quando adotadas por muitas pessoas, podem gerar impactos ambientais significativos",
  correta: true,
  impacto: {
    consciencia: 20,
    sustentabilidade: 10,
  },
},

{
  texto:
    "As ações individuais só produzem resultados quando existem investimentos elevados",
  correta: false,
  impacto: {
    consciencia: -5,
  },
},

],

explicacao:
"A sustentabilidade depende da soma das ações individuais, coletivas, empresariais e governamentais."
},

{
id: 5,
fase: 1,
tipo: "decisao",
nivel: "difícil",

pergunta:
"A prefeitura recebeu recursos para financiar apenas um projeto ambiental. Considerando benefícios sociais, ambientais e educativos, qual alternativa apresenta o melhor custo-benefício para a comunidade?",

alternativas: [
{
texto:
"Criar hortas comunitárias associadas a programas permanentes de Educação Ambiental",
correta: true,
impacto: {
sustentabilidade: 20,
consciencia: 20,
recursos: 10,
},
},

{
  texto:
    "Construir novas áreas de estacionamento para atender ao crescimento urbano",
  correta: false,
  impacto: {
    sustentabilidade: -15,
  },
},

{
  texto:
    "Investir apenas em obras de infraestrutura sem ações educativas",
  correta: false,
  impacto: {
    consciencia: -5,
  },
},

{
  texto:
    "Destinar os recursos exclusivamente para campanhas publicitárias temporárias",
  correta: false,
  impacto: {
    consciencia: 5,
  },
},

],

explicacao:
"Hortas comunitárias combinam educação ambiental, participação social, segurança alimentar e melhoria da qualidade ambiental."
},

// ===== FASE 2 =====

  {
id: 6,
fase: 2,
tipo: "decisao",
nivel: "difícil",

pergunta:
"Uma escola produz grande quantidade de resíduos recicláveis, mas a separação incorreta continua sendo um problema. Qual estratégia tende a gerar melhores resultados a longo prazo?",

alternativas: [
{
texto:
"Instalar mais lixeiras coloridas sem modificar a rotina da comunidade escolar",
correta: false,
impacto: {
sustentabilidade: 5,
},
},

{
  texto:
    "Aplicar penalidades aos estudantes que descartarem resíduos incorretamente",
  correta: false,
  impacto: {
    consciencia: -10,
  },
},

{
  texto:
    "Implantar coleta seletiva associada a ações contínuas de Educação Ambiental e monitoramento dos resultados",
  correta: true,
  impacto: {
    sustentabilidade: 15,
    consciencia: 15,
    recursos: -5,
  },
},

{
  texto:
    "Transferir toda a responsabilidade da separação para a equipe de limpeza",
  correta: false,
  impacto: {
    consciencia: -10,
  },
},

],

explicacao:
"A coleta seletiva só apresenta bons resultados quando é acompanhada por ações educativas permanentes e participação da comunidade."
},

{
id: 7,
fase: 2,
tipo: "decisao",
nivel: "médio",

pergunta:
"Durante a triagem de resíduos, uma cooperativa identifica diversas garrafas PET contendo restos de líquidos. Qual procedimento é mais adequado?",

alternativas: [
{
texto:
"Encaminhar todas as garrafas para rejeito devido à presença de resíduos",
correta: false,
impacto: {
sustentabilidade: -10,
},
},

{
  texto:
    "Esvaziar as embalagens e encaminhá-las para reciclagem do plástico",
  correta: true,
  impacto: {
    sustentabilidade: 12,
    consciencia: 10,
  },
},

{
  texto:
    "Misturar as embalagens aos resíduos orgânicos para evitar contaminação",
  correta: false,
  impacto: {
    sustentabilidade: -12,
  },
},

{
  texto:
    "Descartar as embalagens diretamente em aterro sanitário",
  correta: false,
  impacto: {
    sustentabilidade: -8,
  },
},

],

explicacao:
"Resíduos recicláveis contaminados podem comprometer o processo de reciclagem. A limpeza básica melhora a qualidade do material."
},

{
id: 8,
fase: 2,
tipo: "decisao",
nivel: "difícil",

pergunta:
"Uma pizzaria deseja melhorar sua gestão de resíduos. Durante a coleta seletiva, várias caixas de pizza apresentam partes limpas e partes com gordura. Qual procedimento é mais adequado?",

alternativas: [
{
texto:
"Encaminhar toda a embalagem para reciclagem de papel",
correta: false,
impacto: {
sustentabilidade: -10,
},
},

{
  texto:
    "Separar as partes limpas para reciclagem e descartar as partes contaminadas como rejeito",
  correta: true,
  impacto: {
    sustentabilidade: 15,
    consciencia: 15,
  },
},

{
  texto:
    "Misturar as caixas aos resíduos orgânicos",
  correta: false,
  impacto: {
    sustentabilidade: -8,
  },
},

{
  texto:
    "Queimar as embalagens para reduzir o volume de resíduos",
  correta: false,
  impacto: {
    sustentabilidade: -20,
    consciencia: -10,
  },
},

],

explicacao:
"Resíduos contaminados por gordura podem comprometer lotes inteiros de papel reciclável."
},

{
id: 9,
fase: 2,
tipo: "decisao",
nivel: "difícil",

pergunta:
"Durante uma campanha de limpeza, foram encontradas pilhas e baterias descartadas junto ao lixo comum. Qual medida está de acordo com os princípios da logística reversa?",

alternativas: [
{
texto:
"Encaminhar as pilhas para pontos de coleta específicos ou sistemas de devolução do fabricante",
correta: true,
impacto: {
sustentabilidade: 18,
consciencia: 15,
recursos: -5,
},
},

{
  texto:
    "Misturar as pilhas aos resíduos metálicos recicláveis",
  correta: false,
  impacto: {
    sustentabilidade: -15,
  },
},

{
  texto:
    "Armazenar as pilhas em áreas abertas até que sejam recolhidas",
  correta: false,
  impacto: {
    sustentabilidade: -12,
  },
},

{
  texto:
    "Descartar em aterro comum devido ao pequeno tamanho do material",
  correta: false,
  impacto: {
    sustentabilidade: -20,
  },
},

],

explicacao:
"Pilhas e baterias podem conter metais pesados e exigem destinação específica por meio da logística reversa."
},

{
id: 10,
fase: 2,
tipo: "decisao",
nivel: "difícil",

pergunta:
"Uma prefeitura pretende aumentar a taxa de reciclagem do município. Qual medida tende a gerar maior eficiência no sistema de gestão de resíduos?",

alternativas: [
{
texto:
"Construir novos aterros sanitários para receber materiais recicláveis",
correta: false,
impacto: {
sustentabilidade: -15,
},
},

{
  texto:
    "Investir apenas em campanhas publicitárias sem melhorias operacionais",
  correta: false,
  impacto: {
    consciencia: 5,
  },
},

{
  texto:
    "Integrar coleta seletiva, Educação Ambiental, cooperativas de reciclagem e monitoramento dos indicadores",
  correta: true,
  impacto: {
    sustentabilidade: 20,
    consciencia: 15,
    recursos: 10,
  },
},

{
  texto:
    "Centralizar toda a responsabilidade da reciclagem nos cidadãos",
  correta: false,
  impacto: {
    consciencia: -10,
  },
},

],

explicacao:
"Sistemas eficientes de reciclagem dependem da integração entre gestão pública, população, cooperativas e Educação Ambiental."
},

// ===== FASE 3 =====

{
id: 11,
fase: 3,
tipo: "decisao",
nivel: "difícil",

pergunta:
"A cidade EcoTech enfrenta uma estiagem prolongada e os reservatórios atingiram níveis críticos. Considerando custo e eficiência, qual medida deve ser priorizada inicialmente pelo poder público?",

alternativas: [
{
texto:
"Aumentar a captação de água dos rios sem avaliar perdas no sistema de abastecimento",
correta: false,
impacto: {
agua: -15,
sustentabilidade: -10,
},
},

{
  texto:
    "Investir na identificação de vazamentos, reduzir perdas na rede e promover campanhas de uso consciente",
  correta: true,
  impacto: {
    agua: 20,
    consciencia: 15,
    recursos: 5,
  },
},

{
  texto:
    "Suspender programas de Educação Ambiental para concentrar recursos apenas na distribuição de água",
  correta: false,
  impacto: {
    consciencia: -15,
  },
},

{
  texto:
    "Construir novos reservatórios sem controlar o desperdício existente",
  correta: false,
  impacto: {
    recursos: -10,
  },
},

],

explicacao:
"Antes de ampliar a oferta de água, é fundamental reduzir perdas e desperdícios. Muitas cidades perdem grande parte da água tratada por vazamentos."
},

{
id: 12,
fase: 3,
tipo: "decisao",
nivel: "difícil",

pergunta:
"Uma escola pretende reduzir o consumo de água sem comprometer suas atividades diárias. Qual solução apresenta melhor relação entre sustentabilidade e viabilidade econômica?",

alternativas: [
{
texto:
"Instalar sistemas de captação de água da chuva para limpeza e irrigação",
correta: true,
impacto: {
agua: 20,
sustentabilidade: 15,
recursos: 8,
},
},

{
  texto:
    "Substituir toda a infraestrutura hidráulica da escola independentemente do estado atual",
  correta: false,
  impacto: {
    recursos: -15,
  },
},

{
  texto:
    "Aumentar o uso de água potável em todas as atividades para evitar riscos operacionais",
  correta: false,
  impacto: {
    agua: -15,
  },
},

{
  texto:
    "Reduzir apenas o tempo dos intervalos para diminuir o uso dos banheiros",
  correta: false,
  impacto: {
    consciencia: -5,
  },
},

],

explicacao:
"A água da chuva pode ser utilizada em atividades que não exigem água potável, reduzindo custos e preservando recursos hídricos."
},

{
id: 13,
fase: 3,
tipo: "decisao",
nivel: "difícil",

pergunta:
"Durante uma campanha de conscientização, os moradores discutem maneiras de reduzir o consumo doméstico de água. Qual conjunto de ações gera maior impacto acumulado ao longo do tempo?",

alternativas: [
{
texto:
"Reduzir o tempo de banho, fechar torneiras durante atividades rotineiras e monitorar vazamentos",
correta: true,
impacto: {
agua: 15,
consciencia: 15,
},
},

{
  texto:
    "Diminuir apenas a frequência da lavagem de calçadas",
  correta: false,
  impacto: {
    agua: 5,
  },
},

{
  texto:
    "Concentrar esforços apenas na redução do consumo durante períodos de seca",
  correta: false,
  impacto: {
    consciencia: -5,
  },
},

{
  texto:
    "Esperar mudanças na infraestrutura pública para reduzir o consumo",
  correta: false,
  impacto: {
    consciencia: -10,
  },
},

],

explicacao:
"A soma de pequenas ações permanentes produz resultados mais significativos do que medidas isoladas."
},

{
id: 14,
fase: 3,
tipo: "decisao",
nivel: "muito difícil",

pergunta:
"Relatórios indicam que 35% da água tratada da cidade é perdida antes de chegar aos consumidores. Qual medida apresenta maior potencial de resolução do problema?",

alternativas: [
{
texto:
"Aumentar a cobrança pelo consumo residencial",
correta: false,
impacto: {
consciencia: -5,
},
},

{
  texto:
    "Expandir a captação de água em rios vizinhos sem modernizar a rede",
  correta: false,
  impacto: {
    agua: -15,
  },
},

{
  texto:
    "Investir em monitoramento, manutenção preventiva e modernização da rede de distribuição",
  correta: true,
  impacto: {
    agua: 22,
    recursos: 10,
    sustentabilidade: 10,
  },
},

{
  texto:
    "Reduzir campanhas educativas para direcionar recursos ao tratamento de água",
  correta: false,
  impacto: {
    consciencia: -10,
  },
},

],

explicacao:
"A redução das perdas físicas na rede é uma das medidas mais eficientes para aumentar a disponibilidade de água sem ampliar a captação."
},

{
id: 15,
fase: 3,
tipo: "decisao",
nivel: "muito difícil",

pergunta:
"Diante da persistência da crise hídrica, a cidade precisa adotar uma estratégia coletiva para garantir segurança hídrica nos próximos anos. Qual alternativa apresenta a abordagem mais completa?",

alternativas: [
{
texto:
"Priorizar apenas a construção de novos reservatórios",
correta: false,
impacto: {
recursos: -10,
},
},

{
  texto:
    "Criar um plano integrado com redução de perdas, reuso de água, monitoramento do consumo e Educação Ambiental",
  correta: true,
  impacto: {
    agua: 25,
    consciencia: 20,
    sustentabilidade: 10,
  },
},

{
  texto:
    "Aplicar restrições temporárias sem planejamento de longo prazo",
  correta: false,
  impacto: {
    agua: 5,
  },
},

{
  texto:
    "Transferir toda a responsabilidade da economia de água para os cidadãos",
  correta: false,
  impacto: {
    consciencia: -10,
  },
},
],

explicacao:
"A gestão hídrica sustentável depende da integração entre infraestrutura, planejamento, participação social e uso eficiente dos recursos."
},

// ===== FASE 4 =====

{
id: 16,
fase: 4,
tipo: "decisao",
nivel: "muito difícil",

pergunta:
"Relatórios ambientais apontam que uma indústria instalada próxima ao rio principal da cidade está lançando efluentes acima dos limites permitidos. Qual medida deve ser adotada prioritariamente pelo órgão ambiental?",

alternativas: [
{
texto:
"Permitir a continuidade das atividades mediante compensação financeira",
correta: false,
impacto: {
agua: -15,
},
},

{
  texto:
    "Transferir os lançamentos para outro trecho do rio com menor densidade populacional",
  correta: false,
  impacto: {
    sustentabilidade: -15,
  },
},

{
  texto:
    "Fiscalizar a empresa, exigir adequação do sistema de tratamento e aplicar as medidas legais cabíveis",
  correta: true,
  impacto: {
    sustentabilidade: 20,
    agua: 20,
    consciencia: 10,
  },
},

{
  texto:
    "Monitorar a situação sem exigir alterações imediatas",
  correta: false,
  impacto: {
    agua: -10,
  },
},

],

explicacao:
"A fiscalização e o tratamento adequado dos efluentes são fundamentais para evitar a contaminação dos recursos hídricos e proteger a saúde pública."
},

{
id: 17,
fase: 4,
tipo: "decisao",
nivel: "difícil",

pergunta:
"Uma área de vegetação nativa será removida para expansão urbana. Qual impacto ambiental deve ser considerado durante o processo de licenciamento?",

alternativas: [
{
texto:
"Aumento da biodiversidade local devido à ocupação urbana",
correta: false,
impacto: {
consciencia: -10,
},
},

{
  texto:
    "Perda de habitats, redução da biodiversidade e alterações no microclima da região",
  correta: true,
  impacto: {
    sustentabilidade: 15,
    consciencia: 15,
  },
},

{
  texto:
    "Melhoria automática da infiltração da água no solo",
  correta: false,
  impacto: {
    agua: -10,
  },
},

{
  texto:
    "Ausência de impactos relevantes caso a área seja pequena",
  correta: false,
  impacto: {
    consciencia: -15,
  },
},

],

explicacao:
"Mesmo áreas relativamente pequenas podem desempenhar funções ecológicas importantes, como abrigo de espécies e regulação climática."
},

{
id: 18,
fase: 4,
tipo: "decisao",
nivel: "muito difícil",

pergunta:
"Diversos terrenos baldios da cidade estão sendo utilizados para descarte irregular de resíduos. Qual estratégia apresenta maior potencial de solução permanente?",

alternativas: [
{
texto:
"Realizar limpezas periódicas sem investigar as causas do descarte",
correta: false,
impacto: {
sustentabilidade: -5,
},
},

{
  texto:
    "Combinar fiscalização, ampliação da coleta, Educação Ambiental e participação comunitária",
  correta: true,
  impacto: {
    sustentabilidade: 20,
    consciencia: 20,
  },
},

{
  texto:
    "Transferir os resíduos para áreas menos visíveis da cidade",
  correta: false,
  impacto: {
    sustentabilidade: -15,
  },
},

{
  texto:
    "Utilizar a queima controlada dos resíduos como solução principal",
  correta: false,
  impacto: {
    sustentabilidade: -20,
    consciencia: -10,
  },
},

],

explicacao:
"A solução definitiva exige atacar as causas do problema, não apenas remover temporariamente os resíduos."
},

{
id: 19,
fase: 4,
tipo: "decisao",
nivel: "muito difícil",

pergunta:
"Estudos indicam aumento da poluição atmosférica causado principalmente pelo trânsito urbano. Qual política pública apresenta maior potencial de redução das emissões?",

alternativas: [
{
texto:
"Expandir estacionamentos para melhorar a circulação dos veículos",
correta: false,
impacto: {
sustentabilidade: -15,
},
},

{
  texto:
    "Incentivar exclusivamente a substituição de veículos antigos por novos",
  correta: false,
  impacto: {
    sustentabilidade: 5,
  },
},

{
  texto:
    "Investir em transporte coletivo eficiente, ciclovias e mobilidade sustentável",
  correta: true,
  impacto: {
    sustentabilidade: 20,
    consciencia: 15,
  },
},

{
  texto:
    "Reduzir áreas verdes para ampliar vias de circulação",
  correta: false,
  impacto: {
    sustentabilidade: -20,
  },
},

],

explicacao:
"A mobilidade sustentável reduz emissões, congestionamentos e melhora a qualidade de vida urbana."
},

{
id: 20,
fase: 4,
tipo: "decisao",
nivel: "muito difícil",

pergunta:
"Uma antiga área de mineração apresenta erosão, baixa cobertura vegetal e perda de biodiversidade. Qual estratégia de recuperação ambiental é mais adequada?",

alternativas: [
{
texto:
"Abandonar a área para que a regeneração ocorra naturalmente sem monitoramento",
correta: false,
impacto: {
sustentabilidade: -10,
},
},

{
  texto:
    "Cobrir toda a área com concreto para evitar processos erosivos",
  correta: false,
  impacto: {
    sustentabilidade: -20,
  },
},

{
  texto:
    "Utilizar espécies exóticas invasoras por apresentarem crescimento mais rápido",
  correta: false,
  impacto: {
    sustentabilidade: -15,
  },
},

{
  texto:
    "Realizar reflorestamento com espécies adequadas, controle da erosão e monitoramento ambiental contínuo",
  correta: true,
  impacto: {
    sustentabilidade: 25,
    agua: 10,
    consciencia: 10,
  },
},

],

explicacao:
"A recuperação de áreas degradadas exige planejamento técnico, restauração ecológica e acompanhamento dos resultados ao longo do tempo."
},

// ===== FASE 5 =====

{
id: 21,
fase: 5,
tipo: "decisao",
nivel: "muito difícil",

pergunta:
"A prefeitura de EcoTech pretende reduzir os gastos energéticos dos prédios públicos nos próximos 10 anos. Qual estratégia apresenta melhor relação entre economia, sustentabilidade e eficiência?",

alternativas: [
{
texto:
"Substituir apenas parte da iluminação por modelos mais modernos",
correta: false,
impacto: {
sustentabilidade: 5,
},
},

{
  texto:
    "Instalar painéis solares, sistemas de iluminação inteligente e monitoramento digital do consumo",
  correta: true,
  impacto: {
    sustentabilidade: 20,
    consciencia: 10,
    recursos: 10,
  },
},

{
  texto:
    "Manter os equipamentos atuais para evitar investimentos iniciais",
  correta: false,
  impacto: {
    sustentabilidade: -15,
  },
},

{
  texto:
    "Aumentar o consumo energético para evitar falhas operacionais",
  correta: false,
  impacto: {
    sustentabilidade: -20,
  },
},

],

explicacao:
"A combinação de geração renovável, automação e monitoramento reduz custos e aumenta a eficiência energética."
},

{
id: 22,
fase: 5,
tipo: "decisao",
nivel: "muito difícil",

pergunta:
"Durante uma crise hídrica, a cidade pretende utilizar tecnologias inteligentes para melhorar a gestão da água. Qual solução apresenta maior eficiência operacional?",

alternativas: [
{
texto:
"Aumentar a captação de água sem monitorar perdas na distribuição",
correta: false,
impacto: {
agua: -15,
},
},

{
  texto:
    "Instalar sensores e sistemas de monitoramento capazes de identificar vazamentos em tempo real",
  correta: true,
  impacto: {
    agua: 20,
    sustentabilidade: 15,
    recursos: 10,
  },
},

{
  texto:
    "Realizar inspeções apenas quando houver reclamações da população",
  correta: false,
  impacto: {
    agua: -10,
  },
},

{
  texto:
    "Investir exclusivamente em campanhas educativas",
  correta: false,
  impacto: {
    consciencia: 5,
  },
},

],

explicacao:
"O monitoramento inteligente permite identificar perdas rapidamente e otimizar a gestão dos recursos hídricos."
},

{
id: 23,
fase: 5,
tipo: "decisao",
nivel: "muito difícil",

pergunta:
"EcoTech deseja modernizar sua gestão de resíduos urbanos. Qual solução está mais alinhada aos conceitos de cidade inteligente e economia circular?",

alternativas: [
{
texto:
"Utilizar sensores em lixeiras, otimizar rotas de coleta e integrar dados para planejamento da reciclagem",
correta: true,
impacto: {
sustentabilidade: 15,
consciencia: 10,
recursos: 10,
},
},

{
  texto:
    "Aumentar a frequência da coleta sem utilizar dados ou planejamento",
  correta: false,
  impacto: {
    recursos: -10,
  },
},

{
  texto:
    "Misturar resíduos recicláveis e orgânicos para simplificar a operação",
  correta: false,
  impacto: {
    sustentabilidade: -20,
  },
},

{
  texto:
    "Expandir aterros sanitários sem investir em reciclagem",
  correta: false,
  impacto: {
    sustentabilidade: -15,
  },
},

],

explicacao:
"Cidades inteligentes utilizam dados para otimizar processos e reduzir desperdícios, fortalecendo a economia circular."
},

{
id: 24,
fase: 5,
tipo: "decisao",
nivel: "muito difícil",

pergunta:
"Estudos indicam que EcoTech possui alto potencial solar e eólico. Qual estratégia energética apresenta maior sustentabilidade no longo prazo?",

alternativas: [
{
texto:
"Escolher apenas uma fonte energética sem analisar dados ambientais e econômicos",
correta: false,
impacto: {
recursos: -10,
},
},

{
  texto:
    "Manter a dependência exclusiva de combustíveis fósseis devido à infraestrutura já existente",
  correta: false,
  impacto: {
    sustentabilidade: -25,
  },
},

{
  texto:
    "Combinar energia solar e eólica após estudos técnicos sobre potencial, demanda e viabilidade",
  correta: true,
  impacto: {
    sustentabilidade: 25,
    recursos: 10,
    consciencia: 10,
  },
},

{
  texto:
    "Investir em geração de energia sem planejamento territorial",
  correta: false,
  impacto: {
    sustentabilidade: -10,
  },
},

],

explicacao:
"O planejamento energético deve considerar características locais, diversificação da matriz e eficiência dos investimentos."
},

{
id: 25,
fase: 5,
tipo: "decisao",
nivel: "muito difícil",

pergunta:
"Para transformar EcoTech em uma cidade inteligente sustentável, a prefeitura dispõe de recursos limitados e precisa priorizar ações. Qual conjunto de iniciativas apresenta a abordagem mais completa?",

alternativas: [
{
texto:
"Priorizar apenas a compra de equipamentos tecnológicos de última geração",
correta: false,
impacto: {
recursos: -10,
},
},

{
  texto:
    "Investir exclusivamente em infraestrutura urbana sem participação da população",
  correta: false,
  impacto: {
    consciencia: -15,
  },
},

{
  texto:
    "Implementar energia limpa, sensores ambientais, gestão inteligente de resíduos, monitoramento hídrico e participação cidadã",
  correta: true,
  impacto: {
    sustentabilidade: 25,
    agua: 10,
    consciencia: 15,
    recursos: 10,
  },
},

{
  texto:
    "Modernizar apenas os serviços digitais da prefeitura",
  correta: false,
  impacto: {
    consciencia: 5,
  },
},

],

explicacao:
"Uma cidade inteligente sustentável integra tecnologia, gestão eficiente dos recursos naturais e participação ativa da sociedade."
}


];


