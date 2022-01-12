import { Footer } from './components/Footer';
import { FormInfoci } from './components/FormInfoci';
import { Header } from './components/Header';
import { ContainerStyle } from './styles/container';
import { GlobalStyled } from './styles/global';

function App() {
  return (
  <>
    <GlobalStyled/>
      <Header/>
    <ContainerStyle>
      <FormInfoci/>
    </ContainerStyle>
      <Footer/>
    
  </>
  );
}

export default App;
