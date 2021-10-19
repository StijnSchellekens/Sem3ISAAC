import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009DDC',
    },
    secondary: {
      main: '#661212',
    },
    typography: {
      fontFamily: [
        'Open Sans',
      ].join(','),
    },
  },
});

ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
