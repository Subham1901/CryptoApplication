import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const font = extendTheme({
  fonts: {
    heading: `'Rubik', sans-serif;`,
    body: `'Rubik', sans-serif`,
  },
});
root.render(
  <StrictMode>
    <ChakraProvider theme={font}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
