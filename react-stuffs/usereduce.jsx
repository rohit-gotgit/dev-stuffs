import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
}

export default function CounterReducer() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
    </div>
  );
}
