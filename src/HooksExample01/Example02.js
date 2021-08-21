import React, { useState, useEffect } from "react";
import useNextState from '../hooks/useNextState'

const Example02 = () => {
  // const [count, setCount] = useNextState(0);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(()=> 1);
  const change = ()=>{
    // setCount(count + 1, (val)=>{
    //   console.log('val', val);
    // });
    setCount(count + 1)
    console.log('count', count);

    setCount2(count2 + 1);
    // nextFun()
  }

  // const nextFun = ()=>{
  //   console.log('nextFunCount', count);
  // }

  // useEffect(() => {
  //   console.log('useEffectcount', count);
  // }, [count])

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button
        onClick={change}
      >
        Click Me{count2}
      </button>
    </div>
  );
};

export default Example02;
