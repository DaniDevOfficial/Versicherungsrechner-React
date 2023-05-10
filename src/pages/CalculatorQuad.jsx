import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import FinalOutput from "./CalculatorOutput";
import ParentWhole from "./ParentWhole";
import "./components.css";
import { Link } from "react-router-dom";



export default function CalculatorQuad({ setWorth, setInsurance, setDamage }) {

    const [quadworth, setQuadworth] = useState()
    const [quadamount, setQuadamount] = useState()
    const navigate = useNavigate()
    function handlesubmit() {
        setWorth(quadamount * quadworth)
        navigate('/Rechner/Auswertung')
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }



    return (
        <div id="calculator">
            <form action="javascript:void(0);" onSubmit={handlesubmit}>
                <p>Anzahl Quadratmeter</p>
                <input
                    className="numberinput"
                    id="worthinput"
                    placeholder="Quadratmeter"
                    type="number"
                    min="0"
                    required
                    onChange={(e) => { parseInt(setQuadamount(e.target.value)) }} />
                <br />
                <p>Wert Pro Quadratmeter</p>
                <input
                    className="numberinput"
                    id="worthinput"
                    placeholder="Durchschnitt"
                    type="number"
                    min="0"
                    required
                    onChange={(e) => { parseInt(setQuadworth(e.target.value)) }} />
                <br />
                <p>Für wie viel sind sie versichert</p>
                <input
                    className="numberinput"
                    id="insuranceinput"
                    placeholder="Versicherungswert"
                    type="number"
                    min="0"
                    required
                    onChange={(e) => { setInsurance(parseInt(e.target.value)) }} />
                <br />
                <p>Schaden Total</p>
                <input
                    className="numberinput"
                    id="damageinput"
                    placeholder="Schaden (optional)"
                    type="number"
                    min="0"

                    onChange={(e) => setDamage(parseInt(e.target.value))} />
                <br />

                <input
                    className="submitinput"
                    type="submit" />

                <Link to="/Rechner/Model">
                    <input
                        className="submitinput"
                        type="back"
                        value="Zurück" /></Link>
            </form>
            <br />





        </div>


    )
}



