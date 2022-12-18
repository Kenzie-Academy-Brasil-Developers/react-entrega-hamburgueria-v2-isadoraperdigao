import './App.css';
import { BrandButton } from './components/BrandButton';
import { FormAside } from './components/FormAside';
import { FormInput } from './components/FormInput';
import { GrayButton } from './components/GrayButton';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <div>
      <GlobalStyles />
      <FormAside />
      <BrandButton text='Adicionar' isDashboard={true} type="button" />
      <GrayButton text='Cadastrar' isDashboard={true} type="submit" />
      <FormInput text='Nome' />
    </div>
  );
}

export default App;
