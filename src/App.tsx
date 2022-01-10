import React from 'react';

import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FourOhFourPage from './pages/404';
import HomePage from './pages/Home';
import Footer from './shared/navigation/Footer';
import DefaultHeader from './shared/navigation/header/DefaultHeader';
import LightTheme from './util/LightTheme';

const App: React.FC = () => (
  <Box className="app" sx={{ mt: 9 }}>
    <Router>
      <CssBaseline />

      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={LightTheme}>
          <DefaultHeader />
          <Box component="main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* 404 page */}
              <Route path="*" element={<FourOhFourPage />} />
            </Routes>
          </Box>
          <Footer />
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  </Box>
);

export default App;
