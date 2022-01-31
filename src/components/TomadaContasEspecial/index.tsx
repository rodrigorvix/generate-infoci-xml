import { useFormik } from 'formik';
import { TextField, MenuItem, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import validationTomadaContasEspecial from '../../utils/validationTomadaContasEspecial'
import { TomadaContasEspecialraStyle } from "./style";
import { GlobalContext } from '../../context/GlobalStorage';
import { ConfirmDialog } from '../ConfirmDialog';

export const TomadaContasEspecial = () => {

  const context = useContext(GlobalContext);
  const navigate = useNavigate();
  
  const [buttonId, setButtonId] = useState("");
  const [selectTomadaContas, setSelectTomadaContas] = useState(1);
  const [openDialogUnidadeGestora, setOpenDialogUnidadeGestora] = useState(false);

  function responseDialogUnidadeGestoraYes(){

    navigate('/select_ug');
    context.setValueTab(0);
    return;
  }

  function responseDialogUnidadeGestoraNo(){
    console.log("Ir para a geração de XML.")
    context.setValueTab(4);
    return;
  }

  const initialValues = {
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
  
  }
  const validationSchema = validationTomadaContasEspecial.validationSchema

  const formik = useFormik({
    initialValues: initialValues,

    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {

      if(buttonId === "previous") {
        context.setValueTab(2) ;
        return;
       }
  
      setOpenDialogUnidadeGestora(true);

     },
  });

  async function handleSelectTomadaContas(e: any) {
    const validate = await formik.validateForm(formik.values);

    if(Object.entries(validate).length > 0) {
      alert("Preencha todos os campos corretamente antes de alternar de registro.");
      formik.handleSubmit();
      context.setValueTab(3);
      return;
    }
    
    setSelectTomadaContas(e.target.value);
    console.log('Executa chamada a API');
    // console.log(e.target.value);
  }

   function getIdButton(e: any) {
     setButtonId(e.target.id);
   }

  function saveTomadaContas() {
    console.log("Salvando...")
  }

  return (
    <TomadaContasEspecialraStyle onSubmit={formik.handleSubmit}>

<div data-header="headerForm">
       
       <TextField
        fullWidth
        select
        inputProps={{ MenuProps: { disableScrollLock: true } }}
        id="tomadaContas"
        name="tomadaContas"
        value={selectTomadaContas}
        label="Tomada de Contas"
        onChange={handleSelectTomadaContas}
      >
        <MenuItem value={1}>Tomada de Contas-001 </MenuItem>
        <MenuItem value={2}>Tomada de Contas-002</MenuItem>
      </TextField>

       <div data-button="save">
        <Button variant="contained" onClick={saveTomadaContas}>
            Salvar
          </Button>
        </div>

       </div>
    <legend>Informações de Controle Interno - Tomada de Contas Especial</legend>

    <TextField
      variant="outlined"
      fullWidth
      id="tomadaContasEspecialIdNumRegistro"
      label="Identificação do Número do Registro"
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
    />

    <TextField
      variant="outlined"
      fullWidth
      id="tomadaContasEspecialCodigoUnidadeGestora"
      label="Código da Unidade Gestora em que as
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
    />

    <TextField
      variant="outlined"
      fullWidth
      id="tomadaContasEspecialProcesso"
      label="Número do Processo Administrativo da
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
      label="Fatos motivadores para a Instauração da
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
        1 - Omissão no dever de prestar contas ou a não comprovação da correta
        aplicação de recursos repassados mediante convênio, contrato de
        repasse, ou instrumento congênere;
      </MenuItem>
      <MenuItem value={2}>
        2 - Ocorrência de desfalque, alcance, desvio, desaparecimento de
        dinheiro, bens ou valores públicos;
      </MenuItem>
      <MenuItem value={3}>
        3 - Ocorrência de extravio, perda, subtração ou deterioração culposa
        ou dolosa de valores e bens;
      </MenuItem>
      <MenuItem value={4}>
        4 - Prática de ato ilegal, ilegítimo ou antieconômico de que resulte
        dano ao erário;
      </MenuItem>
      <MenuItem value={5}>
        5 - Concessão irregular de quaisquer benefícios fiscais ou de renúncia
        de receitas de que resulte dano ao erário.
      </MenuItem>
    </TextField>

    <TextField
      variant="outlined"
      fullWidth
      id="tomadaContasEspecialDataCiencia"
      label="Data do evento ou, quando desconhecida, da
      data da ciência do fato pela autoridade
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
      label="Data de Instauração da Tomada de Contas
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
      label="Valor Original do Débito"
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
      label="Situação da Tomada de Contas Especial em
      31 de dezembro do Exercício referência da
      Prestação de Contas Anual"
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
      <MenuItem value={1}>1 - Em instrução dentro do prazo;</MenuItem>
      <MenuItem value={2}>2 - Em instrução fora do prazo;</MenuItem>
      <MenuItem value={3}>
        3 - Em complementação de informações determinada pelo Tribunal de
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
      Débito"
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
        1 - Elisão da responsabilidade pelo dano inicialmente imputada ao
        responsável;
      </MenuItem>
      <MenuItem value={2}>2 - Ausência de comprovação do dano;</MenuItem>
      <MenuItem value={3}>
        3 - Arquivamento do processo por falta de pressupostos de instauração
        ou do seu desenvolvimento regular;
      </MenuItem>
      <MenuItem value={4}>
        4 - Contas consideradas iliquidáveis, nos termos do art. 90 da Lei
        Complementar Estadual n° 621/2012;
      </MenuItem>
      <MenuItem value={5}>
        5 - Quitação ao responsável pelo recolhimento do débito.
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

      <ConfirmDialog 
        open={openDialogUnidadeGestora} 
        setOpen={setOpenDialogUnidadeGestora} 
        titleMessage={"Deseja incluir informações de outra Unidade Gestora ?"}
        responseYes={responseDialogUnidadeGestoraYes}
        responseNo ={responseDialogUnidadeGestoraNo}
        />
  </TomadaContasEspecialraStyle>
  );
};
