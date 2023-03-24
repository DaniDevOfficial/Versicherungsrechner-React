import {useState} from "react";
import "./Rechner.css"


export default function Modell() {
const[whichmodell, setWhichmodell] = useState()

function nextComponent(){

    let selectedModel = document.querySelector('input[name="modell"]:checked').value;
    
}
    


    return (
        <div id="modell">

        <label for="quadrat">Quadratmetermodell</label>
        <input type="radio" id="quadrat"name="modell" value="Quadratmeter" className="radioinput"></input>
<br/>
<br/>

<label for="hauswert">Versicherungssummenmodell</label>
        <input type="radio" id="hauswert"name="modell" value="Hauswert" className="radioinput"></input>
<br/>

        <input type="submit" value="Weiter" className="submitinput" onClick={nextComponent}></input>
            
        </div>
        
        
    )
}
  