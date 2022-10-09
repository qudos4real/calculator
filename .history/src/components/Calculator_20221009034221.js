import React from "react";
import "./Calculator.css";
import { useState } from "react";

const numbers = [
  [1, 2, 3, "+"],
  [4, 5, 6, "-"],
  [7, 8, 9, "*"],
  ["C", 0, "=", "/"],
];

function Buttons() {
  const [val, setVal] = useState(0);

  const clearVal = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {}
  };
  
  const equalTo = () => {
try {
  setVal(eval(val));
} catch (error) {
  
}
  }

  return (
    <div className="buttonWrapper">
      <input type="text" className="screen" value={val} /> <br />
      {numbers.flat().map((num) => (
        <button
          className="num"
          key={num}
          value={num}
          onClick={
            num === "C"
              ? (e) => clearVal()
              :  num === "C" ? () => console.log("Hello") :
              (e) => setVal(val + e.target.value)
          }
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
