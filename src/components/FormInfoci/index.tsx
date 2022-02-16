import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';

import { EstruturaInicial } from '../EstruturaInicial'
import { UnidadeGestora } from '../UnidadeGestora'

import { FormInfociStyle } from './style'
import { Procedimentos } from '../Procedimentos'
import { TomadaContasEspecial } from '../TomadaContasEspecial'

import { GlobalContext } from '../../context/GlobalStorage'
import { GenerateXML } from '../GenerateXML'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
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
  // const theme = useTheme();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    context.setValueTab(newValue)
  }

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
        <Box sx={{ borderBottom: 1 }} style={{ background: 'var(--blue-300)' }} data-tab="tab">
          <Tabs
            // value={value}
            value={context.valueTab}
            onChange={handleChange}
            aria-label="selecione os formularios"
            centered
            variant="fullWidth"
            TabIndicatorProps={{ style: { background: '#FFF' } }}
          >
            <Tab
              style={{ color: 'white', flexDirection:'row'}}
              label={<><LooksOneIcon style={{verticalAlign:'middle', marginRight:'0.25rem'}}/> <span style={{fontWeight: 'bold',fontSize:'0.88rem'}}>Estrutura Inicial</span></>}
              {...a11yProps(0)}
            />
            <Tab
              style={{ color: 'white',  flexDirection:'row' }}
              label={<><LooksTwoIcon style={{verticalAlign:'middle', marginRight:'0.25rem'}}/> <span style={{fontWeight: 'bold',fontSize:'0.88rem'}}>Unidade Gestora</span></>}
              disabled
              {...a11yProps(1)}
            />
            <Tab
              style={{ color: 'white',  flexDirection:'row' }}
              label={<><Looks3Icon style={{verticalAlign:'middle', marginRight:'0.25rem'}}/> <span style={{fontWeight: 'bold',fontSize:'0.88rem'}}>Procedimentos</span></>}
              disabled
              {...a11yProps(2)}
            />
            <Tab
              style={{ color: 'white',  flexDirection:'row' }}
              label={<><Looks4Icon style={{verticalAlign:'middle', marginRight:'0.25rem'}}/> <span style={{fontWeight: 'bold',fontSize:'0.88rem'}}>Tomada de Contas</span></>}
              disabled
              {...a11yProps(3)}
            />
            <Tab
              style={{ color: 'white',  flexDirection:'row'}}
              label={<><Looks5Icon style={{verticalAlign:'middle', marginRight:'0.25rem'}}/> <span style={{fontWeight: 'bold',fontSize:'0.88rem'}}>Gerar XML</span></>}
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
