import { useFormik } from 'formik';

import { Button } from "@mui/material";
import { TextField, MenuItem} from "@mui/material";

import { EstruturaInicialStyle } from "./style";
import validationEstruturaInicial from '../../utils/validationEstruturaInicial';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalStorage';
import axios from 'axios';
import baseAPI from '../../utils/baseAPI';
import { useNavigate } from 'react-router-dom';


export const EstruturaInicial = (props: any) => {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem('app-token');

    if(!context.formInfo.id) {

      navigate('/select_ug');
      return;
    }

    requestAPI();

    async function requestAPI () {
      const responseGet = await axios.get(`${baseAPI.URL}/forms/${context.formInfo.id}/estruturas`, { headers: baseAPI.HEADERS(token)});
      const  dataGet  = responseGet.data;

      console.log(dataGet);
     
      if(!dataGet.length) {
        console.log(token);
        await axios.post(`${baseAPI.URL}/forms/${context.formInfo.id}/estruturas`,undefined,{ headers: baseAPI.HEADERS(token)});
      }
    }

  },[])

  
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
    
  }

  const validationSchema = validationEstruturaInicial.validationSchema;

  const formik = useFormik({
    initialValues: initialValues,

    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
    console.log("Estrutura inicial válida.");
    console.log("Salvando...")
    context.setValueTab(1);
    },
  });

  function saveEstruturaInicial() {
    console.log("Salvando...")
  }


  return (
    <EstruturaInicialStyle onSubmit={formik.handleSubmit}>
     
        <div data-button="right">
        <Button variant="contained" onClick={saveEstruturaInicial}>
            Salvar
          </Button>
        </div>

        <legend>Informações de Controle Interno - Estrutura Inicial</legend>
       
        <TextField
        variant="outlined"
        fullWidth
        id="estruturaInicialIdNumRegistro"
        label="Identificação do Número do Registro"
        name="estruturaInicialIdNumRegistro"
        value={formik.values.estruturaInicialIdNumRegistro}
        onChange={formik.handleChange}
        error={formik.touched.estruturaInicialIdNumRegistro && Boolean(formik.errors.estruturaInicialIdNumRegistro)}
        helperText={formik.touched.estruturaInicialIdNumRegistro && formik.errors.estruturaInicialIdNumRegistro}
      />

        <TextField
          fullWidth
          select
          inputProps={{MenuProps: {disableScrollLock: true}}}
          id="estruturaInicialNivelControleInterno"
          name="estruturaInicialNivelControleInterno"
          value={formik.values.estruturaInicialNivelControleInterno}
          label="Nível de Controle Interno"
          onChange={formik.handleChange}
          error={formik.touched.estruturaInicialNivelControleInterno && Boolean(formik.errors.estruturaInicialNivelControleInterno)}
          helperText={formik.touched.estruturaInicialNivelControleInterno && formik.errors.estruturaInicialNivelControleInterno}
        >
          <MenuItem value={1}>1 – Unidade Central </MenuItem>
          <MenuItem value={2}>2 – Unidade Setorial</MenuItem>
      
        </TextField> 
      
        <TextField
        variant="outlined"
        fullWidth
        id="estruturaInicialQuantidadeTotalServidores"
        label="Quantidade Total de Servidores na Estrutura
        da Unidade de Controle Interno"
        name="estruturaInicialQuantidadeTotalServidores"
        value={formik.values.estruturaInicialQuantidadeTotalServidores}
        onChange={formik.handleChange}
        error={formik.touched.estruturaInicialQuantidadeTotalServidores && Boolean(formik.errors.estruturaInicialQuantidadeTotalServidores)}
        helperText={formik.touched.estruturaInicialQuantidadeTotalServidores && formik.errors.estruturaInicialQuantidadeTotalServidores}
      />

<TextField
        variant="outlined"
        fullWidth
        id="estruturaInicialQuantidadeServidoresEfetivos"
        label="Quantidade de Servidores Efetivos (do Ente)
        na Estrutura da Unidade de Controle Interno"
        name="estruturaInicialQuantidadeServidoresEfetivos"
        value={formik.values.estruturaInicialQuantidadeServidoresEfetivos}
        onChange={formik.handleChange}
        error={formik.touched.estruturaInicialQuantidadeServidoresEfetivos && Boolean(formik.errors.estruturaInicialQuantidadeServidoresEfetivos)}
        helperText={formik.touched.estruturaInicialQuantidadeServidoresEfetivos && formik.errors.estruturaInicialQuantidadeServidoresEfetivos}
      />
    <TextField
        variant="outlined"
        fullWidth
        id="estruturaInicialQuantidadeContadores"
        label="Quantidade de Servidores com formação em
        Ciências Contábeis na Estrutura da Unidade
        de Controle Interno"
        name="estruturaInicialQuantidadeContadores"
        value={formik.values.estruturaInicialQuantidadeContadores}
        onChange={formik.handleChange}
        error={formik.touched.estruturaInicialQuantidadeContadores && Boolean(formik.errors.estruturaInicialQuantidadeContadores)}
        helperText={formik.touched.estruturaInicialQuantidadeContadores && formik.errors.estruturaInicialQuantidadeContadores}
      />

<TextField
          fullWidth
          select
          inputProps={{MenuProps: {disableScrollLock: true}}}
          id="estruturaInicialNormaInternaGestaoOrcamentaria"
          name="estruturaInicialNormaInternaGestaoOrcamentaria"
          value={formik.values.estruturaInicialNormaInternaGestaoOrcamentaria}
          label="Normas internas estabelecendo procedimentos Orçamentária
          para avaliação da Gestão"
          onChange={formik.handleChange}
          error={formik.touched.estruturaInicialNormaInternaGestaoOrcamentaria && Boolean(formik.errors.estruturaInicialNormaInternaGestaoOrcamentaria)}
          helperText={formik.touched.estruturaInicialNormaInternaGestaoOrcamentaria && formik.errors.estruturaInicialNormaInternaGestaoOrcamentaria}
        >
      
          <MenuItem value={1}>1 - Existem somente os normativos</MenuItem>
          <MenuItem value={2}>2 - Existem normativos e fluxos desenhados</MenuItem>
          <MenuItem value={3}>3 - Existem normativos, fluxos e são de amplo conhecimento
de toda a administração</MenuItem>
          <MenuItem value={4}>4 - Não existem normas internas definidas no âmbito desta temática</MenuItem>
        </TextField>
        
        <TextField
          fullWidth
          select
          inputProps={{MenuProps: {disableScrollLock: true}}}
          id="estruturaInicialNormaInternaGestaoFinanceira"
          name="estruturaInicialNormaInternaGestaoFinanceira"
          value={formik.values.estruturaInicialNormaInternaGestaoFinanceira}
          label="Normas internas estabelecendo procedimentos para avaliação da Gestão Financeira"
          onChange={formik.handleChange}
          error={formik.touched.estruturaInicialNormaInternaGestaoFinanceira && Boolean(formik.errors.estruturaInicialNormaInternaGestaoFinanceira)}
          helperText={formik.touched.estruturaInicialNormaInternaGestaoFinanceira && formik.errors.estruturaInicialNormaInternaGestaoFinanceira}
        >
          <MenuItem value={1}>1 - Existem somente os normativos</MenuItem>
          <MenuItem value={2}>2 - Existem normativos e fluxos desenhados</MenuItem>
          <MenuItem value={3}>3 - Existem normativos, fluxos e são de amplo conhecimento
de toda a administração</MenuItem>
          <MenuItem value={4}>4 - Não existem normas internas definidas no âmbito desta temática</MenuItem>
        </TextField>
        
        <TextField
          fullWidth
          select
          inputProps={{MenuProps: {disableScrollLock: true}}}
          id="estruturaInicialNormaInternaGestaoPatrimonial"
          name="estruturaInicialNormaInternaGestaoPatrimonial"
          value={formik.values.estruturaInicialNormaInternaGestaoPatrimonial}
          label="Normas internas estabelecendo procedimentos para avaliação da Gestão Patrimonial"
          onChange={formik.handleChange}
          error={formik.touched.estruturaInicialNormaInternaGestaoPatrimonial && Boolean(formik.errors.estruturaInicialNormaInternaGestaoPatrimonial)}
          helperText={formik.touched.estruturaInicialNormaInternaGestaoPatrimonial && formik.errors.estruturaInicialNormaInternaGestaoPatrimonial}
        >
      
          <MenuItem value={1}>1 - Existem somente os normativos</MenuItem>
          <MenuItem value={2}>2 - Existem normativos e fluxos desenhados</MenuItem>
          <MenuItem value={3}>3 - Existem normativos, fluxos e são de amplo conhecimento
de toda a administração</MenuItem>
          <MenuItem value={4}>4 - Não existem normas internas definidas no âmbito desta temática</MenuItem>
        </TextField>

        <TextField
          fullWidth
          select
          inputProps={{MenuProps: {disableScrollLock: true}}}
          id="estruturaInicialNormaInternaGestaoFiscal"
          name="estruturaInicialNormaInternaGestaoFiscal"
          value={formik.values.estruturaInicialNormaInternaGestaoFiscal}
          label="Normas internas estabelecendo procedimentos para avaliação da Gestão Fiscal"
          onChange={formik.handleChange}
          error={formik.touched.estruturaInicialNormaInternaGestaoFiscal && Boolean(formik.errors.estruturaInicialNormaInternaGestaoFiscal)}
          helperText={formik.touched.estruturaInicialNormaInternaGestaoFiscal && formik.errors.estruturaInicialNormaInternaGestaoFiscal}
        >
      
          <MenuItem value={1}>1 - Existem somente os normativos</MenuItem>
          <MenuItem value={2}>2 - Existem normativos e fluxos desenhados</MenuItem>
          <MenuItem value={3}>3 - Existem normativos, fluxos e são de amplo conhecimento
de toda a administração</MenuItem>
          <MenuItem value={4}>4 - Não existem normas internas definidas no âmbito desta temática</MenuItem>
        </TextField>

        <TextField
          fullWidth
          select
          inputProps={{MenuProps: {disableScrollLock: true} }}
          id="estruturaInicialNormaInternaDemContabeis"
          name="estruturaInicialNormaInternaDemContabeis"
          value={formik.values.estruturaInicialNormaInternaDemContabeis}
          label="Normas internas estabelecendo procedimentos para avaliação da conformidade da política e escrituração contábil, e elaboração das Demonstrações Contábeis"
          onChange={formik.handleChange}
          error={formik.touched.estruturaInicialNormaInternaDemContabeis && Boolean(formik.errors.estruturaInicialNormaInternaDemContabeis)}
          helperText={formik.touched.estruturaInicialNormaInternaDemContabeis && formik.errors.estruturaInicialNormaInternaDemContabeis}
        >
      
          <MenuItem value={1}>1 - Existem somente os normativos</MenuItem>
          <MenuItem value={2}>2 - Existem normativos e fluxos desenhados</MenuItem>
          <MenuItem value={3}>3 - Existem normativos, fluxos e são de amplo conhecimento
de toda a administração</MenuItem>
          <MenuItem value={4}>4 - Não existem normas internas definidas no âmbito desta temática</MenuItem>
        </TextField>
        
        <div data-button="right">
          <Button variant="contained" type='submit'>
            Próximo
          </Button>
        </div>

     
      </EstruturaInicialStyle>
  );
}