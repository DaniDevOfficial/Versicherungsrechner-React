import sanju from './sanju.png';
import './App.css';
import Versicherung from './Versicherung.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sanju} className="App-logo" alt="logo" />

        <Versicherung/>
      </header>
    </div>
  );
}

export default App;
