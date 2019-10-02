import React, { useState, useCallback } from "react";
import useEventListener from "../hooks/useEventListener";

const KeyTracker = () => {
  const [keysPressed, setKeysPressed] = useState("");

  const handler = useCallback(e => {
    setKeysPressed(keysPressed => keysPressed + e.key);
  }, []);

  useEventListener("keypress", handler);

  return (
    <div>
      <h2>Keys Pressed:</h2>
      {keysPressed}
    </div>
  );
};

export default KeyTracker;
