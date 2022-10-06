import React from "react";
import Photo from "./Photo";

export default function Photos(props){
    // console.log(props.photos);
    if(props.photos.length) {
        return(
            <div className="Photos">
            <section>
                <div className="row">
                    {props.photos.map(function (photo, i) {
                        return <Photo photo={photo} key={i}/>
                    })}
                </div>
            </section>
        </div>
        );
    } else {
        return null;
    }

}