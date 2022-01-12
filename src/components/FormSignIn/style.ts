import styled from "styled-components";

export const FormSignInStyle = styled.form`

  height: calc(100vh - 102px - 2.5rem);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div[data-form="inputs"] {

    max-width: 360px;
    padding: 1.125rem;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);

    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      font-size: 0.875rem;

      a {
        text-decoration: none;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
    .MuiOutlinedInput-root {
     input {
       font-size: 1rem;
     }
    }

    button[type="submit"] {
      background-color: var(--blue-300);
    }
  }


`;