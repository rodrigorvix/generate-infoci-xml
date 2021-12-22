import styled from "styled-components";

export const EstruturaInicialStyle = styled.fieldset`

  padding: 1rem;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  legend {
    font-size:1.25rem;
    font-weight: bold;
    padding: 0.5rem 0;
    
    @media(max-width:720px){
      font-size: 1rem;
    }  
  }
`;