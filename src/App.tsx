import './App.css';
import { BrandLogo } from './components/BrandLogo';
import { Slogan } from './components/Slogan';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrandLogo isDashboard={true}/>
      <Slogan />
    </div>
  );
}

export default App;
