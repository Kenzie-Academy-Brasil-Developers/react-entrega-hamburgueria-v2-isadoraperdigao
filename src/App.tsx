import './App.css';
import { BrandLogo } from './components/BrandLogo';
import { FormAside } from './components/FormAside';
import { Slogan } from './components/Slogan';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <div>
      <GlobalStyles />
      <FormAside />
    </div>
  );
}

export default App;
