import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
    if (props.results.length) {
        return (
            <div className="Result">
                <section>
                    <h2>{props.results[0].word}</h2>
                </section>
                {props.results[0].meanings.map(function (meaning, index) {
                    return (
                        <section key={index}>
                            <Meaning meaning={meaning}/>
                        </section>
                    )
                })}
            </div>
        )
    } else {
        return null;
    }
}