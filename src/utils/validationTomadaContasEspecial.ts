import * as yup from "yup";

const  initialValues = {
 
  tomadaContasEspecialIdNumRegistro: "",
  tomadaContasEspecialCodigoUnidadeGestora:"",
  tomadaContasEspecialProcesso: "",
  tomadaContasEspecialAnoProcesso: "",
  tomadaContasEspecialFatoMotivo:"",
  tomadaContasEspecialDataCiencia: "",
  tomadaContasEspecialDataInstauracao:"",
  tomadaContasEspecialDataEnvioTribunalContas:"",
  tomadaContasEspecialValorDebito:"",
  tomadaContasEspecialSituacaoEm31do12:"",
  tomadaContasEspecialMotivoBaixaDebito:""
}

const validationSchema = yup.object({
  tomadaContasEspecialIdNumRegistro: yup
    .string()
    .required('O campo é obrigatório')
    .matches(/^[0-9]+$/, "Apenas números")
    .max(5, 'Máximo de 5 dígitos'),

    tomadaContasEspecialCodigoUnidadeGestora: yup
    .string()
    .required('O campo é obrigatório')
    .max(11, 'Máximo de 11 dígitos'),

    tomadaContasEspecialProcesso: yup
    .string()
    .required('O campo é obrigatório')
    .max(16, 'Máximo de 16 dígitos'),

    tomadaContasEspecialAnoProcesso: yup
    .number()
    .required('O campo é obrigatório')
    .max(4, 'É necessário ter 4 dígitos')
    .min(4, 'É necessário ter 4 dígitos'),

    tomadaContasEspecialFatoMotivo: yup
    .number()
    .required('O campo é obrigatório'),

    tomadaContasEspecialDataCiencia: yup
    .string()
    .required('O campo é obrigatório')
    .matches(/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/, "Apenas no formato AAAA-MM-DD"),

    tomadaContasEspecialDataInstauracao: yup
    .string()
    .required('O campo é obrigatório')
    .matches(/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/, "Apenas no formato AAAA-MM-DD"),

    tomadaContasEspecialDataEnvioTribunalContas: yup
    .string()
    .matches(/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/, "Apenas no formato AAAA-MM-DD"),

    tomadaContasEspecialValorDebito: yup
    .number()
    .required('O campo é obrigatório')
    .max(14, 'É necessário ter 4 dígitos'),
    
    tomadaContasEspecialSituacaoEm31do12: yup
    .number()
    .required('O campo é obrigatório'),

    tomadaContasEspecialMotivoBaixaDebito: yup
    .number()
    .required('O campo é obrigatório'),
});

const validationEstruturaInicial = {
  initialValues,
  validationSchema
}
export default validationEstruturaInicial;