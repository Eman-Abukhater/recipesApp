import React, { useEffect } from 'react'
import { useState } from 'react';

function Search() {
    const [query,setQuery] = useState("pizza"); 
    // when we want whatever change the application  the data changes as well and the react app comunicat with this changes useEffect hook
    // useEffect(() =>{}, []) the syntax
    // [] means run this effect only once when the component mounts
    useEffect(() => {
        function demo(){
            console.log(`Search query`);
        } 
        demo(); // call the function
       
    }) // run this effect every time the query changes




  return (
    <div>
        <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search..." />
    </div>
  )
}

export default Search