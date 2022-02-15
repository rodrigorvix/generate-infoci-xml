import styled from 'styled-components'

export const EstruturaInicialReportStyle = styled.section`
 
  legend {
    font-size: 1.25rem;
    font-weight: bold;
    padding: 0.5rem 0;

    @media (max-width: 720px) {
      font-size: 1rem;
    }
  }

div[data-output="estrutura-inicial"]{
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  .MuiOutlinedInput-root {
   text-align: left;
  }
}
  `