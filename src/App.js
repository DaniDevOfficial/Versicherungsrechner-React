
// Components
import Calculator from './calculator.js'
import Model from './model'
import Finaloutput from './finaloutput'

// Other
import './App.css';
import Test from './test.js'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <br />
        <br />
            <h1>aswdwasdw</h1>
        <Routes>


          <Route path='/' element={ <Model/> }/>
          <Route path='/Rechner' element={ <Calculator/> }/>
          <Route path='/Auswertung' element={ <Finaloutput/> }/>

        </Routes>
      </header>
    </div>
  );
}

export default App;
