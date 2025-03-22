import React from 'react'

function FoodItem({food}) {
  return (
    <div>
      <img src={food.image} alt={food.title} />
      <h1>{food.title}</h1>
      <button>view recipe</button>

    </div>

)
}

export default FoodItem