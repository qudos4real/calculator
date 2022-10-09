import React, {useState} from "react";
import Buttons from "./components/Buttons";
import Screen from "./components/screen";


function App() {
  // let [calc, setCalc] = useState({
  //   sign: "",
  //   num: 0,
  //   res: 0,
  // })
  return (
    <div>
     <Screen />
     <Buttons />
    </div>
  );
}

export default App;
