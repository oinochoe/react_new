import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';

const App = () => {
  return (
    <>
      <MyComponent name={'영민'} favoriteNumber={3}>
        리액트
      </MyComponent>
      <Counter />
    </>
  );
};

export default App;
