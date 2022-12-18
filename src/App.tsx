import './App.css';
import { BrandButton } from './components/BrandButton';
import { FormAside } from './components/FormAside';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <div>
      <GlobalStyles />
      <FormAside />
      <BrandButton text='Adicionar' isDashboard={true} type="button" />
    </div>
  );
}

export default App;
