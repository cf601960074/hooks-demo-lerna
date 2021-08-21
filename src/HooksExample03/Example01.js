import React, { useState, useMemo } from "react";
const Example01 = () => {
  const [bestLover, setBestLover] = useState("小仙女");
  const [bestGirl, setBestGirl] = useState("我的女孩");
  const child = useMemo(()=>{
    return <ChildComponent name={bestLover}>{bestGirl}</ChildComponent>
  })
  return (
    <>
      <button
        onClick={() => {
          setBestLover(new Date().getTime());
        }}
      >
        小仙女
      </button>
      <button
        onClick={() => {
          setBestGirl(new Date().getTime() + " , 爱龙锅锅");
        }}
      >
        我的女孩
      </button>
      {child}
    </>
  );
};

const ChildComponent = ({ name, children }) => {
  console.log('111', name, children);
  return (
    <>
      <div>{`${name} , 很爱龙锅锅`}</div>
      <div>{children}</div>
    </>
  );
};

export default Example01;
