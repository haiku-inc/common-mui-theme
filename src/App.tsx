import Box from '@mui/material/Box';
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TypoSection from './TypoSection';
import './styles.scss';

const App: FC = () => {
  return (
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
  );
};

export default App;
