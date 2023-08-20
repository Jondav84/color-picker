/** @format */

import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/ColorDetails.css";

const ColorDetails = ({ colors }) => {
  const { colorId } = useParams();
  const color = colors.find((c) => c.id === parseInt(colorId));

  if (!color) {
    return <div className="container">Color not found</div>;
  }

  return (
    <div className="container">
      <h2>{color.name}</h2>
      <h3>{color.hex}</h3>
      <div className="color-box" style={{ backgroundColor: color.hex }}></div>
      <Link to="/colors">Back to Color List</Link>
    </div>
  );
};

export default ColorDetails;
