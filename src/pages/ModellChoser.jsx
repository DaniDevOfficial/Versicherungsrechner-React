import { useState } from "react";
import { useNavigate } from 'react-router-dom'


import "./components.css"


export default function ModellChoser({ setWhichmodell }) {
    const navigate = useNavigate()

    function handlesubmit(which) {
     
        navigate('/Rechner')
    }



    return (
        <div id="model">
             <form action="javascript:void(0);" onSubmit={handlesubmit}>
                <label for="quadrat">Quadratmetermodell</label>
                <input type="radio" id="quadrat" name="modell" value="1" className="radioinput" required onChange={(e) => setWhichmodell(e.target.value)} />
                <br />
                <label for="hauswert">Versicherungssummenmodell</label>
                <input type="radio" id="versicherung" name="modell" value="2" className="radioinput" required onChange={(e) => setWhichmodell(e.target.value)} />
                <input type="submit" value="Weiter" className="modelsubmit" />
            </form>
        </div>


    )
}
