import React, { useState } from "react";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";


const numbers = [
  [1, 2, 3, "+"],
  [4, 5, 6, "-"],
  [7, 8, 9, "*"],
  ["C", 0, "=", "/"],
];

function App() {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  })
  return (
    <div>
      <Screen value={calc.num ? calc.num : calc.res} />
      {numbers.map((num) => {
        return (
          <button>
            {num}
          </button>
        )
      })}
      })
    </div>
  );
}

export default App;
