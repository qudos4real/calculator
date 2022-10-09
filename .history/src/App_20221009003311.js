import React, {useState} from "react";
import Buttons from "./components/Buttons";
import Main from "./components/Main";


function App() {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  })
  return (
    <div>
     <Main />
     <Buttons />
    </div>
  );
}

export default App;
