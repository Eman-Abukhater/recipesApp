import React from "react";

function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "b81b62defbd24178962e4bc0af8d692e";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      FoodDetails
      <h2>{food.title}</h2>
      <img src={food.image} alt={food.title} />
      <p>{food.summary}</p>
    </div>
  );
}

export default FoodDetails;
