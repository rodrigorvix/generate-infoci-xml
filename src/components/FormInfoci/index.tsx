import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import { useFormik } from "formik";

import { EstruturaInicial } from "../EstruturaInicial";
import { UnidadeGestora } from "../UnidadeGestora";

import validationEstruturaInicial from "../../utils/validationEstruturaInicial";
import validationUnidadeGestora from "../../utils/validationUnidadeGestora";
import validationProcedimentos from "../../utils/validationProcedimentos";
import validationTomadaContasEspecial from "../../utils/validationTomadaContasEspecial";
import { createSchemaINFOCIXML } from "../../utils/functions/createSchemaINFOCIXML";
import { download } from "../../utils/functions/downloadXML";

import { FormInfociStyle } from "./style";
import { Procedimentos } from "../Procedimentos";
import { TomadaContasEspecial } from "../TomadaContasEspecial";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const FormInfoci = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const initialValues = {
    ...validationEstruturaInicial.initialValues,
    ...validationUnidadeGestora.initialValues,
    ...validationProcedimentos.initialValues,
    ...validationTomadaContasEspecial.initialValues,
  };

  const validationSchema = validationEstruturaInicial.validationSchema
    .concat(validationUnidadeGestora.validationSchema)
    .concat(validationProcedimentos.validationSchema)
    .concat(validationTomadaContasEspecial.validationSchema);

  const formik = useFormik({
    initialValues: initialValues,

    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
     
      const xml = createSchemaINFOCIXML(values);
      const filename = "INFOCI.XML";
      download(filename, xml);
      resetForm();
    },
  });

  React.useEffect(() => {
    if (!formik.isValid && formik.submitCount > 0) {
      alert(`Um ou mais campos dos formulários não foram preenchidos corretamente.`)
      console.log(formik.errors);
    }
  }, [formik.handleSubmit, formik.isValid, formik.submitCount, formik.errors]);

  return (
    <FormInfociStyle noValidate onSubmit={formik.handleSubmit}>

      <div data-form="description">
        <p>Preencha todos os campos do formulário abaixo e clique no botão <span>Próximo</span>.</p>
        <p>Após finalizar o preenchimento de todos os formulários clique no botão <span>Gerar XML</span> para realizar o download do arquivo <span>INFOCI.XML</span>.</p>
       
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1 }} style={{ background: "var(--blue-300)" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
            variant="fullWidth"
            TabIndicatorProps={{ style: { background: "#FFF" } }}
          >
            <Tab
              style={{ color: "white", fontWeight: "bold" }}
              label="Estrutura Inicial"
              {...a11yProps(0)}
            />
            <Tab
              style={{ color: "white", fontWeight: "bold" }}
              label="Unidade Gestora"
              {...a11yProps(1)}
            />
            <Tab
              style={{ color: "white", fontWeight: "bold" }}
              label="Procedimentos"
              {...a11yProps(2)}
            />
            <Tab
              style={{ color: "white", fontWeight: "bold" }}
              label="Tomada Contas Especial"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <EstruturaInicial formik={formik} setValue={setValue}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UnidadeGestora formik={formik} setValue={setValue}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Procedimentos formik={formik} setValue={setValue}/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TomadaContasEspecial formik={formik} setValue={setValue}/>
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
  );
};
