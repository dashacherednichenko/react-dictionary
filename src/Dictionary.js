import React, {useState} from "react";

import "./Dictionary.css"

export default function Dictionary() {
    let [keyword, setKeyword] = useState('');
    function search(e){
        e.preventDefault();
        console.log("search", keyword);
        alert(`User search for "${keyword}"`);
    }

    function handleSearchInputChange (e){
        console.log("search.input", e.target.value);
        setKeyword(e.target.value);
    }

    return (<div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleSearchInputChange}/>
        </form>
    </div>);
}