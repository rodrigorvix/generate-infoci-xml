import { Button, MenuItem, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalStorage";
import { InputUGStyle } from "./style";

export const InputUG = () => {
  
  const context = useContext(GlobalContext);

  const [valueUG, setValueUG] = useState(0);

  console.log(valueUG);

  console.log(context.userAuth);

  return (
    <InputUGStyle>
    <div data-input="select-container">
    <h2>Selecione a UG que deseja incluir as informações:</h2>

<TextField
    fullWidth
    select
    inputProps={{MenuProps: {disableScrollLock: true}}}
    id="select_ug"
    name="select_ug"
    value={valueUG}
    label="Unidade(s) Gestora(s)"
    onChange={((event:any) => setValueUG(event.target.value))}
  >
     <MenuItem value={0}>Selecione uma UG</MenuItem>
    <MenuItem value={1}>SECONT</MenuItem>
    <MenuItem value={2}>SESA</MenuItem>
    <MenuItem value={3}>SEGER</MenuItem>
  </TextField>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Entrar
        </Button>
      
    </div>
     
    </InputUGStyle>
  );
}