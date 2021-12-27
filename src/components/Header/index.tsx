import { HeaderStyle } from "./style";

export const Header = () => {
  return (
    <HeaderStyle>  
        <h1>Prestação de Contas</h1>
        <h2>Conforme Portaria Normativa 88/2021 do Tribunal de Contas do Estado do Espírito Santo.</h2>
        <div>
        <p>Preencha todos os campos do formulário abaixo e clique no botão <span>Próximo</span>.</p>
        <p>Após finalizar o preenchimento de todos os formulários clique no botão <span>Gerar XML</span> para realizar o download do arquivo <span>INFOCI.XML</span>.</p>
       
        </div>
       
    </HeaderStyle>
  );
}