import React from 'react';
import { Link } from 'react-router-dom';
import './ColorDetails.css';

function ColorDetails({color, hex, history}) {
  if(!hex) {
    history.push("/colors");
  }

  return (
    <div className="color" style={{ backgroundColor: hex }}>
      <h1>The Amazing {color}!</h1>
      <p>
        <Link to='/colors'>Back to Home</Link>
      </p>
    </div>
  )
}

export default ColorDetails;