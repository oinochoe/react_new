import React, { Component } from "react";

class App extends Component {
  state = {
    SplitMe: null
  };
  handleClick = async () => {
    const loadModule = await import("./SplitMe");
    this.setState({
      SplitMe: loadModule.default
    });
  };
  render() {
    const { SplitMe } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p onClick={this.handleClick}>Hello React!</p>
          {SplitMe && <SplitMe />}
        </header>
      </div>
    );
  }
}

export default App;
