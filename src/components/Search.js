import React, { useState } from "react";

const Search =() =>{

  const [term , setTerm] = useState('');
    

    return (
        <div>
            <div className="ui form ">
                <label>Search :</label>
                <input
                value={term}
                 className="input"
                 onChange={e=>{
                    setTerm(e.target.value);
                 }}
                 />
                 <h1>{term} </h1>
            </div>
        </div>
    )
}

export default Search;