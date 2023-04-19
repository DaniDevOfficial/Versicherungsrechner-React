import {useState} from "react";
import { Link } from 'react-router-dom'
import CalculatorFirst from './CalculatorFirst'
import "./components.css"


export default function CalculatorOutput(props) {

    let outputworth = props.worth
    let outputinsurance = props.insurance
    let outputdamage = props.damage
    
    let overunderinfo
    let overunderwhat
    let overunderpay
    if (outputworth > outputinsurance){
        // to little insurance
        overunderpay = addThousandSeparators(outputworth-outputinsurance)
        let tmp = outputworth + (outputworth) 
        overunderinfo = "Versicherung um " + addThousandSeparators(overunderpay) + ".- erhöhen"
        overunderwhat = "Unterversichert"
    }else if (outputinsurance>outputworth){
        // to much insurance
        overunderpay = addThousandSeparators(outputinsurance-outputworth)
        overunderinfo = "Versicherung um " + addThousandSeparators(overunderpay) + ".- verringern"
        overunderwhat = "Überversichert"
    }else{
        // Perfect
        overunderpay = 0
        overunderinfo = "Versicherung beibehalten"
        overunderwhat = "Perfekt Versichert"



    }

    function addThousandSeparators(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    }


    return (
        <div id="model">

<table>
  <tr id="topline">
    <td>Was  </td>
    <td>Betrag</td>
    <td>Info</td>
  </tr>
  <tr>
    <td>Hausratswert</td>
    <td>{addThousandSeparators(outputworth)}.-</td>
    <td>Wert aller Dinge im Haus</td>
  </tr>
  <tr>
    <td>Versicherung</td>
    <td>{addThousandSeparators(outputinsurance)}.-</td>
    <td>Hausrat angabe bei der Versicherung</td>
  </tr>

    <tr>
    <td>Schaden</td>
    <td>{addThousandSeparators(outputdamage)}.-</td>
    <td>Schaden am Hausrat</td>
  </tr>
  <tr>
    <td>{overunderwhat}</td>
    <td>{overunderpay}.-</td>
    <td>{overunderinfo}</td>
  </tr>

</table>
        </div>
        
        
    )
}