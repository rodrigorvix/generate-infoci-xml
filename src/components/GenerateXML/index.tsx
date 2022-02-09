import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStorage'
import baseAPI from '../../utils/baseAPI'

interface DataEstruturaInicialProps {
  id: number
  estruturaInicialIdNumRegistro: string
  estruturaInicialNivelControleInterno: string
  estruturaInicialQuantidadeTotalServidores: string
  estruturaInicialQuantidadeServidoresEfetivos: string
  estruturaInicialQuantidadeContadores: string
  estruturaInicialNormaInternaGestaoOrcamentaria: string
  estruturaInicialNormaInternaGestaoFinanceira: string
  estruturaInicialNormaInternaGestaoPatrimonial: string
  estruturaInicialNormaInternaGestaoFiscal: string
  estruturaInicialNormaInternaDemContabeis: string
}

interface DataUnidadeGestoraProps {
  id: number
  unidadeGestoraIdNumRegistro: string
  unidadeGestoraNivelControleInterno: string
  unidadeGestoraCodigoUnidadeGestora: string
  unidadeGestoraResponsavelUnidadeGestora: string
  unidadeGestoraExercicioUltimaManifestacaoControleInterno: string
  unidadeGestoraOpiniaoPrestacaoContasControleInterno: string
}

interface DataProcedimentoProps {
  id: number
  procedimentosIdNumRegistro: string
  procedimentosNivelControleInterno: string
  procedimentosCodigoUnidadeGestora: string
  procedimentosCodigoProcedimento: string
  procedimentosTipoPontoControle: string
  procedimentosUniversoAnalisado: string
  procedimentosAmostraSelecionada: string
  procedimentosDescricaoAnalise: string
  procedimentosTipoProcedimentoAnalisado: string
  procedimentosSituacaoAnalise: string
}
interface DataTomadaContasEspecialProps {
  id: number
  tomadaContasEspecialIdNumRegistro: string
  tomadaContasEspecialCodigoUnidadeGestora: string
  tomadaContasEspecialProcesso: string
  tomadaContasEspecialAnoProcesso: string
  tomadaContasEspecialFatoMotivo: string
  tomadaContasEspecialDataCiencia: string
  tomadaContasEspecialDataInstauracao: string
  tomadaContasEspecialDataEnvioTribunalContas: string
  tomadaContasEspecialValorDebito: string
  tomadaContasEspecialSituacaoEm31do12: string
  tomadaContasEspecialMotivoBaixaDebito: string
}

export const GenerateXML = () => {
  const [dataEstruturaInicial, setDataEstruturaInicial] = useState<
    DataEstruturaInicialProps
  >({} as DataEstruturaInicialProps)
  const [dataUnidadeGestora, setDataUnidadeGestora] = useState<
    DataUnidadeGestoraProps
  >({} as DataUnidadeGestoraProps)
  const [dataProcedimentos, setDataProcedimentos] = useState<
    DataProcedimentoProps[]
  >([] as DataProcedimentoProps[])
  const [dataTomadaContasEspecial, setDataTomadaContasEspecial] = useState<
    DataTomadaContasEspecialProps[]
  >([] as DataTomadaContasEspecialProps[])

  const context = useContext(GlobalContext)
  const token = localStorage.getItem('app-token')
  const navigate = useNavigate()

  useEffect(() => {
    if (!context.formInfo.id) {
      navigate('/select_ug')
      return
    }

    requestAPI()

    async function requestAPI() {
      await getEstruturaInicial()
      await getUnidadeGestora()
      await getProcedimentos()
      await getTomadaContasEspecial()
    }

    async function getEstruturaInicial() {
      const responseGet = await axios.get(
        `${baseAPI.URL}/forms/${context.formInfo.id}/estruturas`,
        { headers: baseAPI.HEADERS(token) },
      )
      const dataGet = responseGet.data.map(
        ({
          id,
          estruturaInicialIdNumRegistro,
          estruturaInicialNivelControleInterno,
          estruturaInicialQuantidadeTotalServidores,
          estruturaInicialQuantidadeServidoresEfetivos,
          estruturaInicialQuantidadeContadores,
          estruturaInicialNormaInternaGestaoOrcamentaria,
          estruturaInicialNormaInternaGestaoFinanceira,
          estruturaInicialNormaInternaGestaoPatrimonial,
          estruturaInicialNormaInternaGestaoFiscal,
          estruturaInicialNormaInternaDemContabeis,
        }: any) => {
          return {
            id,
            estruturaInicialIdNumRegistro,
            estruturaInicialNivelControleInterno,
            estruturaInicialQuantidadeTotalServidores,
            estruturaInicialQuantidadeServidoresEfetivos,
            estruturaInicialQuantidadeContadores,
            estruturaInicialNormaInternaGestaoOrcamentaria,
            estruturaInicialNormaInternaGestaoFinanceira,
            estruturaInicialNormaInternaGestaoPatrimonial,
            estruturaInicialNormaInternaGestaoFiscal,
            estruturaInicialNormaInternaDemContabeis,
          }
        },
      )
      if (dataGet.length > 0) {
        setDataEstruturaInicial(
          dataGet.reduce((data: DataEstruturaInicialProps) => ({ ...data })),
        )
      }
    }

    async function getUnidadeGestora() {
      const responseGet = await axios.get(
        `${baseAPI.URL}/forms/${context.formInfo.id}/unidades`,
        { headers: baseAPI.HEADERS(token) },
      )
      const dataGet = responseGet.data.map(
        ({
          id,
          unidadeGestoraIdNumRegistro,
          unidadeGestoraNivelControleInterno,
          unidadeGestoraCodigoUnidadeGestora,
          unidadeGestoraResponsavelUnidadeGestora,
          unidadeGestoraExercicioUltimaManifestacaoControleInterno,
          unidadeGestoraOpiniaoPrestacaoContasControleInterno,
        }: any) => {
          return {
            id,
            unidadeGestoraIdNumRegistro,
            unidadeGestoraNivelControleInterno,
            unidadeGestoraCodigoUnidadeGestora,
            unidadeGestoraResponsavelUnidadeGestora,
            unidadeGestoraExercicioUltimaManifestacaoControleInterno,
            unidadeGestoraOpiniaoPrestacaoContasControleInterno,
          }
        },
      )
      if (dataGet.length > 0) {
        setDataUnidadeGestora(
          dataGet.reduce((data: DataUnidadeGestoraProps) => ({ ...data })),
        )
      }
    }

    async function getProcedimentos() {
      const response = await axios.get(
        `${baseAPI.URL}/forms/${context.formInfo.id}/procedimentos`,
        { headers: baseAPI.HEADERS(token) },
      )

      const dataGet: Array<DataProcedimentoProps> = await response.data.map(
        (data: DataProcedimentoProps) => {
          return {
            id: data.id,
            procedimentosIdNumRegistro: data.procedimentosIdNumRegistro,
            procedimentosNivelControleInterno:
              data.procedimentosNivelControleInterno,
            procedimentosCodigoUnidadeGestora:
              data.procedimentosCodigoUnidadeGestora,
            procedimentosCodigoProcedimento:
              data.procedimentosCodigoProcedimento,
            procedimentosTipoPontoControle: data.procedimentosTipoPontoControle,
            procedimentosUniversoAnalisado: data.procedimentosUniversoAnalisado,
            procedimentosAmostraSelecionada:
              data.procedimentosAmostraSelecionada,
            procedimentosDescricaoAnalise: data.procedimentosDescricaoAnalise,
            procedimentosTipoProcedimentoAnalisado:
              data.procedimentosTipoProcedimentoAnalisado,
            procedimentosSituacaoAnalise: data.procedimentosSituacaoAnalise,
          }
        },
      )
      if (dataGet.length > 0) {
        setDataProcedimentos([...dataGet])
      }
    }

    async function getTomadaContasEspecial() {
      const response = await axios.get(
        `${baseAPI.URL}/forms/${context.formInfo.id}/tomada_contas`,
        { headers: baseAPI.HEADERS(token) },
      )

      const dataGet: Array<DataTomadaContasEspecialProps> = await response.data.map(
        (data: DataTomadaContasEspecialProps) => {
          return {
            id: data.id,
            tomadaContasEspecialIdNumRegistro:
              data.tomadaContasEspecialIdNumRegistro,
            tomadaContasEspecialCodigoUnidadeGestora:
              data.tomadaContasEspecialCodigoUnidadeGestora,
            tomadaContasEspecialProcesso: data.tomadaContasEspecialProcesso,
            tomadaContasEspecialAnoProcesso:
              data.tomadaContasEspecialAnoProcesso,
            tomadaContasEspecialFatoMotivo: data.tomadaContasEspecialFatoMotivo,
            tomadaContasEspecialDataCiencia:
              data.tomadaContasEspecialDataCiencia,
            tomadaContasEspecialDataInstauracao:
              data.tomadaContasEspecialDataInstauracao,
            tomadaContasEspecialDataEnvioTribunalContas:
              data.tomadaContasEspecialDataEnvioTribunalContas,
            tomadaContasEspecialValorDebito:
              data.tomadaContasEspecialValorDebito,
            tomadaContasEspecialSituacaoEm31do12:
              data.tomadaContasEspecialSituacaoEm31do12,
            tomadaContasEspecialMotivoBaixaDebito:
              data.tomadaContasEspecialMotivoBaixaDebito,
          }
        },
      )
      if (dataGet.length > 0) {
        setDataTomadaContasEspecial([...dataGet])
      }
    }
  }, [])

  if(dataEstruturaInicial && dataUnidadeGestora && dataProcedimentos.length > 0 && dataTomadaContasEspecial.length > 0 ) {
    console.log(dataEstruturaInicial)
  console.log(dataUnidadeGestora)
  console.log(dataProcedimentos)
  console.log(dataTomadaContasEspecial)
  }

  return <h1>Gerando um XML...</h1>
}
