import React from "react";
import "./Buttons.css";




function Buttons({value, onClick}) {
  return (
    <div className="buttonWrapper">
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
