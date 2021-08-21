import React from "react";

import { ColorContext } from "./Color";

const ShowArea = () => {
  const { color } = React.useContext(ColorContext);
  return <div style={{ color: color }}>字体颜色：{color}</div>;
};

export default ShowArea;
