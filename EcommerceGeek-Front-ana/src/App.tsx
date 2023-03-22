import { LoginContextProvider } from './contexts/LoginContexts';
import './Global';
import Routes from './Routes/routes'

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
      <Routes />
      </LoginContextProvider>
           
    </div>
  )
}

export default App;