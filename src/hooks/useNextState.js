import { useState } from "react";

const useNextState = (initState) => {
  const [nextState, setLocalState] = useState(initState);

  const setNextState = (state, callback)=>{
    setLocalState(state)
    callback(state)
  }

  return [nextState, setNextState]
};

export default useNextState