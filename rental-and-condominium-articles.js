const evictionRoute = "/artigos/despejo-falta-pagamento-aluguel";
const previousDebtRoute = "/artigos/divida-condominio-antigo-proprietario";
const executionRoute = "/artigos/execucao-taxas-condominio-atrasadas";

export const rentalAndCondominiumArticleContent = {
  [evictionRoute]: {
    breadcrumb: "Despejo por falta de pagamento",
    summary: [["#quando", "Quando pedir despejo"], ["#notificacao", "Notificação prévia"], ["#liminar", "Liminar de 15 dias"], ["#garantia", "Fiador e caução"], ["#pagamento", "Pagamento da dívida"], ["#cobranca", "Despejo e cobrança"], ["#documentos", "Documentos"], ["#acordo", "Acordo e entrega de chaves"], ["#cuidados", "Cuidados do proprietário"], ["#advogado", "Orientação jurídica"], ["#fontes", "Fontes oficiais"], ["#faq", "Perguntas frequentes"]],
    cta: ["Precisa avaliar um aluguel em atraso?", "O escritório analisa o contrato, as garantias, os pagamentos e as tentativas de acordo para orientar a cobrança e eventual pedido de despejo.", "Falar com o Dr. Eryx"],
    recommendations: [previousDebtRoute, executionRoute, "/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar"],
    recommendationTitle: "Outros conteúdos sobre imóveis e obrigações",
    faq: [
      { question: "Com quantos meses de aluguel atrasado posso pedir despejo?", answer: "Não há exigência legal geral de esperar três meses. Um aluguel ou encargo exigível vencido e não pago já pode fundamentar o pedido, observados o contrato, os acordos existentes e a prova do inadimplemento. A desocupação depende do procedimento judicial." },
      { question: "É obrigatório notificar o inquilino antes do despejo por falta de pagamento?", answer: "Em regra, o atraso de obrigação com vencimento certo não depende de notificação para constituir a mora. É preciso conferir o contrato e distinguir essa hipótese de outras formas de encerramento da locação, nas quais a notificação pode ser obrigatória." },
      { question: "O despejo por falta de pagamento acontece em 15 dias?", answer: "Não há garantia de prazo total. A liminar do artigo 59, § 1º, IX, da Lei do Inquilinato prevê desocupação em 15 dias em hipótese específica de falta de pagamento com contrato sem garantia, mediante caução judicial equivalente a três meses de aluguel. Depende de decisão e dos requisitos legais." },
      { question: "Ter fiador impede o proprietário de pedir despejo?", answer: "Não. A garantia pode influenciar a cobrança e a análise da liminar, mas não impede, por si só, a resolução da locação por falta de pagamento. A responsabilidade do fiador depende do contrato e das regras aplicáveis." },
      { question: "Pagar o aluguel atrasado impede o despejo?", answer: "O pagamento integral nos termos do artigo 62 pode evitar a rescisão, quando cabível. A lei restringe essa faculdade se já utilizada nos 24 meses anteriores à ação. Novos atrasos durante o processo também podem influenciar a decisão." },
      { question: "O proprietário pode trocar a fechadura se o inquilino não pagar?", answer: "O atraso não autoriza retirar o ocupante por conta própria. Sem entrega voluntária ou medida judicial adequada, trocar fechaduras, retirar bens ou cortar serviços para forçar a saída pode gerar responsabilização." }
    ],
    body: `
      <p class="article-lead">O proprietário pode buscar o despejo por falta de pagamento quando o inquilino deixa de pagar aluguel ou encargos exigíveis. Em regra, não é necessário esperar três meses de atraso, mas a retomada do imóvel depende de entrega voluntária ou do procedimento judicial adequado.</p>
      <p>A existência de fiador, caução, seguro-fiança, pagamentos parciais e acordos pode mudar a estratégia. Antes de ajuizar a ação, é importante conferir a dívida e definir se o objetivo é receber, encerrar a locação ou adotar as duas medidas.</p>
      <h2 id="quando">Quando o aluguel atrasado permite pedir despejo?</h2>
      <p>A Lei do Inquilinato, no artigo 9º, inciso III, admite o desfazimento da locação por falta de pagamento do aluguel e dos demais encargos. Uma obrigação vencida e não paga já pode justificar o pedido, conforme as condições do contrato e a documentação.</p>
      <p>Isso não significa desocupação imediata. Devem ser considerados vencimento, abatimentos, eventual prazo negociado e pagamentos já feitos. Se o locador concedeu uma prorrogação, ela precisa ser examinada antes de tratar o valor como inadimplido.</p>
      <h2 id="notificacao">É preciso notificar o inquilino antes da ação?</h2>
      <p>Em regra, o descumprimento de obrigação com vencimento definido constitui a mora sem notificação prévia. A cobrança por escrito continua útil para informar o saldo, registrar a tentativa de solução e evitar dúvidas sobre pagamentos e propostas.</p>
      <p>É necessário distinguir falta de pagamento de outras hipóteses de retomada. No despejo imotivado, por exemplo, a notificação pode ser requisito. O STJ trata dessa diferença em sua jurisprudência. Também devem ser respeitados os procedimentos e os compromissos previstos no contrato ou em acordo posterior.</p>
      <h2 id="liminar">Quando cabe liminar de despejo em 15 dias?</h2>
      <p>A liminar permite pedir a desocupação antes do julgamento final. Para a hipótese específica do artigo 59, § 1º, IX, é necessário que o fundamento exclusivo seja a falta de pagamento e que o contrato esteja desprovido das garantias do artigo 37, por ausência, extinção ou pedido de exoneração, nos termos legais.</p>
      <p>A lei exige caução judicial equivalente a três meses de aluguel. Os 15 dias referem-se ao prazo de desocupação da medida, e não à duração total do processo. O juiz precisa examinar o pedido. Outras hipóteses de tutela provisória exigem fundamentos próprios e não devem ser confundidas com essa previsão.</p>
      <h2 id="garantia">Fiador, caução ou seguro-fiança impedem o despejo?</h2>
      <p>A garantia não elimina o dever de pagar nem impede, por si só, a resolução da locação. Ela interfere na forma de cobrar e no enquadramento da liminar. O contrato deve ser lido para verificar cobertura, vigência, limites e eventuais alterações.</p>
      <p>A caução prestada pelo inquilino no início da locação não se confunde com a caução judicial exigida para aquela liminar. Também não se deve presumir que o depósito autoriza deixar de pagar os últimos meses. A utilização e a devolução da garantia dependem da prestação de contas e das condições aplicáveis.</p>
      <h2 id="pagamento">O inquilino pode pagar a dívida e evitar o despejo?</h2>
      <p>O artigo 62 permite ao locatário ou fiador, quando cabível, evitar a rescisão com depósito judicial integral do débito atualizado no prazo legal de 15 dias contado da citação. Devem ser considerados aluguéis e acessórios vencidos até o pagamento, penalidades exigíveis, juros, custas e honorários aplicáveis.</p>
      <p>A faculdade não é admitida se já utilizada nos 24 meses anteriores à propositura da ação. Na liminar por falta de pagamento sem garantia, o artigo 59, § 3º, também prevê forma de afastar a medida mediante depósito integral, sob os requisitos legais.</p>
      <p>Pagar somente o débito inicial não autoriza novos atrasos. Em decisão divulgada em junho de 2026, o STJ reconheceu que a inadimplência reiterada durante o processo pode justificar a rescisão, mesmo após a quitação dos valores originalmente cobrados.</p>
      <h2 id="cobranca">É possível cobrar a dívida e pedir a desocupação?</h2>
      <p>A Lei do Inquilinato permite cumular o pedido de rescisão com a cobrança de aluguéis e acessórios. A inicial precisa apresentar cálculo discriminado. A inclusão de fiadores ou outros responsáveis exige examinar a garantia e os limites da obrigação assumida.</p>
      <p>Encargos de condomínio também devem ser conferidos: despesas ordinárias e extraordinárias recebem tratamento próprio na relação entre locador e locatário. A distribuição no contrato de locação não se confunde com quem pode responder diretamente perante o condomínio. Veja o artigo sobre <a href="/artigos/execucao-taxas-condominio-atrasadas">execução de taxas condominiais atrasadas</a>.</p>
      <h2 id="documentos">Quais documentos reunir para analisar o despejo?</h2>
      <ul><li>Contrato de locação, aditivos e instrumentos de garantia.</li><li>Demonstrativo dos meses em aberto, com abatimento dos pagamentos.</li><li>Boletos, recibos, extratos e comprovantes dos encargos cobrados.</li><li>Mensagens, notificações e propostas de negociação.</li><li>Documentos do imóvel, da contratação e da representação do locador.</li></ul>
      <p>A ausência de contrato escrito não elimina automaticamente a locação, mas pode tornar a prova mais complexa. Recibos, transferências e comunicações devem ser preservados. Confira também os <a href="/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar">cuidados com contratos imobiliários</a>.</p>
      <h2 id="acordo">Como formalizar um acordo e a entrega das chaves?</h2>
      <p>O acordo deve indicar o débito reconhecido, os pagamentos, as datas, o tratamento das garantias e as consequências do descumprimento. Se houver saída negociada, registre a data de entrega das chaves, a vistoria e a forma de apurar os valores remanescentes.</p>
      <p>A desocupação não representa quitação automática da dívida. Da mesma forma, um parcelamento não significa necessariamente que a locação foi encerrada. Cada compromisso deve ficar claro, principalmente quando já existe ação judicial.</p>
      <h2 id="cuidados">O que o proprietário não deve fazer diante do atraso?</h2>
      <p>O atraso não autoriza trocar a fechadura para impedir a entrada, retirar os pertences do morador ou cortar serviços para pressionar a saída. A retomada forçada deve seguir a via judicial. Suspeita de abandono também exige prova e análise; ausência temporária não equivale a devolução da posse.</p>
      <p>Preservar os registros e agir pela via adequada ajuda a evitar um segundo conflito sobre danos, ocupação e cobrança indevida.</p>
      <h2 id="advogado">Quando procurar um advogado imobiliário em Sorocaba?</h2>
      <p>A orientação é útil quando o atraso se repete, o acordo não é cumprido, há dúvidas sobre garantias ou o locador pretende retomar o imóvel. O escritório Eryx Fernandes Advocacia atua em <a href="/atuacao/direito-imobiliario">Direito Imobiliário em Sorocaba</a>, com análise dos documentos e das medidas cabíveis.</p>
      <h2 id="fontes">Legislação e fontes oficiais</h2>
      <ul>
        <li><a href="https://www.planalto.gov.br/ccivil_03/leis/l8245.htm" target="_blank" rel="noopener noreferrer">Lei do Inquilinato: artigos 9º, 22, 23, 37, 59 e 62</a>.</li>
        <li><a href="https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm#art397" target="_blank" rel="noopener noreferrer">Código Civil: mora de obrigação com vencimento definido</a>.</li>
        <li><a href="https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/10092020-Notificacao-previa-e-obrigatoria-para-validade-da-acao-de-despejo-imotivada.aspx" target="_blank" rel="noopener noreferrer">STJ: notificação no despejo imotivado</a>.</li>
        <li><a href="https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2026/19062026-Pagamento-da-divida-que-motivou-acao-de-despejo-nao-impede-rescisao-por-atrasos-durante-o-processo.aspx" target="_blank" rel="noopener noreferrer">STJ: atrasos reiterados durante o processo de despejo</a>.</li>
      </ul>
    `
  },
  [previousDebtRoute]: {
    breadcrumb: "Dívida de condomínio na compra",
    summary: [["#responsabilidade", "Quem responde"], ["#contrato", "Comprador e vendedor"], ["#registro", "Posse e registro"], ["#documentos", "Documentos da compra"], ["#parcelamento", "Parcelas e obras"], ["#apos-compra", "Dívida descoberta depois"], ["#ressarcimento", "Ressarcimento"], ["#cobranca", "Cobrança e penhora"], ["#advogado", "Orientação jurídica"], ["#fontes", "Fontes oficiais"], ["#faq", "Perguntas frequentes"]],
    cta: ["Encontrou dívida de condomínio no imóvel comprado?", "O escritório confere o contrato, a matrícula, as datas de posse e os demonstrativos para orientar a cobrança e eventual ressarcimento.", "Falar com o Dr. Eryx"],
    recommendations: [executionRoute, "/artigos/contrato-compra-venda-imovel-cuidados", evictionRoute, "/artigos/distrato-imobiliario-desistencia-compra-imovel"],
    recommendationTitle: "Continue lendo sobre compra e obrigações do imóvel",
    faq: [
      { question: "Quem compra um imóvel responde pela dívida de condomínio do antigo proprietário?", answer: "O artigo 1.345 do Código Civil prevê que o adquirente responde pelos débitos do alienante perante o condomínio, inclusive multas e juros moratórios. A divisão de despesas no contrato pode fundamentar ressarcimento entre comprador e vendedor, sem afastar automaticamente a cobrança do condomínio." },
      { question: "Uma cláusula dizendo que o vendedor paga os débitos antigos protege o comprador?", answer: "A cláusula é importante na relação entre as partes e pode fundamentar cobrança ou ressarcimento. Ela não vincula automaticamente o condomínio nem elimina, por si só, a responsabilidade legal do adquirente. A quitação efetiva deve ser conferida." },
      { question: "Sem receber as chaves, o comprador está livre de pagar condomínio?", answer: "Não é possível afirmar isso em todos os casos. O STJ já reconheceu a responsabilidade de comprador registrado como proprietário mesmo sem as chaves. Na promessa de compra e venda, posse, registro e circunstâncias da transação precisam ser analisados." },
      { question: "Qual documento pedir ao condomínio antes da compra?", answer: "Peça declaração atualizada da situação financeira da unidade e demonstrativo que identifique débitos, acordos e parcelas extraordinárias. Confira quem emitiu, a data, o alcance da declaração e eventuais cobranças judiciais. Um boleto mensal pago não comprova toda a situação da unidade." },
      { question: "Posso cobrar do vendedor o que paguei ao condomínio?", answer: "Pode haver direito de regresso ou ressarcimento, dependendo do contrato, do período da dívida, dos pagamentos e das circunstâncias da venda. Guarde os comprovantes e não presuma que a existência de dívida garante indenização ou cancelamento automático da compra." },
      { question: "O imóvel pode ser penhorado por uma dívida anterior à compra?", answer: "A unidade pode responder por despesas condominiais em procedimento judicial, inclusive em situações envolvendo débitos anteriores à aquisição. A análise depende da obrigação, do processo e dos direitos envolvidos; a compra não apaga automaticamente a dívida." }
    ],
    body: `
      <p class="article-lead">Quem compra um imóvel pode responder perante o condomínio por débitos deixados pelo antigo proprietário, inclusive multas e juros. A previsão está no artigo 1.345 do Código Civil, e uma cláusula no contrato não afasta automaticamente essa responsabilidade.</p>
      <p>A dúvida exige separar duas relações: o direito do condomínio de cobrar e o acerto financeiro entre comprador e vendedor. O contrato pode permitir exigir que o vendedor quite ou reembolse valores, mas é necessário conferir os documentos e o momento em que a obrigação surgiu.</p>
      <h2 id="responsabilidade">Por que a dívida de condomínio pode acompanhar o imóvel?</h2>
      <p>As cotas condominiais decorrem da relação com a unidade, característica conhecida como obrigação <em>propter rem</em>. O artigo 1.345 prevê a responsabilidade do adquirente pelos débitos do alienante perante o condomínio, incluindo multas e juros moratórios.</p>
      <p>Por isso, comprar sem verificar as contribuições atrasadas pode gerar uma cobrança inesperada. Pagar o preço e registrar o negócio não significa que os débitos condominiais foram automaticamente quitados. A responsabilidade precisa ser examinada conforme a aquisição e a situação concreta.</p>
      <h2 id="contrato">Quem deve pagar: comprador ou vendedor?</h2>
      <p>Na relação entre as partes, o contrato deve indicar quais despesas ficam com cada uma, o marco de responsabilidade e como serão tratados débitos anteriores. Datas de assinatura, posse, entrega das chaves e registro podem ter funções diferentes no negócio.</p>
      <p>Se o vendedor assumiu as despesas anteriores e elas não foram pagas, a cláusula pode fundamentar uma exigência de cumprimento ou ressarcimento. Ela, porém, não impõe automaticamente essa divisão ao condomínio. O comprador não deve ignorar a cobrança apenas porque seu contrato atribui o débito ao vendedor.</p>
      <p>Uma forma de reduzir conflitos é formalizar como ocorrerá a quitação antes da conclusão da compra. Eventual pagamento direto ao condomínio ou retenção de parte do preço precisa ser expressamente ajustado e documentado, com indicação do que será abatido.</p>
      <h2 id="registro">A entrega das chaves define sozinha a responsabilidade?</h2>
      <p>Não. Em compromissos de compra e venda, o Tema 886 do STJ considera a relação material com o imóvel, a posse e a ciência do condomínio. A interpretação dessas hipóteses exige cuidado: o STJ também reconheceu responsabilidade concorrente de vendedor e comprador em caso de promessa não registrada.</p>
      <p>Há ainda precedente em que o comprador já registrado na matrícula foi considerado responsável pelas cotas mesmo sem receber as chaves, preservada a possibilidade de regresso contra o vendedor ou a construtora. Esse cenário não se confunde com todo compromisso de compra e venda.</p>
      <p>A revisão do Tema 886 é discutida no Tema 1.349 do STJ. Na consulta de 19 de novembro de 2026, a página oficial o indicava como afetado. Não é seguro tratar a posse, a comunicação ao condomínio ou o registro como um critério isolado que resolve qualquer caso.</p>
      <h2 id="documentos">O que conferir antes de comprar um imóvel em condomínio?</h2>
      <p>Além da matrícula e do contrato, solicite informações financeiras atualizadas da unidade diretamente ao condomínio ou à administradora autorizada. A verificação pode incluir:</p>
      <ul><li>Declaração da situação de débitos, identificando a unidade e a data de emissão.</li><li>Demonstrativo das cotas vencidas, encargos, pagamentos e eventuais acordos.</li><li>Atas com aprovação de obras, rateios e contribuições extraordinárias.</li><li>Informações sobre ações de cobrança ou execução relacionadas à unidade.</li><li>Comprovantes da quitação prometida pelo vendedor.</li></ul>
      <p>Confira a origem e o alcance de cada documento. A declaração pode retratar apenas uma data ou excluir parcelas futuras. Um boleto do mês pago não demonstra, sozinho, a inexistência de dívidas antigas ou de acordo em andamento.</p>
      <p>Essas providências complementam os <a href="/artigos/contrato-compra-venda-imovel-cuidados">cuidados antes de assinar o contrato de compra e venda de imóvel</a>.</p>
      <h2 id="parcelamento">E se houver acordo parcelado ou obra aprovada?</h2>
      <p>O parcelamento de uma dívida antiga não significa quitação integral. É necessário verificar o saldo, os vencimentos, os efeitos de eventual atraso e o que foi informado ao comprador. O contrato da venda deve tratar expressamente do acordo existente.</p>
      <p>Também é importante diferenciar contribuição vencida de despesa extraordinária aprovada para cobrança futura. Data da assembleia, exigibilidade, posse e cláusulas da venda podem influenciar o acerto entre as partes. Não se deve atribuir toda obra ao vendedor ou ao comprador sem conferir esses elementos.</p>
      <h2 id="apos-compra">Descobri a dívida depois da compra. O que fazer?</h2>
      <p>Peça um demonstrativo detalhado ao condomínio, confira as competências e compare com contrato, declaração de débitos e recibos. Verifique se há pagamentos não abatidos, cobranças repetidas ou valores cuja origem não foi comprovada.</p>
      <p>Comunique o vendedor por escrito, preservando a resposta e os documentos. Se já existir processo, procure orientação sobre o débito e os prazos. A discussão com o vendedor não suspende automaticamente a cobrança judicial do condomínio.</p>
      <p>Evite assumir um acordo sem entender seu alcance. Reconhecimento da dívida, encargos, quitação e responsabilidade pelo saldo devem ser lidos com atenção.</p>
      <h2 id="ressarcimento">Posso pedir ressarcimento ao antigo proprietário?</h2>
      <p>Pode haver direito de regresso ou ressarcimento quando o comprador paga uma obrigação que, na relação interna, deveria ser suportada pelo vendedor. A análise considera o contrato, o período da dívida, as informações prestadas e a prova dos pagamentos.</p>
      <p>Guarde o demonstrativo e os comprovantes de quitação. A existência de débito, por si só, não garante indenização nem desfazimento da compra. Se a discussão envolver encerramento do negócio, confira também as diferenças entre <a href="/artigos/distrato-imobiliario-desistencia-compra-imovel">distrato imobiliário e resolução contratual</a>.</p>
      <h2 id="cobranca">O condomínio pode executar ou penhorar a unidade?</h2>
      <p>Contribuições documentadas podem fundamentar execução quando atendidos os requisitos do CPC. A unidade pode responder judicialmente pelas despesas condominiais, e a aquisição não apaga automaticamente o passivo. Penhora, eventual leilão e a participação de cada responsável dependem do processo.</p>
      <p>Para entender documentos, prazos, encargos e defesa, veja o artigo sobre <a href="/artigos/execucao-taxas-condominio-atrasadas">quando o condomínio pode executar taxas atrasadas</a>. Aqui, o foco é a responsabilidade na compra e venda e os cuidados antes de assumir o imóvel.</p>
      <h2 id="advogado">Quando buscar orientação imobiliária em Sorocaba?</h2>
      <p>A orientação é útil antes da assinatura e quando surgem divergências sobre débitos, posse ou reembolso. O escritório Eryx Fernandes Advocacia atua em <a href="/atuacao/direito-imobiliario">Direito Imobiliário em Sorocaba</a>, com análise de contratos, documentos e medidas cabíveis em conflitos de compra e venda e condomínio.</p>
      <h2 id="fontes">Legislação e fontes oficiais</h2>
      <ul>
        <li><a href="https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm#art1345" target="_blank" rel="noopener noreferrer">Código Civil: responsabilidade do adquirente, artigo 1.345</a>.</li>
        <li><a href="https://processo.stj.jus.br/repetitivos/temas_repetitivos/pesquisa.jsp?cod_tema_final=886&amp;cod_tema_inicial=886&amp;tipo_pesquisa=T" target="_blank" rel="noopener noreferrer">STJ: Tema 886</a>.</li>
        <li><a href="https://processo.stj.jus.br/repetitivos/temas_repetitivos/pesquisa.jsp?cod_tema_final=1349&amp;cod_tema_inicial=1349&amp;tipo_pesquisa=T" target="_blank" rel="noopener noreferrer">STJ: Tema 1.349 e revisão do Tema 886</a>.</li>
        <li><a href="https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2025/05052025-Segunda-Secao-confirma-que-vendedor-pode-responder-por-obrigacoes-do-imovel-posteriores-a-posse-do-comprador.aspx" target="_blank" rel="noopener noreferrer">STJ: responsabilidade concorrente de vendedor e comprador</a>.</li>
        <li><a href="https://www.stj.jus.br/sites/portalp/paginas/comunicacao/noticias/2025/14102025-comprador-registrado-na-matricula-do-imovel-responde-por-condominio--mesmo-sem-receber-as-chaves-.aspx" target="_blank" rel="noopener noreferrer">STJ: comprador registrado e ausência de entrega das chaves</a>.</li>
      </ul>
    `
  }
};
