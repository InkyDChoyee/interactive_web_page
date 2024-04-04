import "./App.css";
import React, { useState, useEffect } from "react";
import data from "./problem_1_data.json";

function App() {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    setColors(data["product_colors"]);
  }, []);

  const changeProductImage = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className="App">
      <h1>제품 색상 선택하기</h1>
      {colors.map((color) => (
        <div key={color.p_color}>
          <input
            type="radio"
            id={color.p_color}
            name="color"
            value={color.p_color}
            checked={selectedColor === color.p_color}
            onChange={changeProductImage}
          />
          <label htmlFor={color.p_color}>{color.p_color}</label>
        </div>
      ))}
      <div id="productImageContainer">
        {selectedColor && (
          <img
            src={
              colors.find((color) => color.p_color === selectedColor)?.imageURL
            }
            alt="product_img"
          />
        )}
      </div>
    </div>
  );
}

export default App;
