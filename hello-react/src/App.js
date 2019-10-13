import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <>
        <MyComponent name={'영민'} favoriteNumber={3}>
          리액트
        </MyComponent>
        <Counter />
        <Say />
        <EventPractice />
        <ValidationSample />
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 아래로
        </button>
      </>
    );
  }
}

export default App;
