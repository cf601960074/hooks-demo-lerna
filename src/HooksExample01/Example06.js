import React, { useState } from "react";

import Counter from "./ChildComponent";
import { CountContext } from "./context-manager";

// const CountContext = createContext();

const Example06 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  );
};

export default Example06;
