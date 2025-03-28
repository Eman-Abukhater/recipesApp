import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";
function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "b81b62defbd24178962e4bc0af8d692e";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h2 className={styles.recipeName}>{food.title} 🍴</h2>
        <img className={styles.recipeImage} src={food.image} alt={food.title} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏱️ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>🍽️ {food.servings} servings</span>
          <span>{food.vegetarian ? "🌱 vegetarian" : "🍖 nonvegetarian"}</span>
        </div>
        <div>
          <span>💲 {food.pricePerServing / 100}</span>
        </div>
        <ItemList food={food} loading={loading} />
 
        <h3>📋 Instructions</h3>
        <div className={styles.recipeInstructions}>
          <ol>
            {loading ? (
              <p>⏳ Loading ..</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>👉 {step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
