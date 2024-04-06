import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import data from "./problem_1_data.json";
import "./App.css";

export default function ColorSelect() {
  const [selectedColor, setSelectedColor] = useState("");
  const [colors, setColors] = useState([]);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setColors(data["product_colors"]);
  }, []);

  const handleChange = (event) => {
    setSelectedColor(event.target.value);
    setShowImage(false);
    setTimeout(() => setShowImage(true), 500);
  };

  return (
    <div className="container">
      <div className="titleBox">
        <h2>색상 선택 시뮬레이터</h2>
      </div>
      <nav>
        <p>빨강, 파랑, 녹색으로 색상 선택이 가능합니다</p>
      </nav>
      <section className="content">
        <div className="imgBox">
          {selectedColor && (
            <img
              className={`${showImage ? "show" : "hidden"}`}
              src={require(`${
                colors.find((color) => color.p_color === selectedColor)
                  ?.imageURL
              }`)}
              alt="product_img"
            />
          )}
        </div>
        <div className="selectBox">
          <Box sx={{ minWidth: 150 }}>
            <p>색상을 선택해주세요</p>
            <FormControl fullWidth>
              <InputLabel id="color-select-label">색상 선택</InputLabel>
              <Select
                labelId="color-select-label"
                id="color-select"
                value={selectedColor}
                label="색상 선택"
                onChange={handleChange}
              >
                {colors.map((color) => (
                  <MenuItem key={color.p_color} value={color.p_color}>
                    {color.p_color}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
      </section>
    </div>
  );
}
