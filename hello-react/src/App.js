import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';

const App = () => {
  return (
    <>
      <MyComponent name={'영민'} favoriteNumber={3}>
        리액트
      </MyComponent>
      <Counter />
      <Say />
      <EventPractice />
    </>
  );
};

export default App;
