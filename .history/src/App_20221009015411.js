import Buttons from "./components/Buttons";
import Screen from "./components/Screen";


const numbers = [1,2,3,"+"]


const numbers = [
  [1, 2, 3, "+"],
  [4, 5, 6, "-"],
  [7, 8, 9, "*"],
  ["C", 0, "=", "/"],
];

function App() {
  return (
    <div>
     <Main />
     <Buttons />
    </div>
  );
}

export default App;
