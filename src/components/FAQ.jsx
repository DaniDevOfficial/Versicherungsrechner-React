
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "../css/stylish.css"

const data = {
    title: "FAQ",
    rows: [
        {
            title: "Was ist mein Hausratswert?",
            content: `Der Hausratswert ist der ganze Wert der Dinge im Haus, was heisst, wenn sie ein Tepich ein PC und ein Teller im Haus habe ist das ihr Hausratswert.`,
        },
        {
            title: "Was ist der Durchschnitt pro Quadratmeter Wert?",
            content:
                "Der Durchschnitt ist berechnet in dem man den Hausratswert durch die Anzahl Quadratmeter im Haus rechnet.",
        },
        {
            title: "Wo finde ich meinen Versicherungswert?",
            content: `Entweder weiss man diese Zahl oder man kann eifach bei der eigenen Versicherung nachfragen.`,
        },
        {
            title: "Can i have the git for this page",
            content: "no",
        },
    ],
};

const styles = {
    bgColor: 'blured',
    titleTextColor: "white",
    rowTitleColor: "white",


    // rowContentColor: 'grey',
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