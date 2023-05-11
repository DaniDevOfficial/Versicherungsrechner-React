/*
    @Autors:  David Bischof
    Version: 2.0
 */

    import { Link } from 'react-router-dom'
    import '../css/Navbar.css'
    export default function Navbar (){
    
        return(
        <div>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/Rechner/Model'><li>Rechner</li></Link>
                <Link to='/About'><li>About</li></Link>
                <Link to='/FAQ'><li>FAQ</li></Link>
                <Link to='/Kontakt'><li>Kontakt</li></Link>

    
    
                
        
            </ul>
        </div>
        )
    }