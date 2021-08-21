import React, { useState, useEffect } from "react";

const Example04 = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // 替代了原 class 组件中 componentDidUpdate（监听所有状态更新）、componentDidUnmount
    console.log(`useEffect => You clicked ${count} times`);
    return () => {
      console.log(`componentDidUnmount`);
    };
  });
  useEffect(() => {
    /// 替代了原 class 组件中 componentDidMount
    console.log(`useEffect => You clicked ${count} times`);
    console.log('componentDidMount');
  },[]);

  useEffect(() => {
    /// 替代了原 class 组件中 componentDidUpdate（只监听指定状态更新）
    console.log(`useEffect => You clicked ${count} times`);
  }, [count]);

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
    </div>
  );
};

export default Example04;
