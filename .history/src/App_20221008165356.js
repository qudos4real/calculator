import ButtonWrapper from "./components/ButtonWrapper";
import { Display } from "./components/Display";
import Wrapper from "./components/Wrapper";



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
