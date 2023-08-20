/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NewColorForm.css";

const NewColorForm = ({ addColor }) => {
  const [colorName, setColorName] = useState("");
  const [hexCode, setHexCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!colorName.trim() || hexCode.length !== 6) {
      setErrorMessage(
        "Color name cannot be empty and hex code must be 6 characters."
      );
      return;
    }

    const newColorHex = `#${hexCode}`;
    addColor(colorName, newColorHex);
    setColorName("");
    setHexCode("");
    setErrorMessage("");
  };

  const handleHexCodeChange = (newHexCode) => {
    if (newHexCode.length <= 6) {
      setHexCode(newHexCode);
    }
  };

  return (
    <div className="new-color-form">
      <h2>Add New Color</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="colorCode">Hex Code:</label>
          <input
            type="text"
            id="colorCode"
            placeholder="Enter Hex Code (6 characters)"
            value={hexCode}
            onChange={(e) => handleHexCodeChange(e.target.value)}
            maxLength={6}
          />
          <div
            className="color-preview"
            style={{ backgroundColor: `#${hexCode}` }}
          ></div>
        </div>
        <div className="form-group">
          <label htmlFor="colorName">Color Name:</label>
          <input
            type="text"
            id="colorName"
            placeholder="Enter Color Name"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
          />
        </div>
        <button type="submit">Add Color</button>
      </form>
      <Link to="/colors">Back to Color List</Link>
    </div>
  );
};

export default NewColorForm;
