import React from "react";
import { ColorContext, UPDATE_COLOR } from "./Color";

const Buttons = () => {
  const {color, dispatch } = React.useContext(ColorContext);
  console.log('color', color);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: "red" });
        }}
      >
        红色
      </button>
      <button
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: "purple" });
        }}
      >
        紫色
      </button>
    </div>
  );
};

export default Buttons;
