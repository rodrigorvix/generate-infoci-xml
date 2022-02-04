import styled from "styled-components";

export const TomadaContasEspecialraStyle = styled.form`

  padding: 1rem;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div[data-header="headerForm"] {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .MuiFormControl-root {
      width: 250px;
    }

    div[data-button="save"] {
      text-align: right;
  
      .MuiButton-root {
        background: var(--blue-500);
        width: 100px;
       
       &:hover {
         filter:brightness(0.8);
       }
      }
      
    }
  }

  legend {
    font-size:1.25rem;
    font-weight: bold;
    padding: 0.5rem 0;
    
    @media(max-width:720px){
      font-size: 1rem;
    }  
  }

  div[data-button="next-previous"] {
    display: flex;
    justify-content: space-between;
   
     .MuiIconButton-root {
      padding:0px;
      svg {
        font-size : 3.5rem;
        color: var(--blue-500);
  
        &:hover {
          filter:brightness(0.8);
        }
      }  
      
    }
   }
`;