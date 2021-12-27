
import { Button } from "@mui/material";
import { TextField, MenuItem} from "@mui/material";

import { EstruturaInicialStyle } from "./style";

export const EstruturaInicial = ({formik, setValue}:any) => {
  
  return (
    <EstruturaInicialStyle 
      id="EstruturaInicial">
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
        
        <div data-button="next">
          <Button variant="contained" onClick={() => setValue(1)}>
            Próximo
          </Button>
        </div>
        
      </EstruturaInicialStyle>
  );
}