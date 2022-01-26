import { useFormik } from "formik";
import * as yup from "yup";

import { Button, MenuItem, TextField } from '@mui/material'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalStorage'
import { InputUGStyle } from './style'
import { useNavigate } from "react-router-dom";

interface ValuesProps {
  formId :string,
}

export const InputUG = () => {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();

  const validationSchema = yup.object({
    formId: yup
      .string()
      .required("Selecione uma UG")
  });

  const formik = useFormik({
    initialValues: {
      formId:"",
    },
    validationSchema: validationSchema,
    onSubmit: (values:ValuesProps) => {
     
     context.setFormId(values.formId);
     navigate('/form')

    },
  });

  return (
    <InputUGStyle>
      <div data-input="select-container">
        <h2>Selecione a UG que deseja incluir as informações:</h2>
        <form noValidate onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            select
            inputProps={{ MenuProps: { disableScrollLock: true } }}
            id="formId"
            name="formId"
            label="Unidade(s) Gestora(s)"
            value={formik.values.formId}
            onChange={formik.handleChange}
            error={formik.touched.formId && Boolean(formik.errors.formId)}
            helperText={formik.touched.formId && formik.errors.formId}
            
          >
            
            <MenuItem value={"1"}>SECONT</MenuItem>
            <MenuItem value={"2"}>SESA</MenuItem>
            <MenuItem value={"3"}>SEGER</MenuItem>
          </TextField>

          <Button type="submit" fullWidth variant="contained" color="primary">
            Acessar Formulário
          </Button>
        </form>
      </div>
    </InputUGStyle>
  )
}
