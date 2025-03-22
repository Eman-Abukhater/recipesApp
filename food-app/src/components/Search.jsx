import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "b81b62defbd24178962e4bc0af8d692e";
function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  // when we want whatever change the application  the data changes as well and the react app comunicat with this changes useEffect hook
  // useEffect(() =>{}, []) the syntax
  // [] means run this effect only once when the component mounts
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]); // run this effect every time the query changes

  return (
    <div className={styles.searchContainer}> 
      <input 
        className={styles.input}  // this class is defined in search.module.css file  styles.searchInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
