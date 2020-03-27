import React from "react";
function App() {
  const onClick = () => {
    import("./notify").then(result => result.default());
  };
  return (
    <>
      <p onClick={onClick}>Hello React</p>
    </>
  );
}

export default App;
