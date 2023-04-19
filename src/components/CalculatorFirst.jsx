import { useState } from "react";
import { Link } from 'react-router-dom'
import FinalOutput from "./CalculatorOutput";
import ParentWhole from "./ParentWhole";
import "./components.css";



export default function CalculatorFirst({ setWorth, setInsurance, setDamage }) {


/*      function calculation() {
        let percent;
        percent = versichertwert / worth;
        let paid;
        paid = (schaden * percent).toFixed(2);
        let percenthundert;
        percenthundert = (percent * 100).toFixed(2);
        let schadenRound = addThousandSeparators(schaden.toFixed(2));
        let difference;
        if (paid > schaden) {
            paid = addThousandSeparators(schaden.toFixed(2));
        }


        if (worth == versichertwert) {
            //setVersicherung("perfekt")
            setEvaluation(
                "Du bezahlst für genau " + addThousandSeparators(worth) + " Franken Prämien, welche gleich hoch sind, wie dein Haus. Ändere nichts daran (°□°)"
            );
            setVersicherung(
                "Da du perfekt Versichert bist, wird auch der ganze Schaden von " + addThousandSeparators(schadenRound) + " Franken bezahlt"
            );
        } else if (worth < versichertwert) {
            difference = versichertwert - worth;
            //setVersicherung("zu hoch")
            setEvaluation(
                "HEY!! Du bezahlst " + addThousandSeparators(difference) + " Franken über deinem Hauswert. Ändere das auf den Wert deines Hauses ʕ •ᴥ•ʔ"
            );
            setVersicherung(
                "Es wird zwar der ganze schaden von " + addThousandSeparators(schadenRound) + " Franken bezahlt, jedoch zahlst du immer noch zu viele Prämien"
            );
        } else {
            difference = worth - versichertwert;
            //setVersicherung("zu tief")
            setEvaluation(
                "Deine Prämie ist um " + addThousandSeparators(difference) + " Franken zu tief, das heisst, dass dein Hausrat nur zu " + percenthundert + "% versichert ist. ( ͡ᵔ ͜ʖ ͡ᵔ )"
            );
            setVersicherung(
                "Da nur " + percenthundert + "% von deinem Haus versichert ist, wird nur " + addThousandSeparators(paid) + " Franken von der Versicherung bezahlt."
            );
        }
    }
*/
    return (
        <div id="calculator">
            <p>Hausratswert</p>
            <input
                className="numberinput"
                placeholder="Hausratswert"
                type="number"
                min="0"
                onChange={(e) => { setWorth(parseInt(e.target.value));  }}></input>
            <br />
            <p>Für wie viel sind sie versichert</p>
            <input
                className="numberinput"
                placeholder="Prämien"
                type="number"
                min="0"
                onChange={(e) => setInsurance((parseInt(e.target.value)))}></input>
            <br />
            <p>Schaden Total</p>
            <input
                className="numberinput"
                placeholder="Schaden (optional)"
                type="number"
                min="0"
                onChange={(e) => setDamage(parseInt(e.target.value))}></input>
            <br />
            <Link to='/Auswertung'><input
                className="submitinput"
                type="submit"
                value="Berechnen"/></Link>

             <Link to='/'><input
                className="submitinput"
                type="submit"
                value="Zurück"/></Link>
            <br />




        </div>


    )
}

