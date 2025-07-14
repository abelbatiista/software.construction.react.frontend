import React from 'react';

import { Toast } from '@core/providers';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import './styles.scss';
import App from './App.jsx';
import theme from './theme';

import { UserProvider } from '@core/providers/User/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/udemy.fh.react.client">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Toast.ToastProvider>
            <UserProvider>
              <App />
            </UserProvider>
          </Toast.ToastProvider>
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
