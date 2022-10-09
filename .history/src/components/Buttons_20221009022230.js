import React from "react";
import "./Buttons.css";

const numbers = [
  [1, 2, 3, "+"],
  [4, 5, 6, "-"],
  [7, 8, 9, "*"],
  ["C", 0, "=", "/"],
];

const clickHandler = (num) => {
  console.log({num})
}

function Buttons({value, onClick}) {
  return (
    <div className="buttonWrapper">
      {numbers.flat().map(({num}) => {
        return (
          <button key={num} className="num" onClick={clickHandler}>{num}</button>
        )
      })
      }
            {/* {numbers.map((num) => {
                return (
                    <button key={num} className="num" value={num} onClick={() => {
                        console.log(`${num} clicked`)
                    }
                    } >{num}</button>
                )
            })} */}
    </div>
  );
}

export default Buttons;
