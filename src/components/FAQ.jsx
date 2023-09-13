
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "../css/FAQ.css"

const data = {
    title: "FAQ",
    rows: [
        {
            title: "Was ist mein Hausratswert?",
            content: `Der Hausratswert ist der ganze Wert der Dinge im Haus, was heisst, wenn Sie einen Teppich, einen PC und einen Teller im Haus haben ist das Ihr Hausratswert.`,
        },
        {
            title: "Was ist mit 'Durchschnitt pro Quadratmeter' gemeint?",
            content:
                "Der Durchschnitt ist berechnet, indem man den Hausratswert durch die Anzahl Quadratmeter der Wohnfläche im Haus rechnet.",
        },
        {
            title: "Wo finde ich meinen Versicherungswert?",
            content: `Man kann bei der eigenen Versicherung nachfragen oder im Versicherungsvertrag nachschauen.`,
        },

    ],
};

const styles = {
    bgColor: 'blured',
    titleTextColor: "white",
    rowTitleColor: "white",


   rowContentColor: 'white',
    // arrowColor: "red",


};

const config = {
    animate: true,
    tabFocus: true
};

export default function Help() {

    return (
        <div id="faq">

            <Faq
                data={data}
                styles={styles}
            />



        </div>
    );
}