import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import FinalOutput from "./CalculatorOutput";
import ParentWhole from "./ParentWhole";
import "./components.css";



export default function CalculatorQuad({ setWorth, setInsurance, setDamage}) {

    const navigate = useNavigate()
    function handlesubmit(){
        navigate('/Auswertung')    
}



return (
        <div id="calculator">
        <button onClick={handlesubmit}>button</button>
        </div>


    )
}

