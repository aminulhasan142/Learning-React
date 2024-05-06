import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let FoodItems = [];
  let foodItems = [
    "Green Vegetable",
    "Egg",
    "Apple",
    "Salad",
    "Milk",
    "Mangoo",
    "Watermelon",
  ];

  //let emptyMessage = FoodItems.length == 0 ? <h3>I am still hungry.</h3> : null;

  // if (FoodItems.length == 0) {
  //   return <h3>I am still hungry.</h3>;
  // }

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
