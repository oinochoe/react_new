import React from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';

const App = () => {
  return (
    <ColorProvider>
      <>
        <ColorBox />
      </>
    </ColorProvider>
  );
};

export default App;
