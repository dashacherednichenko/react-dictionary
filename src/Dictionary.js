import React, {useState} from "react";
import axios from "axios";
import Result from "./Result";

import "./Dictionary.css"

export default function Dictionary() {
    let [keyword, setKeyword] = useState('');
    let [results, setResults] = useState({});

    function handleResponse(res) {
        let data = res.data;
        setResults( res.data );
        // for (let i = 0; i < data.length; i++) {
        //     let defs = data[i].meanings[0].definitions;
        //     for (let i = 0; i < defs.length; i++) {
        //         console.log('definition', defs[i].definition);
        //     }
        // }
    }

    function search(e) {
        e.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        // console.log("search", keyword);
        axios(apiUrl).then(handleResponse);
        // alert(`User search for "${keyword}"`);
    }

    function handleSearchInputChange(e) {
        // console.log("search.input", e.target.value);
        setKeyword(e.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleSearchInputChange}/>
            </form>
            <Result results={results} />
        </div>
    );
}