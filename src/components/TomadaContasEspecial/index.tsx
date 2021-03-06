import { useFormik } from 'formik'
import { TextField, MenuItem, Button, IconButton, Autocomplete } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'

import axios from 'axios'
import baseAPI from '../../utils/baseAPI'

import validationTomadaContasEspecial from '../../utils/validationTomadaContasEspecial'
import { TomadaContasEspecialraStyle } from './style'
import { GlobalContext } from '../../context/GlobalStorage'
import { ConfirmDialog } from '../ConfirmDialog'
import { AlertSucess } from '../AlertSucess'
import codigosCidades from '../../utils/codigosCidades'

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

export const TomadaContasEspecial = () => {
  const context = useContext(GlobalContext)
  const navigate = useNavigate()
  const token = localStorage.getItem('app-token')

  const [dataTomadaContasEspecial, setDataTomadaContasEspecial] = useState<
    DataTomadaContasEspecialProps[]
  >([] as DataTomadaContasEspecialProps[])

  const [buttonId, setButtonId] = useState('')
  const [selectTomadaContasEspecial, setSelectTomadaContasEspecial] = useState(
    0,
  )
  const [
    openDialogTomadaContasEspecial,
    setOpenDialogTomadaContasEspecial,
  ] = useState(false)
  const [openDialogUnidadeGestora, setOpenDialogUnidadeGestora] = useState(
    false,
  )
  const [
    openDialogRemoveTomadaContasEspecial,
    setOpenDialogRemoveTomadaContasEspecial,
  ] = useState(false)

  const [
    openAlertSave,
    setOpenAlertSave,
  ] = useState(false)

  useEffect(() => {
    if (!context.formInfo.id) {
      navigate('/select_ug')
      return
    }
    requestAPI()
  }, [])

  async function requestAPI() {
    const tomadaContasEspecialExists = await tomadaContasEspecialList()

    if (!tomadaContasEspecialExists) {
      await newTomadaContasEspecial()
      await tomadaContasEspecialList()
    }
  }

  async function tomadaContasEspecialList() {
    const dataGetTCE = await getTomadaContasEspecial()

    if (dataGetTCE.length > 0) {
      const dataGetTCEReorderId: DataTomadaContasEspecialProps[] = await reorderIdNumRegistro(
        dataGetTCE,
      )

      setDataTomadaContasEspecial([...dataGetTCEReorderId])

      setSelectTomadaContasEspecial(dataGetTCE.length - 1)

      return true
    }
    return false
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
          tomadaContasEspecialAnoProcesso: data.tomadaContasEspecialAnoProcesso,
          tomadaContasEspecialFatoMotivo: data.tomadaContasEspecialFatoMotivo,
          tomadaContasEspecialDataCiencia: data.tomadaContasEspecialDataCiencia,
          tomadaContasEspecialDataInstauracao:
            data.tomadaContasEspecialDataInstauracao,
          tomadaContasEspecialDataEnvioTribunalContas:
            data.tomadaContasEspecialDataEnvioTribunalContas,
          tomadaContasEspecialValorDebito: data.tomadaContasEspecialValorDebito,
          tomadaContasEspecialSituacaoEm31do12:
            data.tomadaContasEspecialSituacaoEm31do12,
          tomadaContasEspecialMotivoBaixaDebito:
            data.tomadaContasEspecialMotivoBaixaDebito,
        }
      },
    )

    return dataGet
  }

  async function reorderIdNumRegistro(
    dataGetTCE: DataTomadaContasEspecialProps[],
  ) {
    const dataGetTCEReorderId = dataGetTCE.map(
      async (data: DataTomadaContasEspecialProps, index: number) => {
        const response = await axios.put(
          `${baseAPI.URL}/forms/${context.formInfo.id}/tomada_contas/${data.id}`,
          {
            tomadaContasEspecialIdNumRegistro: `${('0000' + (index + 1)).slice(
              -5,
            )}`,
          },
          { headers: baseAPI.HEADERS(token) },
        )
        return response.data
      },
    )

    return await Promise.all(dataGetTCEReorderId)
  }

  async function newTomadaContasEspecial() {
    const valuesTCE = {
      tomadaContasEspecialIdNumRegistro: ``,
      tomadaContasEspecialCodigoUnidadeGestora: `${context.formInfo.nomeUnidadeGestora !== 'SECONT' ? context.formInfo.codigoUnidadeGestoraCidades : ''}`,
      tomadaContasEspecialProcesso: ``,
      tomadaContasEspecialAnoProcesso: ``,
      tomadaContasEspecialFatoMotivo: ``,
      tomadaContasEspecialDataCiencia: ``,
      tomadaContasEspecialDataInstauracao: ``,
      tomadaContasEspecialDataEnvioTribunalContas: ``,
      tomadaContasEspecialValorDebito: ``,
      tomadaContasEspecialSituacaoEm31do12: ``,
      tomadaContasEspecialMotivoBaixaDebito: ``,
    }
    await axios.post(
      `${baseAPI.URL}/forms/${context.formInfo.id}/tomada_contas`,
      valuesTCE,
      { headers: baseAPI.HEADERS(token) },
    )
  }

  async function deleteTomadaContasEspecial() {
    await axios.delete(
      `${baseAPI.URL}/forms/${context.formInfo.id}/tomada_contas/${dataTomadaContasEspecial[selectTomadaContasEspecial].id}`,
      { headers: baseAPI.HEADERS(token) },
    )

    if(dataTomadaContasEspecial.length === 1) {
      context.setValueTab(4)
      return
    }
    setSelectTomadaContasEspecial(dataTomadaContasEspecial.length - 2)

    await tomadaContasEspecialList()
  }

  async function saveTomadaContasEspecial() {
   
    setOpenAlertSave(true);

    await axios.put(
      `${baseAPI.URL}/forms/${context.formInfo.id}/tomada_contas/${dataTomadaContasEspecial[selectTomadaContasEspecial].id}`,
      formik.values,
      { headers: baseAPI.HEADERS(token) },
    )
  }

  async function handleSelectTomadaContasEspecial(e: any) {
    const validate = await formik.validateForm(formik.values)

    if (Object.entries(validate).length > 0) {
      alert(
        'Preencha todos os campos corretamente antes de alternar de registro.',
      )
      formik.handleSubmit()
      context.setValueTab(3)
      return
    }

    saveTomadaContasEspecial()
    await tomadaContasEspecialList()
    setSelectTomadaContasEspecial(e.target.value)
  }

  function getIdButton(e: any) {
    setButtonId(e.target.parentNode.id)
  }

  async function responseDialogTomadaContasEspecialYes() {
    await newTomadaContasEspecial()
    await tomadaContasEspecialList()

    setSelectTomadaContasEspecial(selectTomadaContasEspecial + 1)
    return
  }

  function responseDialogTomadaContasEspecialNo() {
   

    if(context.formInfo.nomeUnidadeGestora === 'SECONT') {
      setOpenDialogUnidadeGestora(true)
      return
    }
    context.setValueTab(4)
   
    return
  }

  async function responseDialogUnidadeGestoraYes() {
    

    const valuesUnidadeGestora = {
      unidadeGestoraIdNumRegistro: ``,
      unidadeGestoraNivelControleInterno: `${
        context.formInfo.nomeUnidadeGestora !== 'SECONT' ? 2 : ''
      }`,
      unidadeGestoraCodigoUnidadeGestora: ``,
      unidadeGestoraResponsavelUnidadeGestora: ``,
      unidadeGestoraExercicioUltimaManifestacaoControleInterno: ``,
      unidadeGestoraOpiniaoPrestacaoContasControleInterno: ``,
    }
    await axios.post(
      `${baseAPI.URL}/forms/${context.formInfo.id}/unidades`,
      valuesUnidadeGestora,
      { headers: baseAPI.HEADERS(token) },
    )
      context.setValueTab(1)
    return
  }

  function responseDialogUnidadeGestoraNo() {
   
    context.setValueTab(4)
    return
  }

  const initialValues = {
    tomadaContasEspecialIdNumRegistro: `${
      dataTomadaContasEspecial.length &&
      dataTomadaContasEspecial[selectTomadaContasEspecial]
        .tomadaContasEspecialIdNumRegistro
    }`,
    tomadaContasEspecialCodigoUnidadeGestora: `${
      dataTomadaContasEspecial.length ?
      dataTomadaContasEspecial[selectTomadaContasEspecial]
        .tomadaContasEspecialCodigoUnidadeGestora : ''
    }`,
    tomadaContasEspecialProcesso: `${
      dataTomadaContasEspecial.length &&
      dataTomadaContasEspecial[selectTomadaContasEspecial]
        .tomadaContasEspecialProcesso
    }`,
    tomadaContasEspecialAnoProcesso: `${
      dataTomadaContasEspecial.length &&
      dataTomadaContasEspecial[selectTomadaContasEspecial]
        .tomadaContasEspecialAnoProcesso
    }`,
    tomadaContasEspecialFatoMotivo: `${
      dataTomadaContasEspecial.length
        ? dataTomadaContasEspecial[selectTomadaContasEspecial]
            .tomadaContasEspecialFatoMotivo
        : ''
    }`,
    tomadaContasEspecialDataCiencia: `${
      dataTomadaContasEspecial.length &&
      dataTomadaContasEspecial[selectTomadaContasEspecial]
        .tomadaContasEspecialDataCiencia
    }`,
    tomadaContasEspecialDataInstauracao: `${
      dataTomadaContasEspecial.length &&
      dataTomadaContasEspecial[selectTomadaContasEspecial]
        .tomadaContasEspecialDataInstauracao
    }`,
    tomadaContasEspecialDataEnvioTribunalContas: `${
      dataTomadaContasEspecial.length &&
      dataTomadaContasEspecial[selectTomadaContasEspecial]
        .tomadaContasEspecialDataEnvioTribunalContas
    }`,
    tomadaContasEspecialValorDebito: `${
      dataTomadaContasEspecial.length &&
      dataTomadaContasEspecial[selectTomadaContasEspecial]
        .tomadaContasEspecialValorDebito
    }`,
    tomadaContasEspecialSituacaoEm31do12: `${
      dataTomadaContasEspecial.length
        ? dataTomadaContasEspecial[selectTomadaContasEspecial]
            .tomadaContasEspecialSituacaoEm31do12
        : ''
    }`,
    tomadaContasEspecialMotivoBaixaDebito: `${
      dataTomadaContasEspecial.length
        ? dataTomadaContasEspecial[selectTomadaContasEspecial]
            .tomadaContasEspecialMotivoBaixaDebito
        : ''
    }`,
  }
  const validationSchema = validationTomadaContasEspecial.validationSchema

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,

    onSubmit: () => {
      saveTomadaContasEspecial()

      if (buttonId === 'previous') {
        context.setValueTab(2)
        return
      }

      setOpenDialogTomadaContasEspecial(true)
    },
  })

  return (
    <TomadaContasEspecialraStyle onSubmit={formik.handleSubmit}>
      <div data-header="headerForm">
        <div data-input="input-options">
          
            {dataTomadaContasEspecial.length && <TextField
              fullWidth
              select
              inputProps={{ MenuProps: { disableScrollLock: true } }}
              id="tomada_contas_especial"
              name="tomada_contas_especial"
              value={selectTomadaContasEspecial}
              label="TCE(s)"
              onChange={handleSelectTomadaContasEspecial}
            >
              {dataTomadaContasEspecial.map(
                (data: DataTomadaContasEspecialProps, index) => {
                  return (
                    <MenuItem
                      value={index}
                      key={dataTomadaContasEspecial[index].id}
                    >
                      TCE -{' '}
                      {
                        dataTomadaContasEspecial[index]
                          .tomadaContasEspecialIdNumRegistro
                      }
                    </MenuItem>
                  )
                },
              )}
             
            </TextField>}
         
            <IconButton
              title="Remover Tomada de Contas Especial"
              aria-label="Remover Tomada de Contas Especial"
              id="removeTCE"
              onClick={() => setOpenDialogRemoveTomadaContasEspecial(true)}
            >
              <RemoveCircleIcon />
            </IconButton>
          
        </div>

        <div data-button="save">
          <Button variant="contained" onClick={saveTomadaContasEspecial}>
            Salvar
          </Button>
        </div>
      </div>
      <legend>
        Informa????es de Controle Interno - Tomada de Contas Especial
      </legend>

      <TextField
        variant="outlined"
        fullWidth
        id="tomadaContasEspecialIdNumRegistro"
        label="Identifica????o do N??mero do Registro"
        name="tomadaContasEspecialIdNumRegistro"
        value={formik.values.tomadaContasEspecialIdNumRegistro}
        onChange={formik.handleChange}
        error={
          formik.touched.tomadaContasEspecialIdNumRegistro &&
          Boolean(formik.errors.tomadaContasEspecialIdNumRegistro)
        }
        helperText={
          formik.touched.tomadaContasEspecialIdNumRegistro &&
          formik.errors.tomadaContasEspecialIdNumRegistro
        }
        disabled
      />

      
      {context.formInfo.nomeUnidadeGestora !== 'SECONT' ? <TextField
        variant="outlined"
        fullWidth
        id="tomadaContasEspecialCodigoUnidadeGestora"
        label="C??digo da Unidade Gestora em que as
        Tomadas de Contas Especiais foram
        realizadas"
        name="tomadaContasEspecialCodigoUnidadeGestora"
        value={formik.values.tomadaContasEspecialCodigoUnidadeGestora}
        onChange={formik.handleChange}
        error={
          formik.touched.tomadaContasEspecialCodigoUnidadeGestora &&
          Boolean(formik.errors.tomadaContasEspecialCodigoUnidadeGestora)
        }
        helperText={
          formik.touched.tomadaContasEspecialCodigoUnidadeGestora &&
          formik.errors.tomadaContasEspecialCodigoUnidadeGestora
        }
        disabled
      /> : <Autocomplete
      id="tomadaContasEspecialCodigoUnidadeGestora"
      options={codigosCidades}
      noOptionsText={'N??o encontrado'}
      getOptionLabel={(option) => option.label || ""}
      value={codigosCidades.filter(codigo => codigo.cod === formik.values.tomadaContasEspecialCodigoUnidadeGestora)[0]}
      isOptionEqualToValue={(option, value) => option === value}
      defaultValue={{cod:"", label:""}}
      onChange={(event, value) => {
        if(value) {
          formik.setFieldValue('tomadaContasEspecialCodigoUnidadeGestora', value?.cod)
          return
        }
       
        formik.setFieldValue('tomadaContasEspecialCodigoUnidadeGestora', "")
        
      }}
     
      renderInput={(params) => (
        <TextField
          {...params}
          name="tomadaContasEspecialCodigoUnidadeGestora"
          label="C??digo da Unidade Gestora em que as
          Tomadas de Contas Especiais foram
          realizadas"
          variant="outlined"
          error={
            formik.touched.tomadaContasEspecialCodigoUnidadeGestora &&
            Boolean(formik.errors.tomadaContasEspecialCodigoUnidadeGestora)
          }
          helperText={
            formik.touched.tomadaContasEspecialCodigoUnidadeGestora &&
            formik.errors.tomadaContasEspecialCodigoUnidadeGestora
          }
          fullWidth
        />
      )}
    /> }


      <TextField
        variant="outlined"
        fullWidth
        id="tomadaContasEspecialProcesso"
        label="N??mero do Processo Administrativo da
      Tomada de Contas Especial"
        name="tomadaContasEspecialProcesso"
        value={formik.values.tomadaContasEspecialProcesso}
        onChange={formik.handleChange}
        error={
          formik.touched.tomadaContasEspecialProcesso &&
          Boolean(formik.errors.tomadaContasEspecialProcesso)
        }
        helperText={
          formik.touched.tomadaContasEspecialProcesso &&
          formik.errors.tomadaContasEspecialProcesso
        }
      />

      <TextField
        variant="outlined"
        fullWidth
        id="tomadaContasEspecialAnoProcesso"
        label="Ano do Processo Administrativo da Tomada de
      Contas Especial"
        name="tomadaContasEspecialAnoProcesso"
        value={formik.values.tomadaContasEspecialAnoProcesso}
        onChange={formik.handleChange}
        error={
          formik.touched.tomadaContasEspecialAnoProcesso &&
          Boolean(formik.errors.tomadaContasEspecialAnoProcesso)
        }
        helperText={
          formik.touched.tomadaContasEspecialAnoProcesso &&
          formik.errors.tomadaContasEspecialAnoProcesso
        }
      />

      <TextField
        fullWidth
        select
        inputProps={{ MenuProps: { disableScrollLock: true } }}
        id="tomadaContasEspecialFatoMotivo"
        name="tomadaContasEspecialFatoMotivo"
        value={formik.values.tomadaContasEspecialFatoMotivo}
        label="Fatos motivadores para a Instaura????o da
      Tomada de Contas Especial"
        onChange={formik.handleChange}
        error={
          formik.touched.tomadaContasEspecialFatoMotivo &&
          Boolean(formik.errors.tomadaContasEspecialFatoMotivo)
        }
        helperText={
          formik.touched.tomadaContasEspecialFatoMotivo &&
          formik.errors.tomadaContasEspecialFatoMotivo
        }
      >
        <MenuItem value={1}>
          1 - Omiss??o no dever de prestar contas ou a n??o comprova????o da correta
          aplica????o de recursos repassados mediante conv??nio, contrato de
          repasse, ou instrumento cong??nere;
        </MenuItem>
        <MenuItem value={2}>
          2 - Ocorr??ncia de desfalque, alcance, desvio, desaparecimento de
          dinheiro, bens ou valores p??blicos;
        </MenuItem>
        <MenuItem value={3}>
          3 - Ocorr??ncia de extravio, perda, subtra????o ou deteriora????o culposa
          ou dolosa de valores e bens;
        </MenuItem>
        <MenuItem value={4}>
          4 - Pr??tica de ato ilegal, ileg??timo ou antiecon??mico de que resulte
          dano ao er??rio;
        </MenuItem>
        <MenuItem value={5}>
          5 - Concess??o irregular de quaisquer benef??cios fiscais ou de ren??ncia
          de receitas de que resulte dano ao er??rio.
        </MenuItem>
      </TextField>

      <TextField
        variant="outlined"
        fullWidth
        id="tomadaContasEspecialDataCiencia"
        label="Data do evento ou, quando desconhecida, da
      data da ci??ncia do fato pela autoridade
      competente (Inciso I, do art. 2o da IN 32/2014)."
        name="tomadaContasEspecialDataCiencia"
        value={formik.values.tomadaContasEspecialDataCiencia}
        onChange={formik.handleChange}
        error={
          formik.touched.tomadaContasEspecialDataCiencia &&
          Boolean(formik.errors.tomadaContasEspecialDataCiencia)
        }
        helperText={
          formik.touched.tomadaContasEspecialDataCiencia &&
          formik.errors.tomadaContasEspecialDataCiencia
        }
      />

      <TextField
        variant="outlined"
        fullWidth
        id="tomadaContasEspecialDataInstauracao"
        label="Data de Instaura????o da Tomada de Contas
      Especial"
        name="tomadaContasEspecialDataInstauracao"
        value={formik.values.tomadaContasEspecialDataInstauracao}
        onChange={formik.handleChange}
        error={
          formik.touched.tomadaContasEspecialDataInstauracao &&
          Boolean(formik.errors.tomadaContasEspecialDataInstauracao)
        }
        helperText={
          formik.touched.tomadaContasEspecialDataInstauracao &&
          formik.errors.tomadaContasEspecialDataInstauracao
        }
      />

      <TextField
        variant="outlined"
        fullWidth
        id="tomadaContasEspecialDataEnvioTribunalContas"
        label="Data de Envio ao TCEES da Tomada de
      Contas Especial"
        name="tomadaContasEspecialDataEnvioTribunalContas"
        value={formik.values.tomadaContasEspecialDataEnvioTribunalContas}
        onChange={formik.handleChange}
        error={
          formik.touched.tomadaContasEspecialDataEnvioTribunalContas &&
          Boolean(formik.errors.tomadaContasEspecialDataEnvioTribunalContas)
        }
        helperText={
          formik.touched.tomadaContasEspecialDataEnvioTribunalContas &&
          formik.errors.tomadaContasEspecialDataEnvioTribunalContas
        }
      />

      <TextField
        variant="outlined"
        fullWidth
        id="tomadaContasEspecialValorDebito"
        label="Valor Original do D??bito"
        name="tomadaContasEspecialValorDebito"
        value={formik.values.tomadaContasEspecialValorDebito}
        onChange={formik.handleChange}
        error={
          formik.touched.tomadaContasEspecialValorDebito &&
          Boolean(formik.errors.tomadaContasEspecialValorDebito)
        }
        helperText={
          formik.touched.tomadaContasEspecialValorDebito &&
          formik.errors.tomadaContasEspecialValorDebito
        }
      />

      <TextField
        fullWidth
        select
        inputProps={{ MenuProps: { disableScrollLock: true } }}
        id="tomadaContasEspecialSituacaoEm31do12"
        name="tomadaContasEspecialSituacaoEm31do12"
        value={formik.values.tomadaContasEspecialSituacaoEm31do12}
        label="Situa????o da Tomada de Contas Especial em
      31 de dezembro do Exerc??cio refer??ncia da
      Presta????o de Contas Anual"
        onChange={formik.handleChange}
        error={
          formik.touched.tomadaContasEspecialSituacaoEm31do12 &&
          Boolean(formik.errors.tomadaContasEspecialSituacaoEm31do12)
        }
        helperText={
          formik.touched.tomadaContasEspecialSituacaoEm31do12 &&
          formik.errors.tomadaContasEspecialSituacaoEm31do12
        }
      >
        <MenuItem value={1}>1 - Em instru????o dentro do prazo;</MenuItem>
        <MenuItem value={2}>2 - Em instru????o fora do prazo;</MenuItem>
        <MenuItem value={3}>
          3 - Em complementa????o de informa????es determinada pelo Tribunal de
          Contas;
        </MenuItem>
        <MenuItem value={4}>4 - Finalizada;</MenuItem>
      </TextField>

      <TextField
        fullWidth
        select
        inputProps={{ MenuProps: { disableScrollLock: true } }}
        id="tomadaContasEspecialMotivoBaixaDebito"
        name="tomadaContasEspecialMotivoBaixaDebito"
        value={formik.values.tomadaContasEspecialMotivoBaixaDebito}
        label="Motivo da Baixa da Responsabilidade pelo
      D??bito"
        onChange={formik.handleChange}
        error={
          formik.touched.tomadaContasEspecialMotivoBaixaDebito &&
          Boolean(formik.errors.tomadaContasEspecialMotivoBaixaDebito)
        }
        helperText={
          formik.touched.tomadaContasEspecialMotivoBaixaDebito &&
          formik.errors.tomadaContasEspecialMotivoBaixaDebito
        }
      >
        <MenuItem value={1}>
          1 - Elis??o da responsabilidade pelo dano inicialmente imputada ao
          respons??vel;
        </MenuItem>
        <MenuItem value={2}>2 - Aus??ncia de comprova????o do dano;</MenuItem>
        <MenuItem value={3}>
          3 - Arquivamento do processo por falta de pressupostos de instaura????o
          ou do seu desenvolvimento regular;
        </MenuItem>
        <MenuItem value={4}>
          4 - Contas consideradas iliquid??veis, nos termos do art. 90 da Lei
          Complementar Estadual n?? 621/2012;
        </MenuItem>
        <MenuItem value={5}>
          5 - Quita????o ao respons??vel pelo recolhimento do d??bito.
        </MenuItem>
      </TextField>

      <div data-button="next-previous">
        <IconButton
          title="Anterior"
          aria-label="Formul??rio anterior."
          type="submit"
          id="previous"
          onClick={getIdButton}
        >
          <ArrowCircleLeftIcon id="previous"/>
        </IconButton>

        <IconButton
          title="Pr??ximo"
          aria-label="Pr??ximo formul??rio."
          type="submit"
          id="next"
          onClick={getIdButton}
        >
          <ArrowCircleRightIcon />
        </IconButton>
      </div>

      <ConfirmDialog
        open={openDialogRemoveTomadaContasEspecial}
        setOpen={setOpenDialogRemoveTomadaContasEspecial}
        titleMessage={'Tem certeza que deseja remover essa Tomada de Contas ?'}
        responseYes={deleteTomadaContasEspecial}
        responseNo={() => null}
      />

      <ConfirmDialog
        open={openDialogTomadaContasEspecial}
        setOpen={setOpenDialogTomadaContasEspecial}
        titleMessage={'Deseja incluir informa????es de outra Tomada de Contas ?'}
        responseYes={responseDialogTomadaContasEspecialYes}
        responseNo={responseDialogTomadaContasEspecialNo}
      />

      <ConfirmDialog
        open={openDialogUnidadeGestora}
        setOpen={setOpenDialogUnidadeGestora}
        titleMessage={'Deseja incluir informa????es de outra Unidade Gestora ?'}
        responseYes={responseDialogUnidadeGestoraYes}
        responseNo={responseDialogUnidadeGestoraNo}
      />

<AlertSucess
        open={openAlertSave}
        setOpen={setOpenAlertSave}
        message={'Os dados da Tomada de Contas Especial foram salvos.'}
      />
    </TomadaContasEspecialraStyle>
  )
}
