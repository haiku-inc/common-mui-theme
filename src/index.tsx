import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import theme from './theme';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
