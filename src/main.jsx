import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index.jsx';

import { standardTheme } from './styles/themes/standard.js';
import GlobalStyles from './styles/globalStyles.js';
import AppProvider from './hooks/index.jsx';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripeConfig.js';
import { ThemeProvider } from 'styled-components';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
    <AppProvider>
    <Elements stripe={stripePromise}>
    <RouterProvider router={router}/>
    </Elements>
    <GlobalStyles/>
    <ToastContainer autoClose={3000} theme='colored'/>
    </AppProvider>
    </ThemeProvider >
  </StrictMode>,
)
