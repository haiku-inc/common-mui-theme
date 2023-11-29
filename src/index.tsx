import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import darkTheme from './darkTheme';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>,
);
