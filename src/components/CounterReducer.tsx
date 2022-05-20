import { useReducer } from "react";

const initialState = {
  counter: 10,
};

type ActionType =
  | { type: "increase" }
  | { type: "decrease" }
  | { type: "custom"; payload: number };

const counterReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "decrease":
      return {
        ...state,
        counter: state.counter - 1,
      };

    case "custom":
      return {
        ...state,
        counter: action.payload,
      };

    default:
      return state;
  }
};

export const CounterReducer = () => {
  const [counterState, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div className="my-5">
      <h2>useReducer</h2>
      <h5>Counter: {counterState.counter}</h5>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "increase" })}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "decrease" })}
      >
        -1
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: "custom", payload: 100 })}
      >
        100
      </button>
    </div>
  );
};
