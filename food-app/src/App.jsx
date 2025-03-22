import React, { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (

    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <InnerContainer>
        <Container>
          <FoodList foodData={foodData}  setFoodId={setFoodId}/>
        </Container>
      </InnerContainer>
      <InnerContainer>
        <Container>
          <FoodDetails foodId={foodId}/>
        </Container>
      </InnerContainer>
    </div>
  );
}

export default App;
