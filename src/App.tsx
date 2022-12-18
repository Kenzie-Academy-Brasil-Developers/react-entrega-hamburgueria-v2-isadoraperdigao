import './App.css';
import { BrandLogo } from './components/BrandLogo';
import { Slogan } from './components/Slogan';

function App() {
  return (
    <div className="App">
      <BrandLogo isDashboard={true}/>
      <Slogan />
    </div>
  );
}

export default App;
