import { Link, useNavigate } from "react-router-dom";
import '../css/home.css'
import "../css/components.css"

export default function Home() {
    const navigate = useNavigate()

    function handlesubmit() {
        navigate('/Rechner/Model')
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })


    }
    return (

        <div>
            <div id="slogan">
                <h2 class="homeh2">Berechnen Sie heute Ihre Versicherung und sichern Sie Ihre Zukunft</h2>
                <h1 class="homeh1" ></h1>

                <form action="javascript:void(0);" onSubmit={handlesubmit}>
                    <input
                        id="specialsubmit"
                        className="submitinput"

                        type="submit"
                        value={"Jetzt Berechnen"} />
                </form>
                <h2 class="homeh2">Sparen Sie Heute für Morgen</h2>
                <br />
            </div>
            <br />
            <div id="contact us">

            </div>
        </div>
    )
}