import { useState } from "react";

import "./localisation.css";

var value="";

 function Localisation() {

    const [query, setQuery] = useState('');

    const transfert = evt => {

    if (evt.key === "Enter") {
        value=query;
        console.log(typeof value)
        setQuery('');
    }
    return value;
  }

  return (
  <div className='localisation'>
    <div className="search-box">
        <input 
            type="text"
            className="search-bar"
            placeholder="Recherchez une ville..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={transfert}
        />
    </div>
    {(typeof value == "string") ? (
        <div>
            <span>La nouvelle localisation par défaut est {value}</span>
        </div>
    ) : ('')}
  </div>
  )
}

export default Localisation;
