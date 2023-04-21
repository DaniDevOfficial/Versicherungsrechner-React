import CalculatorOutput from "./CalculatorOutput"
import CalculatorFirst from "./CalculatorFirst"
import Model from './model'
import { Route, Routes } from 'react-router-dom'
import { useState } from "react";


function ParentWhole(){

    const [worth, setWorth] = useState();
    const [insurance, setInsurance] = useState(0);
    const [damage, setDamage] = useState();

    return(
        <div>

            
            <Routes>              
            <Route path='/' element={<Model />} />
            <Route path='/Rechner' element={<CalculatorFirst setWorth={setWorth} setInsurance={setInsurance} damage={damage} setDamage={setDamage}  />} />
            <Route path='/Auswertung' element={<CalculatorOutput worth={worth} insurance={insurance} damage={damage}/>} />
          </Routes>
          </div>
    )
}
export default ParentWhole;