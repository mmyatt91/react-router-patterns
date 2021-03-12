import React from 'react';
import { Link } from "react-router-dom";
import "./ColorList.css";

function ColorList({colors}) {
  const colorLinks = Object.keys(colors).map(colorName => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ))
  return (
    <div className="ColorList">
      <header className="ColorList-header">
        <h1 className="ColorList-title">  
          Welcome to Color Factory!
        </h1>
        <h2><Link to="/colors/new">Add A Color</Link></h2>
      </header>
      <div className="ColorList-intro">
        <h2>
        Select A Color:
        </h2>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  )
};

export default ColorList;