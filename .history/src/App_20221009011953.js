import React, { useState } from "react";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";



function App() {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  })
  return (
    <div>
      <Screen value={calc.num ? calc.num : calc.res} />
      <Buttons value={calc.num} onClick={() => {
              console.log(`${num} clicked`);
            }}/>
    </div>
  );
}

export default App;
