import {useState} from "react";
import "./components.css"


export default function Rechner() {
    const[worth, setWorth] = useState()
    const[versichertwert, setVersichertwert] = useState()
    const[schaden, setSchaden] = useState()
    const[evaluation, setEvaluation] = useState()
    const[versicherung, setVersicherung] = useState()


    function calcutate(){
        let percent 
        percent = versichertwert/worth
        let paid 
        paid = (schaden*percent).toFixed(2)
        let percenthundert 
        percenthundert = (percent*100).toFixed(2)
        let schadenRound = schaden.toFixed(2)
        let difference
        if(paid>schaden){
            paid = schaden.toFixed(2)
        }
       
        if(worth==versichertwert){
            //setVersicherung("perfekt")
            setEvaluation("Du bezahlst für genau "+ worth+" Franken Prämien, welche gleich hoch sind, wie dein Haus. Ändere nichts daran (°□°)")
            setVersicherung("Da du perfekt Versichert bist, wird auch der ganze Schaden von "+schadenRound+" Franken bezahlt")
        } 
        

        else if(worth<versichertwert){
            debugger
            difference = versichertwert-worth
            //setVersicherung("zu hoch")
            setEvaluation("HEY!! Du bezahlst "+ difference+" Franken über deinem Hauswert. Ändere das auf den Wert deines Hauses ʕ •ᴥ•ʔ")
            setVersicherung("Es wird zwar der ganze schaden von "+ schadenRound+" Franken bezahlt, jedoch zahlst du immer noch zu viele Prämien")
        }

        else{
            difference = worth-versichertwert
            //setVersicherung("zu tief")
            setEvaluation ("Deine Prämie ist um " + difference + " Franken zu tief, das heisst, dass dein Hausrat nur zu " + percenthundert+"% versichert ist. ( ͡ᵔ ͜ʖ ͡ᵔ )")
            setVersicherung("Da nur  "+percenthundert+"% von deinem Haus versichert ist, wird nur "+ paid+" Franken von der Versicherung bezahlt.")
        }



    }


    return (
        <div id="calculator">
            <p>Wert des Hauses (Gesamtwert)</p>
            <input className="textinput" placeholder="Hauswert" type="number"value={worth} onChange={ (e) => setWorth(parseInt(e.target.value))}></input>
            <br/>
            <p>Für wie viel sind sie versichert</p>
            <input className="textinput" placeholder="Prämien" type="number" value={versichertwert} onChange={ (e) => setVersichertwert(parseInt(e.target.value))}></input>
            <br/>
            <p>Schaden Total</p>
            <input className="textinput" placeholder="Schaden" type="number" value={schaden} onChange={ (e) => setSchaden(parseInt(e.target.value))}></input>
            <br/>
            <input className="submitinput"type="submit" onClick={calcutate} value="Berechnen"></input>            <br/>
            {evaluation}
            <br/>
            {versicherung}
            <br/>


            
        </div>
        
        
    )
}
  