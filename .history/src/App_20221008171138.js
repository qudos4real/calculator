import ButtonWrapper from "./components/ButtonWrapper";
import { Display } from "./components/Display";
import Wrapper from "./components/Wrapper";
import Button from "./components/Button";


const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <div>
      <Wrapper />
        <Display />
        <ButtonWrapper />
          {btnValues.map((btn, i) => {
            return (
              <Button key={i} className={btn === "=" ? "equals" : ""} value={btn} onClick={() => {
                console.log(`${btn} clicked`)
              }} />
            )
          })}
 
    </div>
  );
}

export default App;
