import React, {useState} from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";

import "./Dictionary.css"

export default function Dictionary() {
    let [keyword, setKeyword] = useState('');
    let [results, setResults] = useState({});
    let [photos, setPhotos] = useState({});

    function handlePexelResponse(res) {
        setPhotos(res.data.photos);
    }
    function handleResponse(res) {
        let data = res.data;
        setResults(res.data);
        let pexelsApi = '563492ad6f917000010000011bd33a6d62024ef1828651756b77fe3f';
        let pexelsUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
        axios.get(
            pexelsUrl,
            {headers: {
                    "Authorization" : pexelsApi
                }
            }
        )
            .then(handlePexelResponse);
    }

    function search(e) {
        e.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios(apiUrl).then(handleResponse);
    }

    function handleSearchInputChange(e) {
        setKeyword(e.target.value);
    }

    return (
        <div className="Dictionary">
            <section>
                <form onSubmit={search}>
                    <label>What word do you want to look up?</label>
                    <input type="search" className="search-input" onChange={handleSearchInputChange}/>
                </form>
            </section>
            <Result results={results}/>
            <Photos photos={photos}/>
        </div>
    );
}