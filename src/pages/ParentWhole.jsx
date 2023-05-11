import CalculatorOutput from "./CalculatorOutput"
import CalculatorWholeWorth from "./CalculatorWholeWorth"
import CalculatorQuad from "./CalculatorQuad"
import ModellChoser from './ModellChoser'
import Home from './Home'
import Help from '../components/FAQ';
import About from "./About"
import Contact from './Contact'
import { Route, Routes } from 'react-router-dom'
import { useState } from "react";



export default function ParentWhole() {

    const [worth, setWorth] = useState();
    const [insurance, setInsurance] = useState(0);
    const [damage, setDamage] = useState();
    const [whichmodell, setWhichmodell] = useState();
    let Whichcalculator

    if (parseInt(whichmodell) == 1) {
        Whichcalculator = CalculatorQuad
    } else {
        Whichcalculator = CalculatorWholeWorth
    }

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/' element={<Home />} />

                <Route path='/Rechner/Model' element={<ModellChoser setWhichmodell={setWhichmodell} />} />
                <Route path='/Rechner/Eingabe' element={<Whichcalculator setWorth={setWorth} setInsurance={setInsurance} damage={damage} setDamage={setDamage} whichmodell={whichmodell} />} />
                <Route path='/Rechner/Auswertung' element={<CalculatorOutput worth={worth} insurance={insurance} damage={damage} />} />
                <Route path='/FAQ' element={<Help />} />
                <Route path='/About' element={<About />} />
                <Route path='/Kontakt' element={<Contact />} />



            </Routes>
        </div>
    )
}