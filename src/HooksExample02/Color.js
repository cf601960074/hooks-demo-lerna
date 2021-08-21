import React from "react";

/// 颜色共享组件

/**
 * 共享 Context
 */
export const ColorContext = React.createContext({});

/**
 * action 常量定义
 */
export const UPDATE_COLOR = "UPDATE_COLOR";

/**
 * 定义 useReducer 回调函数
 * @param {*}} state
 * @param {*} action
 */
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color;
    default:
      return state;
  }
};

/**
 * Color 组件
 * @param {*} props
 */
export const Color = (props) => {
  // 使用 useReducer
  const [color, dispatch] = React.useReducer(reducer, "blue");
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  );
};
