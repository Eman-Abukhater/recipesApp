import React from "react";
import { useEffect } from "react";
import { useState } from "react";

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
      <div>
        <h2>{food.title}</h2>
        <img src={food.image} alt={food.title} />
        <div>
          <span>
            <strong>{food.readyInMinutes}</strong>
          </span>
          <span>{food.servings} servings</span>
          <span>{food.vegetarian ? "vegetarian" : "nonvegetarian"}</span>
        </div>
        <div>
          <span>$ {food.pricePerServing / 100}</span>
        </div>
        <h3>Instructions</h3>
        <div>
          {loading ? (
            <p>Loading ..</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
