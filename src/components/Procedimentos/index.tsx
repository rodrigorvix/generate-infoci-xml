import { useFormik } from 'formik';

import { TextField, MenuItem, Button } from "@mui/material";

import validationProcedimentos from '../../utils/validationProcedimentos';
import { ProcedimentosStyle } from "./style";
import { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalStorage';
import { useNavigate } from 'react-router-dom';

export const Procedimentos = () => {

  const context = useContext(GlobalContext);
  const navigate = useNavigate();

  const [buttonId, setButtonId] = useState("");
  const [selectProcedimento, setSelectProcedimento] = useState(1);

  const initialValues = {
    
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

  }
  const validationSchema = validationProcedimentos.validationSchema;

  const formik = useFormik({
    initialValues: initialValues,

    validationSchema: validationSchema,

    onSubmit: (values, { resetForm }) => {
     console.log("Procedimento válido.");
     console.log("Salvando.");

     const newProcedimento = window.confirm("Deseja preencher outro Procedimento ?");
     
     if (newProcedimento) {
       console.log("Gerando um procedimento vazio...")
       return ;
     }

     const tomadaContasExist = window.confirm("Deseja incluir alguma Tomada de Contas Especial ?");
      
     const tab = buttonId === "next" ? 3 : 1;
     
     if(!tomadaContasExist) {
       const navigateUnidadeGestora = window.confirm("Deseja incluir informações de outra Unidade Gestora ?");

       if(navigateUnidadeGestora) {
          navigate('/select_ug');
          context.setValueTab(0);
          return;
       }
       console.log("Ir para a geração de XML.")
       context.setValueTab(4);
       return;
     }
     context.setValueTab(tab);
    
    },
  });

  async function handleSelectProcedimento(e: any) {
    const validate = await formik.validateForm(formik.values);

    if(Object.entries(validate).length > 0) {
      alert("Preencha todos os campos corretamente antes de alternar de registro.");
      formik.handleSubmit();
      context.setValueTab(2);
      return;
    }
    
    setSelectProcedimento(e.target.value);
    console.log('Executa chamada a API');
    // console.log(e.target.value);
  }

  function getIdButton(e: any) {
    setButtonId(e.target.id);
  }

  function saveProcedimento() {
    console.log("Salvando...")
  }
  return (
    <ProcedimentosStyle onSubmit={formik.handleSubmit}>

<div data-header="headerForm">
       
       <TextField
        fullWidth
        select
        inputProps={{ MenuProps: { disableScrollLock: true } }}
        id="procedimento"
        name="procedimento"
        value={selectProcedimento}
        label="Procedimento(s)"
        onChange={handleSelectProcedimento}
      >
        <MenuItem value={1}>Procedimento-001 </MenuItem>
        <MenuItem value={2}>Procedimento-002</MenuItem>
      </TextField>

       <div data-button="save">
        <Button variant="contained" onClick={saveProcedimento}>
            Salvar
          </Button>
        </div>

       </div>

      <legend>Informações de Controle Interno - Procedimentos</legend>

      <TextField
        variant="outlined"
        fullWidth
        id="procedimentosIdNumRegistro"
        label="Identificação do Número do Registro"
        name="procedimentosIdNumRegistro"
        value={formik.values.procedimentosIdNumRegistro}
        onChange={formik.handleChange}
        error={
          formik.touched.procedimentosIdNumRegistro &&
          Boolean(formik.errors.procedimentosIdNumRegistro)
        }
        helperText={
          formik.touched.procedimentosIdNumRegistro &&
          formik.errors.procedimentosIdNumRegistro
        }
      />

      <TextField
        fullWidth
        select
        inputProps={{ MenuProps: { disableScrollLock: true } }}
        id="procedimentosNivelControleInterno"
        name="procedimentosNivelControleInterno"
        value={formik.values.procedimentosNivelControleInterno}
        label="Nível de Controle Interno"
        onChange={formik.handleChange}
        error={
          formik.touched.procedimentosNivelControleInterno &&
          Boolean(formik.errors.procedimentosNivelControleInterno)
        }
        helperText={
          formik.touched.procedimentosNivelControleInterno &&
          formik.errors.procedimentosNivelControleInterno
        }
      >
        <MenuItem value={1}>1 – Unidade Central </MenuItem>
        <MenuItem value={2}>2 – Unidade Setorial</MenuItem>
      </TextField>

      <TextField
        variant="outlined"
        fullWidth
        id="procedimentosCodigoUnidadeGestora"
        label="Código da Unidade Gestora em que os procedimentos foram aplicados"
        name="procedimentosCodigoUnidadeGestora"
        value={formik.values.procedimentosCodigoUnidadeGestora}
        onChange={formik.handleChange}
        error={
          formik.touched.procedimentosCodigoUnidadeGestora &&
          Boolean(formik.errors.procedimentosCodigoUnidadeGestora)
        }
        helperText={
          formik.touched.procedimentosCodigoUnidadeGestora &&
          formik.errors.procedimentosCodigoUnidadeGestora
        }
      />

      <TextField
        variant="outlined"
        fullWidth
        id="procedimentosCodigoProcedimento"
        label="Código do Procedimento (Tabela Referencial 1 / IN 68 de 2020)"
        name="procedimentosCodigoProcedimento"
        value={formik.values.procedimentosCodigoProcedimento}
        onChange={formik.handleChange}
        error={
          formik.touched.procedimentosCodigoProcedimento &&
          Boolean(formik.errors.procedimentosCodigoProcedimento)
        }
        helperText={
          formik.touched.procedimentosCodigoProcedimento &&
          formik.errors.procedimentosCodigoProcedimento
        }
      />

      

      <TextField
        fullWidth
        select
        inputProps={{ MenuProps: { disableScrollLock: true } }}
        id="procedimentosTipoPontoControle"
        name="procedimentosTipoPontoControle"
        value={formik.values.procedimentosTipoPontoControle}
        label="Tipo do Ponto de Controle"
        onChange={formik.handleChange}
        error={
          formik.touched.procedimentosTipoPontoControle &&
          Boolean(formik.errors.procedimentosTipoPontoControle)
        }
        helperText={
          formik.touched.procedimentosTipoPontoControle &&
          formik.errors.procedimentosTipoPontoControle
        }
      >
        <MenuItem value={1}>1 - Quantitativo (se mensurável quantitativamente)</MenuItem>
        <MenuItem value={2}>
        2 - Qualitativo (se não mensurável quantitativamente)
        </MenuItem>
        
      </TextField>

      <TextField
        variant="outlined"
        fullWidth
        id="procedimentosUniversoAnalisado"
        label="Universo do Ponto de Controle Analisado"
        name="procedimentosUniversoAnalisado"
        value={formik.values.procedimentosUniversoAnalisado}
        onChange={formik.handleChange}
        error={
          formik.touched.procedimentosUniversoAnalisado &&
          Boolean(formik.errors.procedimentosUniversoAnalisado)
        }
        helperText={
          formik.touched.procedimentosUniversoAnalisado &&
          formik.errors.procedimentosUniversoAnalisado
        }
      />

<TextField
        variant="outlined"
        fullWidth
        id="procedimentosAmostraSelecionada"
        label="Amostra Selecionada do Ponto de Controle Analisado"
        name="procedimentosAmostraSelecionada"
        value={formik.values.procedimentosAmostraSelecionada}
        onChange={formik.handleChange}
        error={
          formik.touched.procedimentosAmostraSelecionada &&
          Boolean(formik.errors.procedimentosAmostraSelecionada)
        }
        helperText={
          formik.touched.procedimentosAmostraSelecionada &&
          formik.errors.procedimentosAmostraSelecionada
        }
      />
      <TextField
        variant="outlined"
        fullWidth
        id="procedimentosDescricaoAnalise"
        label="Descrição da Análise"
        name="procedimentosDescricaoAnalise"
        value={formik.values.procedimentosDescricaoAnalise}
        onChange={formik.handleChange}
        error={
          formik.touched.procedimentosDescricaoAnalise &&
          Boolean(formik.errors.procedimentosDescricaoAnalise)
        }
        helperText={
          formik.touched.procedimentosDescricaoAnalise &&
          formik.errors.procedimentosDescricaoAnalise
        }
      />

<TextField
        fullWidth
        select
        inputProps={{ MenuProps: { disableScrollLock: true } }}
        id="procedimentosTipoProcedimentoAnalisado"
        name="procedimentosTipoProcedimentoAnalisado"
        value={formik.values.procedimentosTipoProcedimentoAnalisado}
        label="Tipo de Procedimento Aplicado"
        onChange={formik.handleChange}
        error={
          formik.touched.procedimentosTipoProcedimentoAnalisado &&
          Boolean(formik.errors.procedimentosTipoProcedimentoAnalisado)
        }
        helperText={
          formik.touched.procedimentosTipoProcedimentoAnalisado &&
          formik.errors.procedimentosTipoProcedimentoAnalisado
        }
      >
        <MenuItem value={1}>1 – Auditoria de conformidade </MenuItem>
        <MenuItem value={2}>2 – Auditoria financeira</MenuItem>
        <MenuItem value={3}>3 – Auditoria operacional</MenuItem>
        <MenuItem value={4}>4 – Analise documental</MenuItem>
        <MenuItem value={5}>5 – Conciliações de demonstrativos</MenuItem>
        <MenuItem value={6}>6 – Circularização</MenuItem>
        <MenuItem value={7}>7 – Revisão Analítica</MenuItem>
        <MenuItem value={8}>8 – Testes Substantivos</MenuItem>
        <MenuItem value={9}>9 – Testes de Controle</MenuItem>
        <MenuItem value={10}>10 – Inspeção Física</MenuItem>
        <MenuItem value={11}>11 – Observação Direta</MenuItem>
        <MenuItem value={12}>12 – Indagação</MenuItem>
        <MenuItem value={13}>13 – Confirmação Extrema</MenuItem>
        <MenuItem value={14}>14 – Recálculo</MenuItem>
        <MenuItem value={15}>15 – Reexecução</MenuItem>
        <MenuItem value={16}>16 – Outros</MenuItem>
      </TextField>

         
      <TextField
        fullWidth
        select
        inputProps={{ MenuProps: { disableScrollLock: true } }}
        id="procedimentosSituacaoAnalise"
        name="procedimentosSituacaoAnalise"
        value={formik.values.procedimentosSituacaoAnalise}
        label="Situação da Análise"
        onChange={formik.handleChange}
        error={
          formik.touched.procedimentosSituacaoAnalise &&
          Boolean(formik.errors.procedimentosSituacaoAnalise)
        }
        helperText={
          formik.touched.procedimentosSituacaoAnalise &&
          formik.errors.procedimentosSituacaoAnalise
        }
      >
        <MenuItem value={1}>1 - Procedimento aplicado sem detecção de distorções</MenuItem>
        <MenuItem value={2}>
        2 - Procedimento aplicado sem detecção de distorções relevantes, constatando oportunidades de melhorias do controle
        </MenuItem>
        <MenuItem value={3}>
        3 - Procedimento aplicado com constatação de distorções que ensejam risco grave e necessidade de correções.
        </MenuItem>
        
      </TextField>  
      
      <div data-button="next-previous">
          <Button variant="contained" type="submit" id="previous" onClick={getIdButton}>
            Anterior
          </Button>

          <Button variant="contained" type="submit" id="next"  onClick={getIdButton} >
            Próximo
          </Button>
      </div>
    </ProcedimentosStyle>
  );
};
