import React from 'react';
import ReactDom from 'react-dom/client';

import { ToastContainer } from 'react-toastify';

import { standardTheme } from './styles/themes/standard.js';
import GlobalStyles from './styles/globalStyles.js';
import AppProvider from './hooks/index.jsx';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripeConfig.js';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Elements>
        <GlobalStyles />
        <ToastContainer autoClose={3000} theme='colored' />
      </AppProvider>
    </ThemeProvider >
  </React.StrictMode>,
)
