import React, { useState } from "react";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";
import { useState } from "react";


function App() {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  })
  return (
    <div>
      <Screen value={calc.num ? calc.num : calc.res} />
      <Buttons />
    </div>
  );
}

export default App;
