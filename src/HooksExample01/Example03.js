import React, { useState } from "react";

const Example03 = () => {
  const [age, setAge] = useState(18);
  const [lover, setLover] = useState("小仙女");
  const [name] = useState("龙锅锅");
  return (
    <div>
      <div className="name">姓名：{name}</div>
      <div className="age">年龄：{age}</div>
      <div
        className="lover"
        onClick={() => {
          setLover("黎静");
        }}
      >
        喜欢的人：{lover}
      </div>
    </div>
  );
};

export default Example03;
