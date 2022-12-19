import './App.css';
import { UserProvider } from './providers/UserContext';
import { MainRoutes } from './routes';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <div>
      <GlobalStyles />
      <UserProvider>
        <MainRoutes />

      </UserProvider>
      
    </div>
  );
}

export default App;
