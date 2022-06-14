import React, { useEffect, useState } from "react";
import axios from "axios";


const Search = () => {

    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);







    useEffect(() => {

        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }


            });
            setResults(data.query.search);
        }

        search();

    }, [term]);


    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{__html : result.snipper}}></span>
          

                </div>

            </div>

        )
    })


    return (
        <div>
            <div className="ui form ">
                <label>Search :</label>
                <input
                    value={term}
                    className="input"
                    onChange={e => {
                        setTerm(e.target.value);
                    }}
                />

            </div>

            <div className="ui celled list">
                {renderedResults}
            </div>

        </div>
    )
}

export default Search;