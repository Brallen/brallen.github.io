import React from 'react';

import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import FourOhFourPage from './pages/404';
import GradeCalculatorPage from './pages/GradeCalculator';
import HomePage from './pages/Home';
import Footer from './shared/navigation/Footer';
import Header from './shared/navigation/Header';
import LightTheme from './util/LightTheme';
import { ScrollTargetsProvider } from './util/ScrollTargetsContext';

const classes: { [className: string]: SxProps } = {
  pageWrapper: {
    overflowX: 'hidden',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: LightTheme.palette.background.default,
  },
};

const App: React.FC = () => (
  <Box className="app">
    <Router>
      <CssBaseline />

      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={LightTheme}>
          <ScrollTargetsProvider>
            <Box sx={classes.pageWrapper}>
              <Header />
              <Box component="main">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/grade-calculator" element={<GradeCalculatorPage />} />

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
