import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    fetchColors();
  }, []);

  const fetchColors = async () => {
    try {
      const response = await fetch("/problem_1_data.json");
      const data = await response.json();
      setColors(data["product_colors"]);
    } catch (error) {
      console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
    }
  };

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
