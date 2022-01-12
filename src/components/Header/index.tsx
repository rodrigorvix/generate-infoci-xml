import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { HeaderStyle } from "./style";

export const Header = () => {
  return (
    <HeaderStyle>  
        <nav>
         <div data-nav="items">
           <a href="https://www.facebook.com/SecontEspiritoSanto" target="_blank" title="Facebook SECONT">
            <FontAwesomeIcon icon={faFacebookF} />
           </a>
           <a href="https://www.instagram.com/secont.es/" target="_blank" title="Instagram SECONT">
           <FontAwesomeIcon icon={faInstagramSquare} />
           </a>
           <a href="https://twitter.com/EStransparencia" target="_blank" title="Twitter SECONT">
           <FontAwesomeIcon icon={faTwitter} />
           </a>
         </div>

         <div data-nav="items">

           <div data-nav="websites">
            
            <a href="https://secont.es.gov.br/" title="Site da SECONT" target="_blank">Site da SECONT</a>
           </div>

           <div data-nav="websites">
            <FontAwesomeIcon icon={faHeadset} />
            <a  href="https://ouvidoria.es.gov.br/" title="Site da Ouvidoria ES" target="_blank">Fale conosco</a>
           </div>

           
         </div>
        </nav>
        <h1>Prestação de Contas</h1>
        <h2>Conforme Portaria Normativa 88/2021 do Tribunal de Contas do Estado do Espírito Santo.</h2>
        
       
    </HeaderStyle>
  );
}