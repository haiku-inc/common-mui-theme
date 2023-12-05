import { AppBar, ThemeProvider, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import React, { FC, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  ExplicitThemeType,
  ThemeContext,
  ThemeExplicitContext,
  ThemeToggle,
  ThemeType,
  detectInitialTheme,
  detectThemeExplicit,
} from './ThemeToggle';
import TypoSection from './TypoSection';
import './styles.scss';
import darkTheme from './theme/darkTheme';
import lightTheme from './theme/lightTheme';

const App: FC = () => {
  const [theme, setTheme] = useState<ThemeType>(detectInitialTheme());
  const [themeExplicit, setThemeExplicit] = useState<ExplicitThemeType>(detectThemeExplicit(theme));

  return (
    <ThemeExplicitContext.Provider value={{ themeExplicit, setThemeExplicit }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themeExplicit === 'light' ? lightTheme : darkTheme}>
          <AppBar
            component="nav"
            position="static"
            color="default"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar className="grow">
              <Box className="grow flex gap-[30px] items-center">
                <h1 className="logo">Haiku inc.</h1>

                <ThemeToggle />
              </Box>
            </Toolbar>
          </AppBar>
          <BrowserRouter>
            <Box className="flex">
              <Routes>
                <Route
                  path="/"
                  element={<TypoSection />}
                />
              </Routes>
            </Box>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </ThemeExplicitContext.Provider>
  );
};

export default App;
