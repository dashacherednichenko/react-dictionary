import React, {useState} from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";

import "./Dictionary.css"

export default function Dictionary() {
    let [keyword, setKeyword] = useState('destruction');
    let [results, setResults] = useState({});
    let [photos, setPhotos] = useState({});
    let [loaded, setLoaded] = useState(false);

    function handlePexelResponse(res) {
        setPhotos(res.data.photos);
    }

    function handleResponse(res) {
        setLoaded(true);
        setResults(res.data);
        let pexelsApi = '563492ad6f917000010000016bc2b7a1cac6449fb050b55f6b44564e';
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
        axios.get(
            pexelsUrl,
            {
                headers: {
                    "Authorization": pexelsApi
                }
            }
        )
            .then(handlePexelResponse);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios(apiUrl).then(handleResponse);
    }

    function handleSubmit(e) {
        e.preventDefault();
        search();
    }

    function handleSearchInputChange(e) {
        setKeyword(e.target.value);
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <form onSubmit={handleSubmit}>
                        <label>What word do you want to look up?</label>
                        <input type="search" className="search-input"
                               defaultValue={keyword} onChange={handleSearchInputChange}/>
                    </form>
                </section>
                <Result results={results}/>
                <Photos photos={photos}/>
            </div>
        );
    } else {
        search();
        return "loading"
    }
}