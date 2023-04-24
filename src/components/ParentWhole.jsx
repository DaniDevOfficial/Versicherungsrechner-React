import CalculatorOutput from "./CalculatorOutput"
import CalculatorFirst from "./CalculatorFirst"
import CalculatorQuad from "./CalculatorQuad"
import Model from './model'
import { Route, Routes } from 'react-router-dom'
import { useState } from "react";


export default function ParentWhole() {

    const [worth, setWorth] = useState();
    const [insurance, setInsurance] = useState(0);
    const [damage, setDamage] = useState();
    const [whichmodell, setWhichmodell] = useState();
    let Whichcalculator
    
    if(parseInt(whichmodell) == 1){
         Whichcalculator = CalculatorQuad
    }else{
        Whichcalculator = CalculatorFirst
    }

    return (
        <div>
            <Routes>
                <Route path='/' element={<Model setWhichmodell={setWhichmodell} />} />
                <Route path='/Rechner' element={<Whichcalculator setWorth={setWorth} setInsurance={setInsurance} damage={damage} setDamage={setDamage} whichmodell={whichmodell}/>} />
                <Route path='/Auswertung' element={<CalculatorOutput worth={worth} insurance={insurance} damage={damage} />} />
            </Routes>
        </div>
    )
}