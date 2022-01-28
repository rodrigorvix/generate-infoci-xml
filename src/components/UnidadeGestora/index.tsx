import { useFormik } from 'formik'

import { TextField, MenuItem, Button } from '@mui/material'

import { UnidadeGestoraStyle } from './style'
import validationUnidadeGestora from '../../utils/validationUnidadeGestora'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalStorage'

export const UnidadeGestora = (props: any) => {
  const context = useContext(GlobalContext)
  const [buttonId, setButtonId] = useState('')
  const [selectUnidadeGestora, setSelectUnidadeGestora] = useState(1)

  const initialValues = {
    unidadeGestoraIdNumRegistro: ``,
    unidadeGestoraNivelControleInterno: ``,
    unidadeGestoraCodigoUnidadeGestora: ``,
    unidadeGestoraResponsavelUnidadeGestora: ``,
    unidadeGestoraExercicioUltimaManifestacaoControleInterno: ``,
    unidadeGestoraOpiniaoPrestacaoContasControleInterno: ``,
  }

  const validationSchema = validationUnidadeGestora.validationSchema

  const formik = useFormik({
    initialValues: initialValues,

    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('Unidade gestora válida.')
      console.log('Salvando...')

      const tab = buttonId === 'next' ? 2 : 0
      context.setValueTab(tab)
    },
  });

  async function handleSelectUnidadeGestora(e: any) {
  
    const validate = await formik.validateForm(formik.values);

    if(Object.entries(validate).length > 0) {
      alert("Preencha todos os campos corretamente antes de alternar de registro.");
      formik.handleSubmit();
      context.setValueTab(1);
      return;
    }
    
    setSelectUnidadeGestora(e.target.value);
    console.log('Executa chamada a API');
    // console.log(e.target.value);
  }

  function getIdButton(e: any) {
    setButtonId(e.target.id)
  }

  function saveUnidadeGestora() {
    console.log('Salvando...')
  }

  return (
    <UnidadeGestoraStyle onSubmit={formik.handleSubmit}>
      <div data-header="headerForm">
        <TextField
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
        </TextField>

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
        <Button
          variant="contained"
          type="submit"
          id="previous"
          onClick={getIdButton}
        >
          Anterior
        </Button>

        <Button
          variant="contained"
          type="submit"
          id="next"
          onClick={getIdButton}
        >
          Próximo
        </Button>
      </div>
    </UnidadeGestoraStyle>
  )
}
