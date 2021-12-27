 interface ValuesProps {
   estruturaInicialIdNumRegistro: string;
   estruturaInicialNivelControleInterno: string;
   estruturaInicialQuantidadeTotalServidores: string;
   estruturaInicialQuantidadeServidoresEfetivos: string;
   estruturaInicialQuantidadeContadores: string;
   estruturaInicialNormaInternaGestaoOrcamentaria: string;
   estruturaInicialNormaInternaGestaoFinanceira: string;
   estruturaInicialNormaInternaGestaoPatrimonial: string;
   estruturaInicialNormaInternaGestaoFiscal: string;
   estruturaInicialNormaInternaDemContabeis: string;

   procedimentosIdNumRegistro: string;
   procedimentosInicialNivelControleInterno: string;
   procedimentosCodigoUnidadeGestora: string;
   procedimentosCodigoProcedimento: string;
   procedimentosTipoPontoControle: string;
   procedimentosUniversoAnalisado: string;
   procedimentosAmostraSelecionada: string;
   procedimentosDescricaoAnalise: string;
   procedimentosTipoProcedimentoAnalisado: string;
   procedimentosSituacaoAnalise: string;

   tomadaContasEspecialIdNumRegistro: string;
   tomadaContasEspecialCodigoUnidadeGestora: string;
   tomadaContasEspecialProcesso: string;
   tomadaContasEspecialAnoProcesso: string;
   tomadaContasEspecialFatoMotivo: string;
   tomadaContasEspecialDataCiencia: string;
   tomadaContasEspecialDataInstauracao: string;
   tomadaContasEspecialDataEnvioTribunalContas: string;
   tomadaContasEspecialValorDebito: string;
   tomadaContasEspecialSituacaoEm31do12: string;
   tomadaContasEspecialMotivoBaixaDebito: string;

   unidadeGestoraIdNumRegistro: string;
   unidadeGestoraNivelControleInterno: string;
   unidadeGestoraCodigoUnidadeGestora: string;
   unidadeGestoraResponsavelUnidadeGestora: string;
   unidadeGestoraExercicioUltimaManifestacaoControleInterno: string;
   unidadeGestoraOpiniaoPrestacaoContasControleInterno: string;
 }
export const createSchemaINFOCIXML = (values:ValuesProps) => {
 
  const schemaINFOCI =
  `<PrestacaoContasAnual>
  <InformacoesControleInterno_Schema><InformacoesControleInternoEstruturaInicial> <IdNumRegistro>${values.estruturaInicialIdNumRegistro}</IdNumRegistro><NivelControleInterno>${values.estruturaInicialNivelControleInterno}</NivelControleInterno><QuantidadeTotalServidores>${values.estruturaInicialQuantidadeTotalServidores}</QuantidadeTotalServidores><QuantidadeServidoresEfetivos>${values.estruturaInicialQuantidadeServidoresEfetivos}</QuantidadeServidoresEfetivos><QuantidadeContadores>${values.estruturaInicialQuantidadeContadores}</QuantidadeContadores><NormaInternaGestaoOrcamentaria>${values.estruturaInicialNormaInternaGestaoOrcamentaria}</NormaInternaGestaoOrcamentaria><NormaInternaGestaoFinanceira>${values.estruturaInicialNormaInternaGestaoFinanceira}</NormaInternaGestaoFinanceira><NormaInternaGestaoPatrimonial>${values.estruturaInicialNormaInternaGestaoPatrimonial}</NormaInternaGestaoPatrimonial><NormaInternaGestaoFiscal>${values.estruturaInicialNormaInternaGestaoFiscal}</NormaInternaGestaoFiscal><NormaInternaDemContabeis>${values.estruturaInicialNormaInternaDemContabeis}</NormaInternaDemContabeis></InformacoesControleInternoEstruturaInicial > <InformacoesControleInternoEstruturaInicialUnidadeGestora><IdNumRegistro>${values.unidadeGestoraIdNumRegistro}</IdNumRegistro><NivelControleInterno>${values.unidadeGestoraNivelControleInterno}</NivelControleInterno><CodigoUnidadeGestora>${values.unidadeGestoraCodigoUnidadeGestora}</CodigoUnidadeGestora><ResponsavelUnidadeGestora>${values.unidadeGestoraResponsavelUnidadeGestora}</ResponsavelUnidadeGestora><ExercicioUltimaManifestacaoControleInterno>${values.unidadeGestoraExercicioUltimaManifestacaoControleInterno}</ExercicioUltimaManifestacaoControleInterno><OpiniaoPrestacaoContasControleInterno>${values.unidadeGestoraOpiniaoPrestacaoContasControleInterno}</OpiniaoPrestacaoContasControleInterno></InformacoesControleInternoEstruturaInicialUnidadeGestora><InformacoesControleInternoProcedimentos><IdNumRegistro>${values.procedimentosIdNumRegistro}</IdNumRegistro><NivelControleInterno>${values.procedimentosInicialNivelControleInterno}</NivelControleInterno><CodigoUnidadeGestora>${values.procedimentosCodigoUnidadeGestora}</CodigoUnidadeGestora><CodigoProcedimento>${values.procedimentosCodigoProcedimento}</CodigoProcedimento><TipoPontoControle>${values.procedimentosTipoPontoControle}</TipoPontoControle><UniversoAnalisado>${values.procedimentosUniversoAnalisado}</UniversoAnalisado><AmostraSelecionada>${values.procedimentosAmostraSelecionada}</AmostraSelecionada><DescricaoAnalise>${values.procedimentosDescricaoAnalise}</DescricaoAnalise><TipoProcedimentoAnalisado>${values.procedimentosTipoProcedimentoAnalisado}</TipoProcedimentoAnalisado><SituacaoAnalise>${values.procedimentosSituacaoAnalise}</SituacaoAnalise></InformacoesControleInternoProcedimentos><InformacoesControleInternoTomadaContasEspecial><IdNumRegistro>${values.tomadaContasEspecialIdNumRegistro}</IdNumRegistro><CodigoUnidadeGestora>${values.tomadaContasEspecialCodigoUnidadeGestora}</CodigoUnidadeGestora><Processo>${values.tomadaContasEspecialProcesso}</Processo><AnoProcesso>${values.tomadaContasEspecialAnoProcesso}</AnoProcesso><FatoMotivo>${values.tomadaContasEspecialFatoMotivo}</FatoMotivo><DataCiencia>${values.tomadaContasEspecialDataCiencia}</DataCiencia><DataInstauracao>${values.tomadaContasEspecialDataInstauracao}</DataInstauracao><DataEnvioTribunalContas>${values.tomadaContasEspecialDataEnvioTribunalContas}</DataEnvioTribunalContas><ValorDebito>${values.tomadaContasEspecialValorDebito}</ValorDebito><SituacaoEm31do12>${values.tomadaContasEspecialSituacaoEm31do12}</SituacaoEm31do12><MotivoBaixaDebito>${values.tomadaContasEspecialMotivoBaixaDebito}</MotivoBaixaDebito></InformacoesControleInternoTomadaContasEspecial ></InformacoesControleInterno_Schema></PrestacaoContasAnual>`;

  return schemaINFOCI;
}

