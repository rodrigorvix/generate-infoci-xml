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
import { FormSignInStyle } from "./style";


export const FormSignIn = () => {
 
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Digite um e-mail válido.")
      .required("E-mail é obrigatório."),

    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres.")
      .required("Senha é obrigatória."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
  
      axios.post('http://localhost:8080/v1/api/auth', values)
        .then(response => {
          const { data } = response
          if (data) {
            localStorage.setItem('app-token', data)
            // history.push('/user')
          }
        })
        .catch((reason: AxiosError) => { 
          alert('E-mail ou senha incorretos!')
         
       })
    },
  });

  return (
    <FormSignInStyle noValidate onSubmit={formik.handleSubmit}>
      <div data-form="inputs">
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
        id="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        value={formik.values.password}
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

      <Typography component="p">
        Não possui conta ainda?
        <Link href="/register">
          {" "}
          Registre-se aqui
        </Link>
      </Typography>
      <div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Entrar
        </Button>
      </div>
      </div>
      
    </FormSignInStyle>
  );
};