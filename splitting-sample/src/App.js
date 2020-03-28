import React, { useState, Suspense } from "react";
import loadable from "@loadable/component";
const SplitMe = loadable(() => import("./SplitMe"));

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p onClick={onClick}>Hello React!</p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
