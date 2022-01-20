import React from 'react';

import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FourOhFourPage from './pages/404';
import HomePage from './pages/Home';
import Footer from './shared/navigation/Footer';
import Header from './shared/navigation/Header';
import LightTheme from './util/LightTheme';
import { ScrollTargetsProvider } from './util/ScrollTargetsContext';

const App: React.FC = () => (
  <Box className="app">
    <Router>
      <CssBaseline />

      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={LightTheme}>
          <ScrollTargetsProvider>
            <Box sx={{ overflowX: 'hidden' }}>
              <Header />
              <Box component="main">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="*" element={<HomePage />} />  {/* Send all URLs to the homepage for now until the 404 page is done */ }
                  {/* <Route path="*" element={<FourOhFourPage />} /> */}
                </Routes>
              </Box>
              <Footer />
            </Box>
          </ScrollTargetsProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  </Box>
);

export default App;
