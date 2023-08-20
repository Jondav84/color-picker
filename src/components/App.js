/** @format */

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
import NewColorForm from "./NewColorForm";
import "../styles/App.css";

const App = () => {
  const mostUsedColors = [
    { id: 1, name: "Red", hex: "#FF0000" },
    { id: 2, name: "Green", hex: "#00FF00" },
    { id: 3, name: "Blue", hex: "#0000FF" },
    { id: 4, name: "Yellow", hex: "#FFFF00" },
    { id: 5, name: "Black", hex: "#000000" },
    { id: 6, name: "White", hex: "#FFFFFF" },
  ];

  const initialColors =
    JSON.parse(localStorage.getItem("colors")) || mostUsedColors;

  const resetColors = () => {
    localStorage.removeItem("colors");
    setColors(mostUsedColors);
  };

  const [colors, setColors] = useState(initialColors);

  const addColor = (newColorName, newColorHex) => {
    const newId = colors.length + 1;
    const newColorObj = { id: newId, name: newColorName, hex: newColorHex };
    setColors([newColorObj, ...colors]);
  };

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  return (
    <Router>
      <nav className="nav-bar">
        <Link to="/colors" className="nav-link">
          Color List
        </Link>
        <Link to="/colors/new" className="nav-link">
          Add New Color
        </Link>
      </nav>
      <button onClick={resetColors}>Reset Colors</button>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route
          path="/colors/new"
          element={<NewColorForm addColor={addColor} />}
        />
        <Route
          path="/colors/:colorId"
          element={<ColorDetails colors={colors} />}
        />
        <Route path="/" element={<Navigate to="/colors" />} />
      </Routes>
    </Router>
  );
};

export default App;
