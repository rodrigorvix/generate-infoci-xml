import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";

import { useFormik } from "formik";

import { EstruturaInicial } from "../EstruturaInicial";
import { UnidadeGestora } from '../UnidadeGestora';

import validationEstruturaInicial from "../../utils/validationEstruturaInicial";
import validationUnidadeGestora from "../../utils/validationUnidadeGestora"
import validationProcedimentos from "../../utils/validationProcedimentos"
import validationTomadaContasEspecial from "../../utils/validationTomadaContasEspecial"

import { FormInfociStyle } from "./style";
import { Procedimentos } from '../Procedimentos';
import { TomadaContasEspecial } from '../TomadaContasEspecial';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const FormInfoci = () => {

  const [value, setValue] = React.useState(0);
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const initialValues = {...validationEstruturaInicial.initialValues,
    ...validationUnidadeGestora.initialValues, 
  ...validationProcedimentos.initialValues,
...validationTomadaContasEspecial.initialValues}
  
  const validationSchema  = validationEstruturaInicial.validationSchema
    .concat(validationUnidadeGestora.validationSchema)
    .concat(validationProcedimentos.validationSchema)
    .concat(validationTomadaContasEspecial.validationSchema)

  const formik = useFormik({
    initialValues: initialValues,

    validationSchema:validationSchema,

    onSubmit: (values: any) => {
      console.log(values);
    },
  });

  return (
    <FormInfociStyle noValidate onSubmit={formik.handleSubmit}>

      <Box sx={{ width: '100%',}} >
      <Box 
          sx={{ borderBottom: 1}}
          style={{background:"var(--blue-300)"}}
          >
        <Tabs 
         
          value={value} 
          onChange={handleChange} 
          aria-label="basic tabs example" 
          centered
          variant="fullWidth"
          TabIndicatorProps={{ style: { background: "#FFF"} }}
          >
          <Tab  
            style={{color:"white", fontWeight:'bold'}} 
            label="Estrutura Inicial" 
            {...a11yProps(0)} 
            />
          <Tab  
            style={{color:"white", fontWeight:'bold'}} 
            label="Unidade Gestora" 
            {...a11yProps(1)} 
            />
          <Tab  
            style={{color:"white", fontWeight:'bold'}} 
            label="Procedimentos" 
            {...a11yProps(2)} 
            />
          <Tab  
            style={{color:"white", fontWeight:'bold'}} 
            label="Tomada Contas Especial" 
            {...a11yProps(3)} 
            />
         
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <EstruturaInicial formik={formik} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UnidadeGestora formik={formik}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Procedimentos formik={formik}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TomadaContasEspecial formik={formik}/>
      </TabPanel>
    </Box>

    <div data-button="button">
      <Button 
        type="submit"
        variant="contained" 
       
      >
        GERAR XML
      </Button>
    </div>
      
    </FormInfociStyle>
  );
};
