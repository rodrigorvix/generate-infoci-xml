import { createBrowserHistory} from 'history';

import { useState } from "react";
import axios, { AxiosError } from "axios";
import {
  TextField,
  Button,
  Typography,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
// import { history } from "../../history";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useFormik } from "formik";
import * as yup from "yup";
import { FormRegisterStyle } from "./style";
import { FormSignIn } from '../FormSignIn';

export const FormRegister = () => {

  const history = createBrowserHistory();

  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = yup.object({
    name: yup
    .string()
    .required("Nome do orgão é obrigatório."),

    email: yup
      .string()
      .email("Digite um e-mail válido.")
      .required("E-mail é obrigatório."),

      secretary_name: yup
      .string()
      .required("Nome do orgão é obrigatório."),

    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres.")
      .required("Senha é obrigatória."),

    passwordConfirmation: yup.string().when("password", {
      is: (val: any) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas devem ser iguais."),
    }),
  });

  const formik = useFormik({
    initialValues: {
      name:"",
      secretary_name:"",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values:any) => {
      const valuesSubmit = { name:values.name, secretary_name:values.secretary_name, email: values.email, password: values.password };

     
      axios
      .post("http://localhost:3333/users", valuesSubmit)
      .then((response:any) => {
        const { data } = response;
        
        if (data) {
        history.push("/",<FormSignIn/>);
        }
      })
      .catch((reason: AxiosError) => { 
         alert('Esse endereço de e-mail já foi cadastrado!')
        
      })
    },
  });

  return (
    <FormRegisterStyle noValidate onSubmit={formik.handleSubmit}>
      
      <div data-form="inputs">
      <TextField
        variant="outlined"
        fullWidth
        id="name"
        label="Nome"
        name="name"
        autoComplete="name"
        autoFocus
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />

      <TextField
        variant="outlined"
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        variant="outlined"
        fullWidth
        id="secretary_name"
        label="Nome do órgão"
        name="secretary_name"
        autoComplete="secretary_name"
        autoFocus
        onChange={formik.handleChange}
        error={formik.touched.secretary_name && Boolean(formik.errors.secretary_name)}
        helperText={formik.touched.secretary_name && formik.errors.secretary_name}
      />

      <TextField
        variant="outlined"
        id="password"
        label="Senha"
        type={showPassword ? "text" : "password"}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={(e) => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        variant="outlined"
        id="passwordConfirmation"
        label="Confirme sua senha"
        type="password"
        onChange={formik.handleChange}
        error={
          formik.touched.passwordConfirmation &&
          Boolean(formik.errors.passwordConfirmation)
        }
        helperText={
          formik.touched.passwordConfirmation &&
          formik.errors.passwordConfirmation
        }
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Registrar-se
      </Button>
      </div>

     
    </FormRegisterStyle>
  );
};