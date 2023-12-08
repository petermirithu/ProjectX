import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './pages/Home';
import { CssBaseline } from '@mui/material';
import './App.css'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#606c38'
      },
      secondary: {
        main: "#dda15e"
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home></Home>
    </ThemeProvider>
  )
}

export default App
