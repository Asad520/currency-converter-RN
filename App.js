import React from 'react';
import Navigation from './src/navigation';
import {ConversionContextProvider} from './src/utils/context';

const App = () => (
  <ConversionContextProvider>
    <Navigation />
  </ConversionContextProvider>
);
export default App;
