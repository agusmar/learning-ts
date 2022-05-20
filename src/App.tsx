import Counter from "./components/Counter";
import { Counter_reducer } from "./components/Counter_reducer";
import { TimerContainer } from "./components/TimerContainer";
import { User } from "./components/User";

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <Counter />
      <hr />
      <User />
      <hr />
      <h2> useEffect - useRef </h2>
      <TimerContainer />
      <hr />
    </>
  );
}

export default App;
