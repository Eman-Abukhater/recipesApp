import React from "react";
import Item from "./Item";

function ItemList({ food, loading }) {
  return (
    <div>
      <h3> Ingredients</h3>

      {loading ? (
        <p> Loading ingredients..</p>
      ) : (
        food.extendedIngredients &&
        food.extendedIngredients.map((item) => <Item item={item} />)
      )}
    </div>
  );
}

export default ItemList;
