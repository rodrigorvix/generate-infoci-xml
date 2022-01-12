import { Footer } from './components/Footer';
import { FormInfoci } from './components/FormInfoci';
import { FormRegister } from './components/FormRegister';
import { FormSignIn } from './components/FormSignIn';
import { Header } from './components/Header';
import { RoutesForm } from './Routes';
import { ContainerStyle } from './styles/container';
import { GlobalStyled } from './styles/global';

function App() {
  return (
  <>
    <GlobalStyled/>
      <Header/>
    <ContainerStyle>

      {/* <FormInfoci/> */}
      {/* <FormSignIn/> */}
      {/* <FormRegister/> */}

      <RoutesForm/>

    </ContainerStyle>
      <Footer/>
    
  </>
  );
}

export default App;
