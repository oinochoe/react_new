import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

const App = () => {
  return (
    <ColorContext.Provider value={{ color: 'red' }}>
      <>
        <ColorBox />
      </>
    </ColorContext.Provider>
  );
};

export default App;
