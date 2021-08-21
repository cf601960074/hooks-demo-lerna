import React from "react";
import ShowArea from "./ShowArea";
import Buttons from "./Buttons";
import { Color } from "./Color";

const Example02 = () => {
  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  );
};

export default Example02;
