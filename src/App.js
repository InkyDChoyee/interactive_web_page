import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import data from "./problem_1_data.json";

export default function ColorSelect() {
  const [selectedColor, setSelectedColor] = React.useState("");
  const [colors, setColors] = React.useState([]);

  React.useEffect(() => {
    setColors(data["product_colors"]);
  }, []);

  const handleChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="container">
      <div className="selectBox">
        <Box sx={{ minWidth: 150 }}>
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
      <div className="imgBox">
        <ThemeProvider
          theme={{
            palette: {
              primary: {
                main: "#007FFF",
                dark: "#0066CC",
              },
            },
          }}
        >
          <Box
            sx={{
              width: "auto",
              height: "auto",
              borderRadius: 5,
              bgcolor: "#fff",
            }}
          >
            {selectedColor && (
              <img
                src={require(`${
                  colors.find((color) => color.p_color === selectedColor)
                    ?.imageURL
                }`)}
                style={{ width: "100%", height: "100%" }}
                alt="product_img"
              />
            )}
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
}
