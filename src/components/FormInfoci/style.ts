import styled from "styled-components"

export const FormInfociStyle = styled.form`
  
  div[data-button="submit"] {
    display:flex;
    justify-content: center;
    align-items: center;

    .MuiButton-root {
      background: var(--blue-500);
      width: 250px;
     
     &:hover {
       filter:brightness(0.8)
     }
    }

  }
`;
 
