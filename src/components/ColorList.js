/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "../styles/ColorList.css"; // Import the CSS file

const ColorList = ({ colors }) => {
  return (
    <div className="container">
      <h2>Color List</h2>
      <ul className="color-list">
        {colors.map((color) => (
          <li key={color.id} className="color-item">
            <Link to={`/colors/${color.id}`} className="color-link">
              {color.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
