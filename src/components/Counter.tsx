import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const sum = (num: number = 1): void => {
    setCounter(counter + num);
  };

  return (
    <div className="my-4">
      <h4>Counter</h4>
      <div>Value: {counter} </div>
      <button onClick={() => sum()} className="btn btn-outline-primary mt-2">
        +1
      </button>
      <button onClick={() => sum(2)} className="btn btn-outline-primary mt-2">
        +2
      </button>
      <button
        onClick={() => setCounter(0)}
        className="btn btn-outline-danger mt-2"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
