
const pontosControle = [
  {cod:"", label:""},
  {cod:"1.1.1", label:"1.1.1 - Prestação	de contas anual – execução orçamentária"},
  {cod:"1.1.2" , label:"1.1.2 - Despesa – realização sem prévio empenho"},
  {cod:"1.1.3" , label:"1.1.3 - Transferência de recursos orçamentários ao Poder Legislativo."},
  {cod:"1.2.1" , label:"1.2.1 - Registro por competência - despesas previdenciárias patronais"},
  {cod:"1.2.2" , label:"1.2.2 - Pagamento das obrigações previdenciárias - parte patronal"},
  {cod:"1.2.3" , label:"1.2.3 - Registro por competência – multas e juros por atraso de pagamento"},
  {cod:"1.2.4" , label:"1.2.4 - Retenção/Repass e das contribuições previdenciárias- parte servidor"},
  {cod:"1.2.5" , label:"1.2.5 - Parcelamento de débitos previdenciários"},
  {cod:"1.2.6" , label:"1.2.6 - Registro por competência - Receitas	de Contribuições"},
  {cod:"1.2.7" , label:"1.2.7 - Registro por competência – multas e juros por atraso no pagamento"},
  {cod:"1.2.8" , label:"1.2.8 - Medidas de Cobrança- Créditos Previdenciários a Receber e Parcelamentos a Receber"},
  {cod:"1.2.9" , label:"1.2.9 - Despesa Administrativa"},
  {cod:"1.2.10" , label:"1.2.10 - Disponibilidades financeiras - contas específicas"},
  {cod:"1.2.11" , label:"1.2.11 - Disponibilidades financeiras – limites	econdições	de proteção	e prudência	nas aplicações"},
  {cod:"1.2.12" , label:"1.2.12 - Disponibilidades financeiras – vedações"},
  {cod:"1.2.13" , label:"1.2.13 - Equilíbrio Financeiro e Atuarial"},
  {cod:"1.2.14" , label:"1.2.14 - Equilíbrio financeiro	e atuarial – Plano de Equacionamento"},
  {cod:"1.2.15" , label:"1.2.15 - Escrituração Contábil	- Registro	das provisões matemáticas previdenciárias"},
  {cod:"1.2.16" , label:"1.2.16 - Escrituração Contábil"},
  {cod:"1.2.17" , label:"1.2.17 - Conciliação de contas"},
  {cod:"1.2.18" , label:"1.2.18 - Conciliação de contas"},
  {cod:"1.2.19" , label:"1.2.19 - Conciliação de contas"},
  {cod:"1.3.1" , label:"1.3.1 - Bens em estoque, móveis, imóveis e intangíveis	– registro contábil compatibilidade com inventário"},
  {cod:"1.3.2" , label:"1.3.2 - Bens móveis, imóveis	e intangíveis	– Registro e controle "},
  {cod:"1.3.3" , label:"1.3.3 - Disponibilidades financeiras	– depósito	e aplicação"},
  {cod:"1.3.4" , label:"1.3.4 - Disponibilidades financeiras	– depósito	e aplicação - Lei	4.320/1964,arts. 94 a 96"},
  {cod:"1.3.5" , label:"1.3.5 - Dívida ativa e demais créditos tributários	– conciliação	do demonstrativo com	as demonstrações contábeis"},
  {cod:"1.3.6" , label:"1.3.6 - Dívida ativa e demais créditos tributários	– cobrança regular"},
  {cod:"1.3.7" , label:"1.3.7 - Obrigações contraídas	no último	ano de mandato"},
  {cod:"1.4.1" , label:"1.4.1 - Educação – aplicação mínima"},
  {cod:"1.4.2" , label:"1.4.2 - Educação – remuneração dos profissionais do magistério"},
  {cod:"1.4.3" , label:"1.4.3 - Educação - Pertinência"},
  {cod:"1.4.4" , label:"1.4.4 - Saúde	– aplicação mínima"},
  {cod:"1.4.5" , label:"1.4.5 - Saúde	–pertinência"},
  {cod:"1.4.6" , label:"1.4.6 - Despesas com pessoal	– abrangência"},
  {cod:"1.4.7" , label:"1.4.7 - Despesas com pessoal – limite"},
  {cod:"1.4.8" , label:"1.4.8 - Despesas com pessoal	– descumprimento de	limites	– nulidade do ato"},
  {cod:"1.4.9" , label:"1.4.9 - Despesas com pessoal	– aumento despesas	nos últimos 180 dias do	fim de mandato–nulidade do ato"},
  {cod:"1.4.10" , label:"1.4.10 - Despesas com pessoal – limite prudencial – vedações"},
  {cod:"1.4.11" , label:"1.4.11 - Despesas com pessoal–extrapolação do limite–providências/medidas	de contenção"},
  {cod:"1.4.12" , label:"1.4.12 - Despesas com pessoal–expansão de despesas–existência	de dotação orçamentária–autorização	na LDO"},
  {cod:"1.4.15" , label:"1.4.15 - Dívida pública – extrapolação de limite no decorrer da execução orçamentária – redução do valor excedente"},
  {cod:"1.4.16" , label:"1.4.16 - Operação de crédito por antecipação de receita orçamentária–limite"},
  {cod:"1.5.1" , label:"1.5.1 - Documentos integrantes da PCA–compatibilidade com o normativo do TCE"},
  {cod:"1.5.2" , label:"1.5.2 - Segregação de funções."},
  {cod:"2.1.1" , label:"2.1.1 - LDO compatibilidade com Plano Plurianual"},
  {cod:"2.1.2" , label:"2.1.2 - LDO – limitação de empenho."},
  {cod:"2.1.3" , label:"2.1.3 - LDO – controlede custos	e avaliação	de resultados	de programas"},
  {cod:"2.1.4" , label:"2.1.4 - LDO – condições para transferências de recursos	a entidades privadas."},
  {cod:"2.1.5" , label:"2.1.5 - LDO – Anexo de Metas Fiscais – abrangência"},
  {cod:"2.1.6" , label:"2.1.6 - LDO – Anexo de Metas Fiscais – conteúdo"},
  {cod:"2.1.7" , label:"2.1.7 - LDO – Anexo de Riscos Fiscais – abrangência"},
  {cod:"2.1.8" , label:"2.1.8 - LDO – Anexo de Riscos Fiscais – conteúdo"},
  {cod:"2.1.9" , label:"2.1.9 - Programação orçamentária – disponibilização de estudos e estimativas de receitas"},
  {cod:"2.1.10" , label:"2.1.10 - LOA – compatibilidade com a LDO e com o	Plano Plurianual"},
  {cod:"2.1.11" , label:"2.1.11 - LOA – demonstrativo da compatibilidade dos orçamentos com objetivos e metas da LRF"},
  {cod:"2.1.12" , label:"2.1.12 - LOA – demonstrativo dos efeitos da renúncia	de receita"},
  {cod:"2.1.13" , label:"2.1.13 - LOA – reserva de contingência"},
  {cod:"2.1.14" , label:"2.1.14 - LOA – previsão de recursos para pagamento de precatórios"},
  {cod:"2.1.15" , label:"2.1.15 - LOA – vinculação de recursos"},
  {cod:"2.1.16" , label:"2.1.16 - LOA – programação financeira e cronograma de desembolso"},
  {cod:"2.1.17" , label:"2.1.17 - Transparência na gestão"},
  {cod:"2.2.1" , label:"2.2.1 - Anexo de Metas Fiscais–cumprimento de metas fiscais"},
  {cod:"2.2.2" , label:"2.2.2 - Instituição, previsão	e execução	de receitas"},
  {cod:"2.2.3" , label:"2.2.3 - Renúncia de receitas–estimativa	de impacto orçamentário-financeiro"},
  {cod:"2.2.4" , label:"2.2.4 - Renúncia de receitas – eficácia da concessão ou ampliação do incentivo"},
  {cod:"2.2.5" , label:"2.2.5 - Renúncia de receitas – legislação específica"},
  {cod:"2.2.6" , label:"2.2.6 - Renúncia de receitas	– resultados"},
  {cod:"2.2.7" , label:"2.2.7 - Renúncia de receitas–avaliação	dos projetos"},
  {cod:"2.2.8" , label:"2.2.8 - Despesa pública–criação,expansão ou aperfeiçoamento de ação governamental-orçamentário- financeiro."},
  {cod:"2.2.9" , label:"2.2.9 - Despesa pública–criação,expansão ou aperfeiçoamento de	ação governamental-metas fiscais."},
  {cod:"2.2.10" , label:"2.2.10 - Execução de programas	e projetos"},
  {cod:"2.2.11" , label:"2.2.11 - Execução de despesas	– créditos orçamentários"},
  {cod:"2.2.12" , label:"2.2.12 - Execução de despesas	– vinculação"},
  {cod:"2.2.13" , label:"2.2.13 - Créditos adicionais – autorização legislativa	para abertura"},
  {cod:"2.2.14" , label:"2.2.14 - Créditos adicionais	– decreto executivo"},
  {cod:"2.2.15" , label:"2.2.15 - Créditos orçamentários – transposição, remanejamento e transferências"},
  {cod:"2.2.16" , label:"2.2.16 - Autorização orçamentária para cobertura de déficit"},
  {cod:"2.2.17" , label:"2.2.17 - Autorização legislativa	para instituição de fundos de qualquer natureza"},
  {cod:"2.2.18" , label:"2.2.18 - Realização de investimentos plurianuais"},
  {cod:"2.2.19" , label:"2.2.19 - Créditos extraordinários – abertura"},
  {cod:"2.2.20" , label:"2.2.20 - Execução da programação financeira	de desembolso"},
  {cod:"2.2.21" , label:"2.2.21 - Transparência na gestão–instrumentos de planejamento e demonstrativos fiscais"},
  {cod:"2.2.22" , label:"2.2.22 - Transparência na gestão–execução orçamentária"},
  {cod:"2.2.23" , label:"2.2.23 - Transparência na gestão	–prestação de contas"},
  {cod:"2.2.24" , label:"2.2.24 - Escrituração e consolidação das contas públicas"},
  {cod:"2.2.25" , label:"2.2.25 - Relatório Resumido da Execução Orçamentária e Relatório	de Gestão Fiscal – elaboração"},
  {cod:"2.2.27" , label:"2.2.27 - Concessão de privilégios fiscais para empresas públicas	ou sociedades de economia mista"},
  {cod:"2.2.28" , label:"2.2.28 - Pagamento de passivos – ordem cronológica das exigibilidades"},
  {cod:"2.2.29" , label:"2.2.29 - Déficit orçamentário – medidas de contenção"},
  {cod:"2.2.30" , label:"2.2.30 - Despesa	– realização de despesas – irregularidades"},
  {cod:"2.2.31" , label:"2.2.31 - Despesa	– liquidação"},
  {cod:"2.2.32" , label:"2.2.32 - Pagamento	de despesas	sem regular liquidação"},
  {cod:"2.2.33" , label:"2.2.33 - Despesa – desvio de finalidade"},
  {cod:"2.2.34" , label:"2.2.34 - Despesa	– auxílios, contribuições	e subvenções"},
  {cod:"2.2.35" , label:"2.2.35 - Despesa	– subvenção social"},
  {cod:"2.3.1" , label:"2.3.1 - Passivos contingentes	– reconhecimento de	precatórios judiciais"},
  {cod:"2.3.2" , label:"2.3.2 - Dívida pública – precatórios – pagamento"},
  {cod:"2.3.3" , label:"2.3.3 - Evidenciação de resultados – consolidação"},
  {cod:"2.3.4" , label:"2.3.4 - Dívida ativa e demais créditos tributários – cancelamento"},
  {cod:"2.3.5" , label:"2.3.5 - Cancelamento de passivos"},
  {cod:"2.4.1" , label:"2.4.1 - Transferências voluntárias – exigências"},
  {cod:"2.4.2" , label:"2.4.2 - Dívida pública – precatórios–integração	na dívida consolidada"},
  {cod:"2.4.4" , label:"2.4.4 - Dívida pública – evidenciação no RGF"},
  {cod:"2.4.5" , label:"2.4.5 - Dívida pública – extrapolação de limite no decorrer da execução orçamentária–redução do valor excedente"},
  {cod:"2.4.6" , label:"2.4.6 - Operação de crédito–instituição financeira controlada"},
  {cod:"2.4.7" , label:"2.4.7 - Operação de crédito–instituição financeira controlada-Resolução nº43/2001"},
  {cod:"2.4.8" , label:"2.4.8 - Operação de crédito–vedações"},
  {cod:"2.4.9" , label:"2.4.9 - Operação de crédito–vedações-Resolução nº43/2001"},
  {cod:"2.4.10" , label:"2.4.10 - Operação de crédito–despesas	de capital"},
  {cod:"2.4.11" , label:"2.4.11 - Operação de crédito–limite global"},
  {cod:"2.4.12" , label:"2.4.12 - Operação de crédito–limite para amortizações, juros	e	mais encargos"},
  {cod:"2.4.13" , label:"2.4.13 - Operação de crédito–concessão	de garantias	e contragarantias"},
  {cod:"2.4.14" , label:"2.4.14 - Operação de crédito–concessão de garantias	e contragarantias"},
  {cod:"2.4.15" , label:"2.4.15 - Operação de crédito–concessão	de garantias e contragarantias – limite"},
  {cod:"2.4.16" , label:"2.4.16 - Operação de crédito–cláusulas contratuais vedadas"},
  {cod:"2.4.17" , label:"2.4.17 - Operação de crédito por antecipação de receita orçamentária–exigências para contratação"},
  {cod:"2.4.18" , label:"2.4.18 - Operação de crédito	por antecipação de receita orçamentária–vedações"},
  {cod:"2.5.1" , label:"2.5.1 - Retenção de impostos, contribuições sociais e previdenciárias"},
  {cod:"2.5.2" , label:"2.5.2 - Base de cálculo de contribuições - RPPS"},
  {cod:"2.5.3" , label:"2.5.3 - Alíquota de contribuição – Fixação"},
  {cod:"2.5.4" , label:"2.5.4 - Alíquota de contribuição – Recolhimento"},
  {cod:"2.5.5" , label:"2.5.5 - Guia de recolhimento de contribuições previdenciárias"},
  {cod:"2.5.6" , label:"2.5.6 - Contribuições previdenciárias dos servidores cedidos"},
  {cod:"2.5.7" , label:"2.5.7 - Servidores cedidos"},
  {cod:"2.5.8" , label:"2.5.8 - Controle informatizado e individualizado das contribuições dos servidores do ente"},
  {cod:"2.5.9" , label:"2.5.9 - Disponibilização do registro individualizado ao segurado"},
  {cod:"2.5.10" , label:"2.5.10 - Parcelamento de débitos previdenciários – Autorização Legal"},
  {cod:"2.5.11" , label:"2.5.11 - Compensação Previdenciária"},
  {cod:"2.5.12" , label:"2.5.12 - Orçamento"},
  {cod:"2.5.13" , label:"2.5.13 - Orçamento"},
  {cod:"2.5.14" , label:"2.5.14 - Transparência"},
  {cod:"2.5.15" , label:"2.5.15 - Atuação dos conselhos de previdência"},
  {cod:"2.5.16" , label:"2.5.16 - Obrigações do MPS"},
  {cod:"2.5.18" , label:"2.5.18 - Avaliação atuarial–reavaliação anual"},
  {cod:"2.5.19" , label:"2.5.19 - Cálculo atuarial – data base"},
  {cod:"2.5.20" , label:"2.5.20 - Plano de Amortização – instituição por lei"},
  {cod:"2.5.21" , label:"2.5.21 - Plano de Amortização – estudo de viabilidade"},
  {cod:"2.5.22" , label:"2.5.22 - Contabilização da amortização do déficit atuarial"},
  {cod:"2.5.23" , label:"2.5.23 - Segregação de planos - estabelecimento por lei"},
  {cod:"2.5.24" , label:"2.5.24 - Transferência de recursos entre Fundo Previdenciário para o Financeiro."},
  {cod:"2.5.25" , label:"2.5.25 - Recadastramento dos inativos e pensionistas"},
  {cod:"2.5.26" , label:"2.5.26 - Censo Atuarial"},
  {cod:"2.5.27" , label:"2.5.27 - Hipóteses Atuariais - Definição"},
  {cod:"2.5.28" , label:"2.5.28 - Hipóteses Atuariais – Eleição conjunta"},
  {cod:"2.5.29" , label:"2.5.29 - Meta atuarial - definição"},
  {cod:"2.5.30" , label:"2.5.30 - Meta atuarial - cumprimento"},
  {cod:"2.5.31" , label:"2.5.31 - Comitê de investimentos - instituição"},
  {cod:"2.5.32" , label:"2.5.32 - Comitê de investimentos - Reuniões"},
  {cod:"2.5.33" , label:"2.5.33 - Comitê de investimentos–Certificados dos membros"},
  {cod:"2.5.34" , label:"2.5.34 - Politica de Investimento"},
  {cod:"2.5.35" , label:"2.5.35 - Aplicação dos recursos"},
  {cod:"2.5.36" , label:"2.5.36 - Utilização do Formulário (APR)"},
  {cod:"2.5.37" , label:"2.5.37 - Registro de Admissões"},
  {cod:"2.5.38" , label:"2.5.38 - Registro de Aposentadorias, reserva remunerada e reforma"},
  {cod:"2.5.39" , label:"2.5.39 - Registro de Pensões"},
  {cod:"2.5.40" , label:"2.5.40 - Concessão e pagamento indevidos de aposentadoria por invalidez"},
  {cod:"2.5.41" , label:"2.5.41 - Pagamento de benefícios não previdenciários"},
  {cod:"2.5.42" , label:"2.5.42 - Pagamento Indevido de Benefícios por morte do beneficiário"},
  {cod:"2.5.43" , label:"2.5.43 - Pagamento Indevido – medidas de controle"},
  {cod:"2.5.44" , label:"2.5.44 - Ação de repetição de indébito em relação a pagamento indevido de benefício"},
  {cod:"2.5.45" , label:"2.5.45 - Despesa Administrativa – fixação em lei"},
  {cod:"2.5.46" , label:"2.5.46 - Despesa administrative – cumprimento do limite"},
  {cod:"2.6.1" , label:"2.6.1 - Pessoal – função de confiança e cargos	em comissão-CRFB/88"},
  {cod:"2.6.2" , label:"2.6.2 - Pessoal – função de confiança e cargos	em comissão"},
  {cod:"2.6.3" , label:"2.6.3 - Pessoal – contratação	por tempo determinado"},
  {cod:"2.6.4" , label:"2.6.4 - Pessoal – teto"},
  {cod:"2.6.5" , label:"2.6.5 - Realização de despesas sem previsão em lei específica"},
  {cod:"2.6.6" , label:"2.6.6 - Dispensa e inexigibilidade de licitação."},
]

export default pontosControle
