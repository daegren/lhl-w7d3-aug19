import React from "react";
import "./App.css";
import MouseTracker from "./components/MouseTracker";
import KeyTracker from "./components/KeyTracker";

function App() {
  return (
    <div className="App">
      <MouseTracker />
      <KeyTracker />
    </div>
  );
}

export default App;
