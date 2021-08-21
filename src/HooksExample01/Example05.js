import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => {
  // useEffect 传入的第二个参数，一个数组，如果为空数组，表示只有在当前组件被销毁是，才执行
  // 如案例所示匿名回调，也就是 componentDidUnmount
  // 如果数组有值，即有状态变化是，便执行匿名回调
  useEffect(() => {
    console.log(`useEffect => 进入到 Index Page 了`);
    // 添加匿名回调，实现 componentDidUnmount 生命周期
    return () => {
      console.log(`离开 Index Page 了`);
    };
  }, []);
  return <h2>Index Page</h2>;
};

const List = () => {
  useEffect(() => {
    console.log(`useEffect => 进入到 List Page 了`);
  });
  return <h2>List Page</h2>;
};

const Example04 = () => {
  const [count, setCount] = useState(0);
  /// useEffect 是异步的
  useEffect(() => {
    /// 替代了原 class 组件中 componentDidMount 和 componentDidUpdate 生命周期函数
    console.log(`useEffect => You clicked ${count} times`);
  });
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

      <Router>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/list/">List</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
      </Router>
    </div>
  );
};

export default Example04;
