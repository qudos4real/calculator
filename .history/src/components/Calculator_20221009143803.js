import React from "react";
import "./Calculator.css";
import { useState } from "react";
import Title from "./Title";

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
    } catch (error) {
      setVal("");
    }
  };

  const equalTo = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      setVal("Error");
    }
  };

  return (
    <Title />
    <div className="buttonWrapper">
      <input type="text" className="screen" value={val} onChange={(e) => setVal(e.target.value)} /> <br />
      {numbers.flat().map((num) => (
        <button
          className="num"
          key={num}
          value={num}
          onClick={
            num === "C"
              ? (e) => clearVal()
              : num === "="
              ? () => equalTo()
              : (e) => setVal(val + e.target.value)
          }
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
