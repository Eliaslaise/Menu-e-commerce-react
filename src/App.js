import NavBar from './components/NavBar';
import logo from './logo.svg';
import './App.css';
import MiPrimerComponente from './components/MiPrimerComponente';




function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <MiPrimerComponente></MiPrimerComponente>
        <img src={logo} className="App-logo" alt="logo" />
        <div className='cuadrado'>
        </div>
        <div style={{width: "150px", height: "150px", borderRadius: "15px", backgroundColor: "rgb(109, 10, 10, .4)"}}></div>
      </header>
    </div>
  );
}

export default App;
