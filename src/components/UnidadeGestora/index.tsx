import { useFormik } from 'formik'

import { TextField, MenuItem, Button, IconButton } from '@mui/material'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'

import { UnidadeGestoraStyle } from './style'
import validationUnidadeGestora from '../../utils/validationUnidadeGestora'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalStorage'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import baseAPI from '../../utils/baseAPI'

interface DataUnidadeGestoraProps {
  id: number
  unidadeGestoraIdNumRegistro: string
  unidadeGestoraNivelControleInterno: string
  unidadeGestoraCodigoUnidadeGestora: string
  unidadeGestoraResponsavelUnidadeGestora: string
  unidadeGestoraExercicioUltimaManifestacaoControleInterno: string
  unidadeGestoraOpiniaoPrestacaoContasControleInterno: string
}

export const UnidadeGestora = (props: any) => {
  const context = useContext(GlobalContext)
  const navigate = useNavigate()
  const token = localStorage.getItem('app-token')
  const [buttonId, setButtonId] = useState('')
  const [dataUnidadeGestora, setDataUnidadeGestora] = useState<DataUnidadeGestoraProps>({} as DataUnidadeGestoraProps)
  // const [selectUnidadeGestora, setSelectUnidadeGestora] = useState(1)

  useEffect(() => {
    if (!context.formInfo.id) {
      navigate('/select_ug')
      return
    }

    requestAPI()

    async function requestAPI() {
      const listUniadeGestora = await getUnidadeGestora()

      if (!listUniadeGestora) {
        const valueDefault = {
          unidadeGestoraIdNumRegistro: `00001`,
          unidadeGestoraNivelControleInterno: ``,
          unidadeGestoraCodigoUnidadeGestora: ``,
          unidadeGestoraResponsavelUnidadeGestora: ``,
          unidadeGestoraExercicioUltimaManifestacaoControleInterno: ``,
          unidadeGestoraOpiniaoPrestacaoContasControleInterno: ``,
        }
        await axios.post(
          `${baseAPI.URL}/forms/${context.formInfo.id}/unidades`,
          valueDefault,
          { headers: baseAPI.HEADERS(token) },
        )

        await getUnidadeGestora()
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
        return true
      }
      return false
    }
  }, [])

  const initialValues = {
    unidadeGestoraIdNumRegistro: `${dataUnidadeGestora.unidadeGestoraIdNumRegistro}`,
    unidadeGestoraNivelControleInterno: `${
      dataUnidadeGestora.unidadeGestoraNivelControleInterno || ''
    }`,
    unidadeGestoraCodigoUnidadeGestora: `${dataUnidadeGestora.unidadeGestoraCodigoUnidadeGestora}`,
    unidadeGestoraResponsavelUnidadeGestora: `${dataUnidadeGestora.unidadeGestoraResponsavelUnidadeGestora}`,
    unidadeGestoraExercicioUltimaManifestacaoControleInterno: `${dataUnidadeGestora.unidadeGestoraExercicioUltimaManifestacaoControleInterno}`,
    unidadeGestoraOpiniaoPrestacaoContasControleInterno: `${
      dataUnidadeGestora.unidadeGestoraOpiniaoPrestacaoContasControleInterno ||
      ''
    }`,
  }

  const validationSchema = validationUnidadeGestora.validationSchema

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,

    onSubmit: () => {
      saveUnidadeGestora()
      
      const tab = buttonId === 'next' ? 2 : 0
      context.setValueTab(tab)
    },
  })

  // async function handleSelectUnidadeGestora(e: any) {

  //   const validate = await formik.validateForm(formik.values);

  //   if(Object.entries(validate).length > 0) {
  //     alert("Preencha todos os campos corretamente antes de alternar de registro.");
  //     formik.handleSubmit();
  //     context.setValueTab(1);
  //     return;
  //   }

  //   setSelectUnidadeGestora(e.target.value);
  //   console.log('Executa chamada a API');
  //   console.log(e.target.value);
  // }

  function getIdButton(e: any) {
  
    setButtonId(e.target.parentNode.id)
  }

  async function saveUnidadeGestora() {
    alert('Os dados da Unidade Gestora foram salvos.')

    await axios.put(
      `${baseAPI.URL}/forms/${context.formInfo.id}/unidades/${dataUnidadeGestora.id}`,
      formik.values,
      { headers: baseAPI.HEADERS(token) },
    )
  }

  return (
    <UnidadeGestoraStyle onSubmit={formik.handleSubmit}>
      <div data-header="headerForm">
        {/* <TextField
          fullWidth
          select
          inputProps={{ MenuProps: { disableScrollLock: true } }}
          id="unidadeGestora"
          name="unidadeGestora"
          value={selectUnidadeGestora}
          label="Unidade Gestora"
          onChange={handleSelectUnidadeGestora}
        >
          <MenuItem value={1}>Unidade Gestora-001</MenuItem>
          <MenuItem value={2}>Unidade Gestora-002</MenuItem>
        </TextField> */}

        <div data-button="save">
          <Button variant="contained" onClick={saveUnidadeGestora}>
            Salvar
          </Button>
        </div>
      </div>

      <legend>Informações de Controle Interno - Unidade Gestora</legend>

      <TextField
        variant="outlined"
        fullWidth
        id="unidadeGestoraIdNumRegistro"
        label="Identificação do Número do Registro"
        name="unidadeGestoraIdNumRegistro"
        value={formik.values.unidadeGestoraIdNumRegistro}
        onChange={formik.handleChange}
        error={
          formik.touched.unidadeGestoraIdNumRegistro &&
          Boolean(formik.errors.unidadeGestoraIdNumRegistro)
        }
        helperText={
          formik.touched.unidadeGestoraIdNumRegistro &&
          formik.errors.unidadeGestoraIdNumRegistro
        }
      />

      <TextField
        fullWidth
        select
        inputProps={{ MenuProps: { disableScrollLock: true } }}
        id="unidadeGestoraNivelControleInterno"
        name="unidadeGestoraNivelControleInterno"
        value={formik.values.unidadeGestoraNivelControleInterno}
        label="Nível de Controle Interno"
        onChange={formik.handleChange}
        error={
          formik.touched.unidadeGestoraNivelControleInterno &&
          Boolean(formik.errors.unidadeGestoraNivelControleInterno)
        }
        helperText={
          formik.touched.unidadeGestoraNivelControleInterno &&
          formik.errors.unidadeGestoraNivelControleInterno
        }
      >
        <MenuItem value={1}>1 – Unidade Central </MenuItem>
        <MenuItem value={2}>2 – Unidade Setorial</MenuItem>
      </TextField>

      <TextField
        variant="outlined"
        fullWidth
        id="unidadeGestoraCodigoUnidadeGestora"
        label="Código da unidade Gestora em que os procedimentos foram aplicados"
        name="unidadeGestoraCodigoUnidadeGestora"
        value={formik.values.unidadeGestoraCodigoUnidadeGestora}
        onChange={formik.handleChange}
        error={
          formik.touched.unidadeGestoraCodigoUnidadeGestora &&
          Boolean(formik.errors.unidadeGestoraCodigoUnidadeGestora)
        }
        helperText={
          formik.touched.unidadeGestoraCodigoUnidadeGestora &&
          formik.errors.unidadeGestoraCodigoUnidadeGestora
        }
      />

      <TextField
        variant="outlined"
        fullWidth
        id="unidadeGestoraResponsavelUnidadeGestora"
        label="Responsável pela Unidade Gestora"
        name="unidadeGestoraResponsavelUnidadeGestora"
        value={formik.values.unidadeGestoraResponsavelUnidadeGestora}
        onChange={formik.handleChange}
        error={
          formik.touched.unidadeGestoraResponsavelUnidadeGestora &&
          Boolean(formik.errors.unidadeGestoraResponsavelUnidadeGestora)
        }
        helperText={
          formik.touched.unidadeGestoraResponsavelUnidadeGestora &&
          formik.errors.unidadeGestoraResponsavelUnidadeGestora
        }
      />

      <TextField
        variant="outlined"
        fullWidth
        id="unidadeGestoraExercicioUltimaManifestacaoControleInterno"
        label="Exercício da Última Manifestação do Controle Interno"
        name="unidadeGestoraExercicioUltimaManifestacaoControleInterno"
        value={
          formik.values.unidadeGestoraExercicioUltimaManifestacaoControleInterno
        }
        onChange={formik.handleChange}
        error={
          formik.touched
            .unidadeGestoraExercicioUltimaManifestacaoControleInterno &&
          Boolean(
            formik.errors
              .unidadeGestoraExercicioUltimaManifestacaoControleInterno,
          )
        }
        helperText={
          formik.touched
            .unidadeGestoraExercicioUltimaManifestacaoControleInterno &&
          formik.errors.unidadeGestoraExercicioUltimaManifestacaoControleInterno
        }
      />

      <TextField
        fullWidth
        select
        inputProps={{ MenuProps: { disableScrollLock: true } }}
        id="unidadeGestoraOpiniaoPrestacaoContasControleInterno"
        name="unidadeGestoraOpiniaoPrestacaoContasControleInterno"
        value={
          formik.values.unidadeGestoraOpiniaoPrestacaoContasControleInterno
        }
        label="Opinião do Controle Interno sobre os procedimentos aplicados"
        onChange={formik.handleChange}
        error={
          formik.touched.unidadeGestoraOpiniaoPrestacaoContasControleInterno &&
          Boolean(
            formik.errors.unidadeGestoraOpiniaoPrestacaoContasControleInterno,
          )
        }
        helperText={
          formik.touched.unidadeGestoraOpiniaoPrestacaoContasControleInterno &&
          formik.errors.unidadeGestoraOpiniaoPrestacaoContasControleInterno
        }
      >
        <MenuItem value={1}>1 - Regular</MenuItem>
        <MenuItem value={2}>2 - Regular com ressalva</MenuItem>
        <MenuItem value={3}>3 - Irregular</MenuItem>
        <MenuItem value={4}>4 - Não foi emitida opinião</MenuItem>
      </TextField>

      <div data-button="next-previous">
        <IconButton
          title="Anterior"
          aria-label="Formulário anterior."
          type="submit"
          id="previous"
          onClick={getIdButton}
        >
          <ArrowCircleLeftIcon  id="previous"/>
        </IconButton>

        <IconButton
          title="Próximo"
          aria-label="Próximo formulário."
          type="submit"
          id="next"
          onClick={getIdButton}
        >
          <ArrowCircleRightIcon id="next"/>
        </IconButton>
      </div>
    </UnidadeGestoraStyle>
  )
}
