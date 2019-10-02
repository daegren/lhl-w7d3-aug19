import { useRef, useEffect } from "react";

const useEventListener = (eventName, handler, element = window) => {
  const eventHandler = useRef();

  useEffect(() => {
    eventHandler.current = handler;
    console.log("setting eventHandler");
  }, [handler]);

  useEffect(() => {
    const handleEvent = e => {
      eventHandler.current(e);
    };

    element.addEventListener(eventName, handleEvent);
    console.log("adding event listener for", eventName);

    return () => {
      element.removeEventListener(eventName, handleEvent);
      console.log("removing event listener for", eventName);
    };
  }, [eventName, element]);
};

export default useEventListener;
