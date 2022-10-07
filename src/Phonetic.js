import React from "react";
import Listen from "./Listen";

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            {props.phonetic.map(function (ph, i) {
                return (
                    <div className="Phonetic-el" key={i}>
                        <span>{ph.text}</span>
                        <Listen audio={ph.audio}/>
                    </div>
                )
            })}
        </div>
    )
}