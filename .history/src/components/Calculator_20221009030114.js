import React from "react";
import "./Calculat.css";
import { useState } from 'react'

const numbers = [
  [1, 2, 3, "+"],
  [4, 5, 6, "-"],
  [7, 8, 9, "*"],
  ["C", 0, "=", "/"],
];



function Buttons() {
  const [val, setVal] = useState(0)
  return (
    <div className="buttonWrapper">
      <input type="text" className='screen' value={val}/> <br />
      {numbers.flat().map((num) => {
        return (
          <button className="num" key={num} value={num} onClick={(e) => setVal(val + e.target.value)
          } >
            {num}
          </button>
        )
      })} 
    </div >
  );
}

export default Buttons;
