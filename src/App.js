import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='cuadrado'>
        </div>
        <div style={{width: "150px", height: "150px", backgroundColor: "blue"}}></div>
      </header>
    </div>
  );
}

export default App;
