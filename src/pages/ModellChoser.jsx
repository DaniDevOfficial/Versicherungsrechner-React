import { useState } from "react";
import { useNavigate } from 'react-router-dom'


import "../css/CalculatorModel.css"
import "../css/components.css"


export default function ModellChoser({ setWhichmodell }) {
    const navigate = useNavigate()

    function handlesubmit(which) {
     
        navigate('/Rechner/Eingabe')
        window.scrollTo({ top: 121, left: 0, behavior: 'smooth' })

    }



    return (
        <div id="model">
             <form action="javascript:void(0);" onSubmit={handlesubmit}>
                <label for="quadrat">Quadratmetermodell</label>
                <input type="radio" id="quadrat" name="modell" value="1" className="radioinput" required onChange={(e) => setWhichmodell(e.target.value)} />
                <br />
                <label for="hauswert">Versicherungssummenmodell</label>
                <input type="radio" id="hauswert" name="modell" value="2" className="radioinput" required onChange={(e) => setWhichmodell(e.target.value)} />
                <input type="submit" value="Weiter" className="modelsubmit" />
            </form>

            
        </div>


    )
}
