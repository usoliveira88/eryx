const cancellationRoute = "/artigos/distrato-imobiliario-desistencia-compra-imovel";
const condominiumRoute = "/artigos/execucao-taxas-condominio-atrasadas";

export const realEstateArticleContent = {
  [cancellationRoute]: {
    breadcrumb: "Distrato imobiliário",
    summary: [["#conceito", "O que é distrato"], ["#desistencia", "Quando desistir"], ["#arrependimento", "Prazo de sete dias"], ["#valores", "Multas e devolução"], ["#atraso", "Atraso da obra"], ["#prazos", "Prazo de restituição"], ["#financiamento", "Financiamento"], ["#documentos", "Documentos"], ["#advogado", "Orientação jurídica"], ["#fontes", "Fontes oficiais"], ["#faq", "Perguntas frequentes"]],
    cta: ["Precisa analisar um distrato imobiliário?", "O escritório avalia o contrato, os pagamentos, o motivo do encerramento e a proposta de restituição para orientar os próximos passos.", "Falar com o Dr. Eryx"],
    recommendations: [condominiumRoute, "/artigos/contrato-compra-venda-imovel-cuidados", "/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar", "/artigos/usucapiao-regularizacao-imovel"],
    recommendationTitle: "Outros conteúdos de Direito Imobiliário",
    faq: [
      { question: "Quando o consumidor pode pedir o distrato imobiliário?", answer: "O consumidor pode propor o encerramento por dificuldade financeira ou mudança de planos, negociar um acordo ou buscar a resolução por descumprimento do vendedor. O cancelamento e seus efeitos dependem do contrato e da legislação aplicável; o pedido não assegura devolução integral." },
      { question: "Posso desistir da compra de um imóvel em sete dias?", answer: "Nos contratos de incorporação assinados em estandes de vendas ou fora da sede do incorporador, a lei prevê sete dias para exercer o arrependimento, com devolução dos valores antecipados, inclusive corretagem. É necessário comprovar a comunicação no prazo." },
      { question: "A multa do distrato é de 25% ou 50% do valor do imóvel?", answer: "Nos casos do artigo 67-A da Lei nº 4.591/1964, esses limites se referem às quantias pagas ao incorporador, e não ao preço total do imóvel. A multa pode chegar a 25%, ou a 50% no patrimônio de afetação. Outras deduções legalmente cabíveis precisam ser verificadas separadamente." },
      { question: "Atraso na entrega permite devolver o imóvel e recuperar os valores?", answer: "Nos contratos sujeitos ao artigo 43-A, ultrapassado o prazo contratual e a tolerância validamente pactuada, o comprador que não causou o atraso pode pedir a resolução, a restituição integral e a multa estabelecida, conforme os requisitos legais." },
      { question: "A Lei do Distrato vale para contratos anteriores a 2018?", answer: "As regras da Lei nº 13.786/2018 sobre devolução e retenção não se aplicam retroativamente aos contratos anteriores à sua vigência. A data e o regime jurídico do contrato precisam ser conferidos." },
      { question: "A negativa de financiamento cancela a compra automaticamente?", answer: "Não. É preciso verificar se a aprovação do financiamento foi prevista como condição do negócio e quem assumiu o risco da negativa de crédito. Contratos com alienação fiduciária também exigem análise das regras específicas." }
    ],
    body: `
      <p class="article-lead">O consumidor pode buscar o distrato imobiliário quando pretende encerrar a compra de um imóvel, mas o direito à devolução, as multas e os prazos dependem do contrato e do motivo do desfazimento.</p>
      <p>Dificuldade financeira, mudança de planos, financiamento recusado e atraso na entrega são situações diferentes. Antes de parar de pagar ou assinar uma proposta de cancelamento, é importante identificar quem deu causa ao rompimento e qual legislação rege a compra.</p>
      <h2 id="conceito">O que é distrato imobiliário?</h2>
      <p>Em sentido técnico, distrato é o acordo entre as partes para encerrar o contrato. Quando há descumprimento de uma obrigação, como a falta de entrega do imóvel no prazo aplicável, pode haver resolução contratual. Embora ambas as situações sejam chamadas de distrato no dia a dia, seus efeitos podem ser distintos.</p>
      <p>O documento de encerramento deve esclarecer os descontos, a restituição, a devolução da posse e a quitação. A análise começa no <a href="/artigos/contrato-compra-venda-imovel-cuidados">contrato de compra e venda do imóvel</a> e não apenas na minuta apresentada pela empresa.</p>
      <h2 id="desistencia">Quando o consumidor pode desistir da compra do imóvel?</h2>
      <p>Perda de renda e mudança de planos podem motivar um pedido de distrato. Isso não assegura cancelamento automático sem custos. É preciso conferir a fase do negócio, o cumprimento das obrigações, a existência de acordo e as consequências previstas no regime aplicável.</p>
      <p>Nos contratos de consumo abrangidos pela Súmula 543 do STJ, a restituição é integral quando o vendedor ou construtor tem culpa exclusiva, e parcial quando o comprador causa o desfazimento. Essa orientação deve ser compatibilizada com a legislação específica e com a data da contratação.</p>
      <h2 id="arrependimento">Existe prazo de sete dias para desistir sem multa?</h2>
      <p>Nos contratos de incorporação assinados em estandes de vendas ou fora da sede do incorporador, o artigo 67-A prevê sete dias para exercer o direito de arrependimento. Nessa hipótese, há devolução dos valores antecipados, inclusive da comissão de corretagem.</p>
      <p>O exercício no prazo precisa ser comprovado. A lei prevê carta registrada com aviso de recebimento; guarde também protocolos e mensagens. Essa regra não autoriza cancelar qualquer compra imobiliária, a qualquer tempo, sem consequências.</p>
      <h2 id="valores">Quanto pode ser retido no distrato imobiliário?</h2>
      <p>Nos contratos celebrados exclusivamente com o incorporador sujeitos ao artigo 67-A, o desfazimento por responsabilidade do comprador pode envolver dedução da corretagem e multa contratual de até <strong>25% das quantias pagas</strong>. No patrimônio de afetação, a multa pode chegar a <strong>50% das quantias pagas</strong>.</p>
      <p>Esses limites dizem respeito à penalidade, e não ao preço total do imóvel ou a um percentual automático de todas as retenções. Encargos relacionados à disponibilização da unidade podem exigir cálculo separado. A validade das cobranças e a informação sobre corretagem devem ser examinadas.</p>
      <h2 id="atraso">O atraso na entrega permite a resolução do contrato?</h2>
      <p>Para os contratos sujeitos ao artigo 43-A, a tolerância de até 180 dias corridos precisa estar expressamente pactuada de forma clara e destacada. Ela não é uma prorrogação automática de todo contrato.</p>
      <p>Ultrapassado o prazo aplicável, o adquirente que não causou o atraso pode pedir a resolução, a devolução integral dos valores pagos e a multa estabelecida. A regra prevê pagamento em até 60 dias corridos da resolução, com correção. Atraso imputável à incorporadora não deve ser tratado como simples desistência pessoal do comprador.</p>
      <h2 id="prazos">Qual é o prazo para receber os valores do distrato?</h2>
      <p>No desfazimento por responsabilidade do comprador abrangido pelo artigo 67-A, sem patrimônio de afetação, a lei prevê restituição do saldo em parcela única após o prazo de 180 dias do encerramento. Com afetação, prevê até 30 dias após o habite-se ou documento equivalente. A revenda anterior pode antecipar o pagamento para até 30 dias da revenda.</p>
      <p>Essas regras não são universais: acordos específicos, responsabilidade do vendedor e contratos anteriores à Lei nº 13.786/2018 exigem análise própria. O STJ afasta a aplicação retroativa das novas regras de restituição e retenção.</p>
      <h2 id="financiamento">E se o financiamento for negado ou houver alienação fiduciária?</h2>
      <p>A negativa de crédito não cancela automaticamente a compra. É necessário verificar se a aprovação bancária era condição do negócio e quem assumiu esse risco. Confira também as <a href="/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar">cláusulas de contratos imobiliários que merecem atenção</a>.</p>
      <p>Na alienação fiduciária registrada, havendo inadimplemento e constituição do devedor em mora, o Tema 1.095 do STJ determina o procedimento da Lei nº 9.514/1997. Loteamentos e negócios entre particulares também podem seguir regras diferentes das incorporações.</p>
      <h2 id="documentos">Quais documentos reunir antes de pedir o distrato?</h2>
      <ul><li>Contrato, aditivos, proposta e quadro-resumo.</li><li>Comprovantes de entrada, parcelas e corretagem.</li><li>Documentos da incorporação, matrícula e dados do financiamento.</li><li>Comunicações sobre entrega, atraso ou tentativa de acordo.</li><li>Minuta do distrato e demonstrativo dos descontos propostos.</li></ul>
      <p>Organize uma linha do tempo dos fatos. Não presuma que o pedido de distrato suspende as parcelas: a interrupção unilateral pode gerar mora e outros efeitos. Confira especialmente a quitação ampla e o prazo de restituição antes de assinar.</p>
      <h2 id="advogado">Quando procurar um advogado imobiliário em Sorocaba?</h2>
      <p>A orientação é útil quando há retenção elevada, atraso da obra, negativa de financiamento ou divergência sobre a devolução. O escritório Eryx Fernandes Advocacia atua em <a href="/atuacao/direito-imobiliario">Direito Imobiliário em Sorocaba</a>, com análise documental e orientação sobre negociação e medidas cabíveis.</p>
      <h2 id="fontes">Legislação e fontes oficiais</h2>
      <ul>
        <li><a href="https://www.planalto.gov.br/ccivil_03/leis/l4591.htm#art67a" target="_blank" rel="noopener noreferrer">Lei nº 4.591/1964: artigos 43-A e 67-A</a>.</li>
        <li><a href="https://www2.camara.leg.br/legin/fed/lei/2018/lei-13786-27-dezembro-2018-787542-publicacaooriginal-157118-pl.html" target="_blank" rel="noopener noreferrer">Lei nº 13.786/2018: Lei do Distrato</a>.</li>
        <li><a href="https://scon.stj.jus.br/SCON/sumstj/doc.jsp?b=SUMU&amp;livre=%40NUM%3D%22543%22" target="_blank" rel="noopener noreferrer">Súmula 543 do STJ: restituição das parcelas</a>.</li>
        <li><a href="https://processo.stj.jus.br/repetitivos/temas_repetitivos/pesquisa.jsp?cod_tema_final=1095&amp;cod_tema_inicial=1095&amp;tipo_pesquisa=T" target="_blank" rel="noopener noreferrer">Tema 1.095 do STJ: alienação fiduciária</a>.</li>
      </ul>
    `
  },
  [condominiumRoute]: {
    breadcrumb: "Execução de taxas condominiais",
    summary: [["#quando", "Quando executar"], ["#requisitos", "Requisitos legais"], ["#documentos", "Documentos"], ["#notificacao", "Notificação prévia"], ["#encargos", "Multa e juros"], ["#processo", "Como funciona"], ["#penhora", "Penhora do imóvel"], ["#prescricao", "Prescrição"], ["#acordo", "Acordo e defesa"], ["#advogado", "Orientação jurídica"], ["#fontes", "Fontes oficiais"], ["#faq", "Perguntas frequentes"]],
    cta: ["Precisa analisar uma cobrança de condomínio?", "O escritório orienta condomínios e condôminos a partir da convenção, das atas, dos comprovantes e dos valores efetivamente cobrados.", "Falar com o Dr. Eryx"],
    recommendations: [cancellationRoute, "/artigos/contrato-compra-venda-imovel-cuidados", "/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar"],
    recommendationTitle: "Continue lendo sobre imóveis e contratos",
    faq: [
      { question: "Com quantos meses de atraso o condomínio pode executar o condômino?", answer: "Em regra, uma única cota vencida e não paga já pode fundamentar a execução, desde que a dívida seja certa, líquida, exigível e documentalmente comprovada. Não existe carência legal geral de três meses; acordos e regras internas aplicáveis devem ser observados." },
      { question: "É preciso notificar o condômino antes da execução?", answer: "Em obrigação com vencimento definido, a mora normalmente decorre do vencimento, sem depender de notificação. É necessário conferir eventual acordo e os procedimentos da convenção. A comunicação amigável pode facilitar a negociação." },
      { question: "Qual é a multa por atraso na taxa de condomínio?", answer: "O Código Civil prevê multa de até 2% sobre o débito, além de correção e juros moratórios. Os juros observam a convenção ou, se não previstos, a taxa legal do artigo 406. Não se presume 1% ao mês em todos os casos." },
      { question: "Qual é o prazo para pagar depois da citação na execução?", answer: "O artigo 829 do CPC prevê três dias para pagamento, contados da citação, segundo as regras processuais. Esse prazo não é uma carência para o condomínio ajuizar a ação nem se confunde com o prazo de defesa." },
      { question: "O imóvel pode ser penhorado por dívida de condomínio?", answer: "O imóvel que gerou a dívida pode responder por despesas condominiais, inclusive quando é bem de família. A penhora e eventual leilão dependem do processo e de decisão judicial; financiamento e direitos de terceiros exigem análise específica." },
      { question: "A dívida de condomínio prescreve em cinco anos?", answer: "O STJ fixa, em regra, cinco anos para a pretensão de cobrança de cada cota ordinária ou extraordinária documentada, contados do dia seguinte ao seu vencimento. Causas de suspensão ou interrupção e acordos podem alterar a análise." }
    ],
    body: `
      <p class="article-lead">O condomínio pode, em regra, executar o condômino a partir de uma única taxa vencida e não paga, desde que a dívida tenha valor definido, seja exigível e esteja comprovada por documentos.</p>
      <p>Não é necessário aguardar três meses de atraso como regra geral. A execução de taxas condominiais, porém, exige cuidado com a origem da cobrança, os cálculos e a identificação de quem responde pelo débito. Entenda os critérios antes de cobrar ou negociar.</p>
      <h2 id="quando">Quando o condomínio pode executar o condômino por atraso?</h2>
      <p>Com o vencimento sem pagamento, uma contribuição regularmente fixada pode ser cobrada. Não há número mínimo geral de parcelas nem valor mínimo legal para utilizar a execução. Eventuais acordos, prazos concedidos e regras internas precisam ser respeitados.</p>
      <p>As cotas ordinárias custeiam a rotina do condomínio; as extraordinárias podem financiar despesas específicas. Ambas podem embasar a execução se atenderem ao artigo 784, inciso X, do Código de Processo Civil. Uma cobrança sem origem demonstrada não se torna executável apenas por constar de um boleto.</p>
      <h2 id="requisitos">Quais são os requisitos para executar taxas condominiais?</h2>
      <p>O CPC considera título executivo extrajudicial o crédito de contribuições ordinárias ou extraordinárias de condomínio edilício previstas na convenção ou aprovadas em assembleia, desde que documentalmente comprovadas. O condomínio pode iniciar a execução sem obter antes uma sentença em ação de cobrança.</p>
      <p>A obrigação precisa ser <strong>certa, líquida e exigível</strong>: devem estar demonstrados sua existência, o valor e a possibilidade de exigir o pagamento. Na ausência desses requisitos, a via de cobrança adequada deve ser avaliada. Taxas associativas e multas por infrações não se confundem automaticamente com as cotas abrangidas por essa regra.</p>
      <h2 id="documentos">Quais documentos o condomínio deve apresentar?</h2>
      <p>A documentação deve permitir compreender como o débito foi formado. Em geral, são reunidos:</p>
      <ul><li>Convenção e atas pertinentes à fixação das contribuições.</li><li>Boletos, demonstrativos e identificação das competências vencidas.</li><li>Planilha com principal, vencimentos, pagamentos e encargos.</li><li>Documentos de representação do condomínio e ata de eleição do síndico.</li><li>Elementos para identificar a unidade e o responsável pela obrigação.</li></ul>
      <p>O STJ afasta formalidades excessivas e já considerou desnecessário exigir registro da convenção em cartório para essa finalidade. Isso não dispensa comprovar a origem e o valor do crédito. A planilha deve permitir conferir os cálculos e abater pagamentos realizados.</p>
      <h2 id="notificacao">É obrigatório notificar antes da cobrança judicial?</h2>
      <p>Em obrigação com valor e vencimento definidos, a mora normalmente ocorre com o vencimento, conforme o artigo 397 do Código Civil. A notificação extrajudicial não é, em regra, requisito geral para caracterizar o atraso.</p>
      <p>Ainda assim, é necessário conferir procedimentos internos e acordos. Informar o saldo, disponibilizar o demonstrativo e registrar tentativas de composição pode facilitar o recebimento. A cobrança deve preservar o respeito ao morador, sem exposição constrangedora.</p>
      <h2 id="encargos">Quais multas e juros incidem sobre condomínio atrasado?</h2>
      <p>O artigo 1.336, § 1º, do Código Civil prevê correção monetária, juros moratórios e multa de até <strong>2% sobre o débito</strong>. Os juros seguem o que foi convencionado ou, se não houver previsão, a taxa legal do artigo 406. A legislação atual não autoriza presumir juros de 1% ao mês em todos os casos.</p>
      <p>Custas e honorários fixados no processo podem acrescer ao valor. Despesas de cobrança e honorários contratuais não devem ser incluídos sem verificar sua base e exigibilidade. Multas por outras infrações exigem exame próprio, distinto da simples multa de mora.</p>
      <h2 id="processo">Como funciona a execução de dívida condominial?</h2>
      <p>Apresentada a execução com os documentos, o devedor é citado para pagar. O artigo 829 do CPC prevê <strong>três dias contados da citação</strong>, segundo as regras processuais. Esse prazo não se confunde com o prazo de defesa e não significa que o condomínio deva esperar três dias após o vencimento para ajuizar a ação.</p>
      <p>Sem pagamento, podem ser requeridas medidas de penhora, observadas as limitações legais e o direito de defesa. Pagamentos parciais devem ser abatidos. O condômino que recebe a citação deve procurar orientação prontamente para conferir o débito e os prazos aplicáveis.</p>
      <h2 id="penhora">O imóvel pode ir a leilão por dívida de condomínio?</h2>
      <p>A dívida condominial está vinculada ao imóvel que gerou as despesas. Por isso, a jurisprudência admite que ele responda pelo débito, inclusive quando é bem de família. A eventual penhora e alienação dependem de decisão e do procedimento judicial; não decorrem automaticamente do atraso.</p>
      <p>Imóveis financiados, alienação fiduciária e direitos de terceiros exigem análise específica. Também é importante verificar quem deve integrar a cobrança, considerando propriedade, posse e circunstâncias da aquisição. O adquirente pode responder por débitos do vendedor, conforme o artigo 1.345 do Código Civil.</p>
      <p>Antes de comprar, confira a situação condominial e os <a href="/artigos/contrato-compra-venda-imovel-cuidados">cuidados com o contrato de compra e venda de imóvel</a>.</p>
      <h2 id="prescricao">Qual é o prazo de prescrição das taxas condominiais?</h2>
      <p>O STJ fixa, em regra, cinco anos para a pretensão de cobrança de contribuições ordinárias ou extraordinárias documentadas, contados do dia seguinte ao vencimento de cada parcela. Cada competência deve ser examinada separadamente.</p>
      <p>Acordos, reconhecimento de dívida e causas legais de suspensão ou interrupção podem influenciar a contagem. Não basta olhar a idade da dívida para concluir que toda a cobrança prescreveu.</p>
      <h2 id="acordo">É possível negociar ou contestar a cobrança?</h2>
      <p>Um acordo pode definir entrada, parcelas, encargos e consequências de novo atraso. Se já existe processo, o documento precisa esclarecer também o tratamento das custas, dos honorários e dos atos judiciais. O condomínio deve observar os poderes de quem negocia.</p>
      <p>Quem discorda da cobrança deve reunir recibos, transferências, atas, convenção e demonstrativos. Pagamento já realizado, erro no cálculo ou cobrança indevida precisam ser apresentados pela via e no prazo adequados. Discordar da gestão não autoriza, por si só, interromper unilateralmente o pagamento das cotas.</p>
      <h2 id="advogado">Orientação para condomínios e condôminos em Sorocaba</h2>
      <p>O escritório Eryx Fernandes Advocacia atua em <a href="/atuacao/direito-imobiliario">Direito Imobiliário em Sorocaba</a>, com análise de cobranças, documentos condominiais, negociação e medidas judiciais. A orientação considera a convenção, as deliberações e a situação concreta de cada unidade.</p>
      <p>Conheça também os <a href="/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar">pontos de atenção em contratos imobiliários</a> e as regras sobre <a href="/artigos/distrato-imobiliario-desistencia-compra-imovel">distrato e desistência da compra de imóvel</a>.</p>
      <h2 id="fontes">Legislação e fontes oficiais</h2>
      <ul>
        <li><a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm#art784" target="_blank" rel="noopener noreferrer">CPC: artigos 783, 784, X, e 829</a>.</li>
        <li><a href="https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm#art1336" target="_blank" rel="noopener noreferrer">Código Civil: contribuições, encargos e responsabilidade</a>.</li>
        <li><a href="https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2023/20092023-Terceira-Turma-confirma-dispensa-de-formalidades-excessivas-para-execucao-extrajudicial-de-taxas-condominiais.aspx" target="_blank" rel="noopener noreferrer">STJ: documentos para execução de taxas condominiais</a>.</li>
        <li><a href="https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias-antigas/2016/2016-12-09_09-27_Prazo-de-prescricao-para-cobranca-de-taxa-condominial-e-de-cinco-anos.aspx" target="_blank" rel="noopener noreferrer">STJ: prazo de prescrição de cinco anos</a>.</li>
        <li><a href="https://www.tjdft.jus.br/consultas/jurisprudencia/jurisprudencia-em-temas/jurisprudencia-em-perguntas/direito-civil-e-processual-civil/penhora/e-possivel-a-penhora-de-bem-de-familia-para-pagamento-de-debitos-condominiais-relativos-ao-referido-bem" target="_blank" rel="noopener noreferrer">Jurisprudência: penhora por despesas condominiais</a>.</li>
      </ul>
    `
  }
};
