import styled from "styled-components";

export const HeaderStyle = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--blue-500);

    h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: bold;
    padding: 1rem 0.5rem 0.5rem;
    border-bottom: 1px solid var(--gray-100);
  
    @media(max-width:720px){
      font-size: 2rem;
    }  
  }
  
  h2 {
    font-size: 1rem;
    font-weight: normal;
    color:black;

    span{
      font-weight:bold ;
    }
    @media(max-width:720px){
      font-size: 0.87rem;
    }  
  }


`;