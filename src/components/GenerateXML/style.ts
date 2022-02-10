import styled from "styled-components";


export const GenerateXMLStyle = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 2rem;

h2 {
  font-size: 1.25rem;
}

div {
      text-align: center;
  
      .MuiButton-root {
        background: var(--blue-500);
        width: 200px;
       
       &:hover {
         filter:brightness(0.8);
       }
      }
    }
`;