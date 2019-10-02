import React, { useState, useCallback } from "react";
import useEventListener from "../hooks/useEventListener";

const MouseTracker = () => {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  const handler = useCallback(e => {
    setPoint({ x: e.clientX, y: e.clientY });
  }, []);

  useEventListener("mousemove", handler);

  return (
    <div>
      Mouse is at ({point.x}, {point.y})
    </div>
  );
};

export default MouseTracker;
