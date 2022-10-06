import React from "react";

export default function Synonyms(props) {
    if (props.synonyms.length) {
        return (
            <div className="Synonyms">
                <strong>Synonyms:</strong> {props.synonyms.map(function (synonym, i) {
                return (
                    <span key={i}>{synonym}</span>
                );
            })}
            </div>
        )
    } else {
        return null;
    }
}