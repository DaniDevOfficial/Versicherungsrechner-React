
// Components
import Navbar from './components/Navbar'

// Pages
import ParentWhole from './pages/ParentWhole'

// Other
import './App.css';
import { Route, Routes } from 'react-router-dom'
function App() {



  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        <ParentWhole />
        <br />


      </header>
    </div>
  );
}

export default App;
