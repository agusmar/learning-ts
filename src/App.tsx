import Counter from "./components/Counter";
import { CounterReducer } from "./components/CounterReducer";
import { TimerContainer } from "./components/TimerContainer";
import { User } from "./components/User";

function App() {
  return (
    <>
      <h1 className="my-2">React + Typescript</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <User />
      <hr />
      <TimerContainer />
      <hr />
      <CounterReducer />
    </>
  );
}

export default App;
