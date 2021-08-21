import React, { useContext } from "react";
import { CountContext } from "./context-manager";

const Counter = () => {
  let count = useContext(CountContext);
  return <h2>子组件：{count}</h2>;

  // class
  // return (
  //   <h2>
  //     <CountContext.Consumer>
  //       {value => console.log("context", value)}
  //     </CountContext.Consumer>
  //   </h2>);
};

export default Counter;
