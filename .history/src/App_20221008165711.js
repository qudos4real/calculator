import ButtonWrapper from "./components/ButtonWrapper";
import { Display } from "./components/Display";
import Wrapper from "./components/Wrapper";
import Button from "./components/Button";


function App() {
  return (
    <div>
      <Wrapper>
      <Display />
      <ButtonWrapper>
        <button className="" value="0" onClick={() => {
          console.log("Button clicked")
        }}/>
      </ButtonWrapper>
      </Wrapper>
    </div>
  );
}

export default App;
