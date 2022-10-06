import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css"

export default function Meaning(props) {
    console.log(props);
    return <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, i) {
            return (
                <div key={i}>
                    <p>
                        {definition.definition}<br/>
                        <em>{definition.example}</em>
                    </p>
                </div>
            )
        })}
        <Synonyms synonyms ={props.meaning.synonyms} />
    </div>
}