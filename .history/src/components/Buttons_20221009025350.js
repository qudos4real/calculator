import React from "react";
import "./Buttons.css";
import { useState } from 'react'

const numbers = [
  [1, 2, 3, "+"],
  [4, 5, 6, "-"],
  [7, 8, 9, "*"],
  ["C", 0, "=", "/"],
];



function Buttons({ val, setVal }) {
  return (
    <div className="buttonWrapper">
      <input type="text" className='screen' value={val}/>
      {numbers.flat().map((num) => {
        return (
          <button className="num" key={num} value={num} onClick={(e) => setVal(val + e.target.value)
          } >
            {num}
          </button>
        )
      })}
{/* {numbers.map((num) => {
                return (
                    <button key={num} className="num" value={num} onClick={() => {
                        console.log(`${num} clicked`)
                    }
                    } >{num}</button>
                )
            })} */}
    </div >
  );
}

export default Buttons;
