import styled from "styled-components"

export const FormInfociStyle = styled.form`
  
  margin-top: 1.25rem;

  div[data-form="description"] {
    margin-bottom: 1rem;
    p {
      text-align: center;

      span {
        font-weight: bold;
      }
    }

  }

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
 
