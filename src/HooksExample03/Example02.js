import React, { useState, useEffect, useRef, useCallback } from "react";

const Example02 = () => {
  const [text, setText] = useState("小仙女");
  const inputEle = useRef(null);
  const textInput = useRef(null);

  useEffect(() => {
    textInput.current = text;
    console.log(`textInput.current >> ${textInput.current}`);
  });

  const handleBtnClick = useCallback(() => {
    inputEle.current.value = `${text}小仙女`;
    console.log(inputEle);
  }, [text]);

  return (
    <div>
      <input type="text" ref={inputEle} />
      <button onClick={handleBtnClick}>在 Input 上显示文字</button>
      <br />
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />
    </div>
  );
};

export default Example02;
