import React from "react";

export default function Photo(props) {
    return (
        <div className="col-4">
            <a href={props.photo.src.original}
               target="_blank" rel="noopener noreferrer">
                <img
                    src={props.photo.src.landscape}
                    className="img-fluid" alt={props.photo.alt}/>
            </a>
        </div>
);
}