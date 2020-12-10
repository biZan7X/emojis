import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [meaning, setMeaning] = useState("Your result will come here");

  //our own local DB.
  const foodDictionary = {
    "🍜": "noodles - the best food in the world",
    "🍕": "pizza",
    "🍔": "burger",
    "🌭": "hot dog",
    "🍗": "chicken lolipop",
    "🍦": "vanilla.js ice-cream",
    "🧀": "cheese"
  };

  var foodList = Object.keys(foodDictionary);
  //console.log(foodList);

  var changeHandler = function (event) {
    var input = event.target.value;
    var msg = foodDictionary[input];
    var ermsg ="This emoji is not in our DB."

    if (msg)  setMeaning(msg);
    else setMeaning(ermsg);

  };

  var clickHandler = function (emoji) {
    setMeaning(foodDictionary[emoji]);
  };

  return (
    <div className="App">
      <h1>The foodie inside you</h1>
      <input
        onChange={changeHandler}
        placeholder="Insert your food emoji here."
      />
      <h3>{meaning}</h3>
      {
        /*this portion will act purely like a js section */
        foodList.map((emoji) => (
          <span key={emoji} onClick={() => clickHandler(emoji)}>{emoji}</span>
        ))
      }
    </div>
  );
}
