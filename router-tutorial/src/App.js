import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </>
  );
}

export default App;
