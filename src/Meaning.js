import React from "react";

import "./Meaning.css"

export default function Meaning(props) {
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
    </div>
}