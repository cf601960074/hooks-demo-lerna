import React, { useReducer } from "react";

const ReducerExample = () => {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "COUNT_ADD":
        return state + 1;
      case "COUNT_SUB":
        return state - 1;
      default:
        return state;
    }
  }, 0);

  return (
    <div>
      <h2>当前计数器：{count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "COUNT_ADD" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "COUNT_SUB" });
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default ReducerExample;
