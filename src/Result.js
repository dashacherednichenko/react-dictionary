import React from "react";
import Meaning from "./Meaning";

export default function Result(props){
    // console.log('res', props.results);
    if(props.results.length) {
        return (
            <div className="Result">
                <h2>{props.results[0].word}</h2>
                {props.results[0].meanings.map(function (meaning, index){
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning}/>
                        </div>
                    )
                })}
            </div>
        )
    }
    else {
        return null;
    }
}