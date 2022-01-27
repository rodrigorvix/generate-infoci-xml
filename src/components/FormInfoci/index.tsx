
import axios, { AxiosError } from 'axios'
import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'

import { useFormik } from 'formik'

import { EstruturaInicial } from '../EstruturaInicial'
import { UnidadeGestora } from '../UnidadeGestora'

import validationEstruturaInicial from '../../utils/validationEstruturaInicial'
import validationUnidadeGestora from '../../utils/validationUnidadeGestora'
import validationProcedimentos from '../../utils/validationProcedimentos'
import validationTomadaContasEspecial from '../../utils/validationTomadaContasEspecial'
import { createSchemaINFOCIXML } from '../../utils/functions/createSchemaINFOCIXML'
import { download } from '../../utils/functions/downloadXML'

import { FormInfociStyle } from './style'
import { Procedimentos } from '../Procedimentos'
import { TomadaContasEspecial } from '../TomadaContasEspecial'
import { useLocation, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStorage'

interface PropsState {
  // createdAt: string
  // estruturaInicialIdNumRegistro: string
  // estruturaInicialNivelControleInterno: string
  // estruturaInicialNormaInternaDemContabeis: string
  // estruturaInicialNormaInternaGestaoFinanceira: string
  // estruturaInicialNormaInternaGestaoFiscal: string
  // estruturaInicialNormaInternaGestaoOrcamentaria: string
  // estruturaInicialNormaInternaGestaoPatrimonial: string
  // estruturaInicialQuantidadeContadores: string
  // estruturaInicialQuantidadeServidoresEfetivos: string
  // estruturaInicialQuantidadeTotalServidores: string
  // id: number
  procedimentosAmostraSelecionada: string
  procedimentosCodigoProcedimento: string
  procedimentosCodigoUnidadeGestora: string
  procedimentosDescricaoAnalise: string
  procedimentosIdNumRegistro: string
  procedimentosNivelControleInterno: string
  procedimentosSituacaoAnalise: string
  procedimentosTipoPontoControle: string
  procedimentosTipoProcedimentoAnalisado: string
  procedimentosUniversoAnalisado: string
  tomadaContasEspecialAnoProcesso: string
  tomadaContasEspecialCodigoUnidadeGestora: string
  tomadaContasEspecialDataCiencia: string
  tomadaContasEspecialDataEnvioTribunalContas: string
  tomadaContasEspecialDataInstauracao: string
  tomadaContasEspecialFatoMotivo: string
  tomadaContasEspecialIdNumRegistro: string
  tomadaContasEspecialMotivoBaixaDebito: string
  tomadaContasEspecialProcesso: string
  tomadaContasEspecialSituacaoEm31do12: string
  tomadaContasEspecialValorDebito: string
  unidadeGestoraCodigoUnidadeGestora: string
  unidadeGestoraExercicioUltimaManifestacaoControleInterno: string
  unidadeGestoraIdNumRegistro: string
  unidadeGestoraNivelControleInterno: string
  unidadeGestoraOpiniaoPrestacaoContasControleInterno: string
  unidadeGestoraResponsavelUnidadeGestora: string
  // updatedAt: string
  // user_id: number
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

interface RefProps {
  passandoParaOPai: () => void,
}


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export const FormInfoci = (props: any) => {
  
  const [value, setValue] = React.useState(0);

  const context = React.useContext(GlobalContext);

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue)
  // }
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    context.setValueTab(newValue)
  }

  const initialValues = {
    estruturaInicialIdNumRegistro: '',
    estruturaInicialNivelControleInterno: ``,
    estruturaInicialQuantidadeTotalServidores: ``,
    estruturaInicialQuantidadeServidoresEfetivos: ``,
    estruturaInicialQuantidadeContadores: ``,
    estruturaInicialNormaInternaGestaoOrcamentaria: ``,
    estruturaInicialNormaInternaGestaoFinanceira: ``,
    estruturaInicialNormaInternaGestaoPatrimonial: ``,
    estruturaInicialNormaInternaGestaoFiscal: ``,
    estruturaInicialNormaInternaDemContabeis: ``,
    procedimentosIdNumRegistro: ``,
    procedimentosNivelControleInterno: ``,
    procedimentosCodigoUnidadeGestora: ``,
    procedimentosCodigoProcedimento: ``,
    procedimentosTipoPontoControle: ``,
    procedimentosUniversoAnalisado: ``,
    procedimentosAmostraSelecionada: ``,
    procedimentosDescricaoAnalise: ``,
    procedimentosTipoProcedimentoAnalisado: ``,
    procedimentosSituacaoAnalise: ``,
    unidadeGestoraIdNumRegistro: ``,
    unidadeGestoraNivelControleInterno: ``,
    unidadeGestoraCodigoUnidadeGestora: ``,
    unidadeGestoraResponsavelUnidadeGestora: ``,
    unidadeGestoraExercicioUltimaManifestacaoControleInterno: ``,
    unidadeGestoraOpiniaoPrestacaoContasControleInterno: ``,
    tomadaContasEspecialIdNumRegistro: ``,
    tomadaContasEspecialCodigoUnidadeGestora: ``,
    tomadaContasEspecialProcesso: ``,
    tomadaContasEspecialAnoProcesso: ``,
    tomadaContasEspecialFatoMotivo: ``,
    tomadaContasEspecialDataCiencia: ``,
    tomadaContasEspecialDataInstauracao: ``,
    tomadaContasEspecialDataEnvioTribunalContas: ``,
    tomadaContasEspecialValorDebito: ``,
    tomadaContasEspecialSituacaoEm31do12: ``,
    tomadaContasEspecialMotivoBaixaDebito: ``,
    // ...validationEstruturaInicial.initialValues,
    // ...validationUnidadeGestora.initialValues,
    // ...validationProcedimentos.initialValues,
    // ...validationTomadaContasEspecial.initialValues,
  }

  const validationSchema = validationEstruturaInicial.validationSchema
    .concat(validationUnidadeGestora.validationSchema)
    .concat(validationProcedimentos.validationSchema)
    .concat(validationTomadaContasEspecial.validationSchema)

  const formik = useFormik({
    initialValues: initialValues,

    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const xml = createSchemaINFOCIXML(values)
      const filename = 'INFOCI.XML'
      download(filename, xml)
      resetForm()
    },
  })

  React.useEffect(() => {
    if (!formik.isValid && formik.submitCount > 0) {
      alert(
        `Um ou mais campos dos formulários não foram preenchidos corretamente.`,
      )
    }
  }, [formik.handleSubmit, formik.isValid, formik.submitCount, formik.errors])


  return (
    <FormInfociStyle >
      <div data-form="description">
        {/* <p>
          Preencha todos os campos do formulário abaixo e clique no botão{' '}
          <span>Próximo</span>.
        </p>
        <p>
          Após finalizar o preenchimento de todos os formulários clique no botão{' '}
          <span>Gerar XML</span> para realizar o download do arquivo{' '}
          <span>INFOCI.XML</span>.
        </p> */}
      </div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1 }} style={{ background: 'var(--blue-300)' }}>
          <Tabs
            // value={value}
            value={context.valueTab}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
            variant="fullWidth"
            TabIndicatorProps={{ style: { background: '#FFF' } }}
          >
            <Tab
              style={{ color: 'white', fontWeight: 'bold' }}
              label="Estrutura Inicial"
              {...a11yProps(0)}
            />
            <Tab
              style={{ color: 'white', fontWeight: 'bold' }}
              label="Unidade Gestora"
              disabled
              {...a11yProps(1)}
            />
            <Tab
              style={{ color: 'white', fontWeight: 'bold' }}
              label="Procedimentos"
              {...a11yProps(2)}
            />
            <Tab
              style={{ color: 'white', fontWeight: 'bold' }}
              label="Tomada Contas Especial"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <TabPanel value={context.valueTab} index={0}>
          <EstruturaInicial/>
        </TabPanel>
        <TabPanel value={context.valueTab} index={1} >
          <UnidadeGestora />
        </TabPanel>
        <TabPanel value={context.valueTab} index={2}>
          <Procedimentos formik={formik} setValue={setValue} />
        </TabPanel>
        <TabPanel value={context.valueTab} index={3}>
          <TomadaContasEspecial formik={formik} setValue={setValue} />
        </TabPanel>
      </Box>

      {value === 3 && (
        <div data-button="submit">
          <Button type="submit" variant="contained">
            GERAR XML
          </Button>
        </div>
      )}
    </FormInfociStyle>
  )
}
