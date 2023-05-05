import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import FinalOutput from "./CalculatorOutput";
import ParentWhole from "./ParentWhole";
import "./components.css";
import { Link } from "react-router-dom";



export default function CalculatorWholeWorth({ setWorth, setInsurance, setDamage }) {

    const navigate = useNavigate()
    function handlesubmit() {
        navigate('/Auswertung')
    }



    return (
        <div id="calculator">
            <p>Hausratswert</p>
            <form action="javascript:void(0);" onSubmit={handlesubmit}>
                <input
                    className="numberinput"
                    id="worthinput"
                    placeholder="Hausratswert"
                    type="number"
                    min="0"
                    required
                    onChange={(e) => { setWorth(parseInt(e.target.value)) }}></input>
                <br />
                <p>Für wie viel sind sie versichert</p>
                <input
                    className="numberinput"
                    id="insuranceinput"
                    placeholder="Versicherungswert"
                    type="number"
                    min="0"
                    required
                    onChange={(e) => { setInsurance(parseInt(e.target.value)) }}></input>
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

                <Link to="/">
                    <input
                        className="submitinput"
                        type="back"
                        value="Zurück" /></Link>
            </form>
            <br />





        </div>


    )
}

