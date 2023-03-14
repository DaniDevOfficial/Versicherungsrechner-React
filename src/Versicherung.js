import {useState} from "react";

export default function Versicherung() {
    const[wert, setWert] = useState(0)
    const[prämie, setPrämie] = useState(0)
    const[schaden, setSchaden] = useState(0)
    const[evaluation, setEvaluation] = useState()
    const[versicherung, setVersicherung] = useState()
    const[test, setTest] = useState(0)


    function calcutate(){
        let percent = prämie/wert
        let paid = schaden*percent
        let percenthundert = Math.round(percent*100)
        let difference
        setTest(wert-prämie)
        if(paid>schaden){
            paid = schaden
        }
        if(wert>prämie){
            difference = wert-prämie
            //setVersicherung("zu tief")
            setEvaluation ("Deine Prämie ist um " + difference + " Franken zu tief, das heisst, dass dein Hausrat nur zu " + percenthundert+"% versichert ist. ( ͡ᵔ ͜ʖ ͡ᵔ )")
            setVersicherung("Da nur  "+percenthundert+"% von deinem Haus versichert ist, wird nur"+ paid+" Franken von der Versicherung bezahlt.")
        }

        else if(wert==prämie){
            //setVersicherung("perfekt")
            setEvaluation("Du bezahlst für genau "+ wert+" Franken Prämien, welche gleich hoch sind, wie dein Haus. Ändere nichts daran (°□°)")
            setVersicherung("Da du perfekt Versichert bist, wird auch der ganze Schaden von "+schaden+" Franken bezahlt")
        }

        else if(wert<prämie){
            difference = prämie-wert
            //setVersicherung("zu hoch")
            setEvaluation("HEY!! Du bezahlst "+ difference+" Franken über deinem Hauswert. Ändere das auf den Wert deines Hauses ʕ •ᴥ•ʔ")
            setVersicherung("Es wird zwar der ganze schaden von "+ schaden+" bezahlt, jedoch zahlst du immer noch zu viele Prämien")
        }



    }

    return (
        <div>
            ¯\_(ツ)_/¯
            <p>Wert des Hauses (Gesamtwert)</p>
            <input placeholder="Hauswert" type="number"value={wert} onChange={ (e) => setWert(e.target.value)}></input>
            <br/>
            <p>Für wie viel sind sie versichert</p>
            <input placeholder="Prämien" type="number" value={prämie} onChange={ (e) => setPrämie(e.target.value)}></input>
            <br/>
            <p>Schaden kosten</p>
            <input placeholder="Schaden" type="number" value={schaden} onChange={ (e) => setSchaden(e.target.value)}></input>
            <br/>
            <button onClick={calcutate}>Berechnen</button>
            <br/>
            {evaluation}
            <br/>
            {versicherung}
            <br/>


            
        </div>
        
        
    )
}
  