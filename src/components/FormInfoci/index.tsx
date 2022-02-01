
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
import { GenerateXML } from '../GenerateXML'

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
  
  const context = React.useContext(GlobalContext);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    context.setValueTab(newValue)
  }

      // const xml = createSchemaINFOCIXML(values)
      // const filename = 'INFOCI.XML'
      // download(filename, xml)
      // resetForm();
 
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
              disabled
              {...a11yProps(2)}
            />
            <Tab
              style={{ color: 'white', fontWeight: 'bold' }}
              label="Tomada Contas Especial"
              disabled
              {...a11yProps(3)}
            />
            <Tab
              style={{ color: 'white', fontWeight: 'bold' }}
              label="Gerar XML"
              disabled
              {...a11yProps(4)}
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
          <Procedimentos />
        </TabPanel>
        <TabPanel value={context.valueTab} index={3}>
          <TomadaContasEspecial />
        </TabPanel>
        <TabPanel value={context.valueTab} index={4}>
          <GenerateXML />
        </TabPanel>
      </Box>
    </FormInfociStyle>
  )
}
