import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index.jsx';

import GlobalStyles from './styles/globalStyles.js';
import AppProvider from './hooks/index.jsx';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripeConfig.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <Elements stripe={stripePromise}>
    <RouterProvider router={router}/>
    </Elements>
    <GlobalStyles/>
    <ToastContainer autoClose={3000} theme='colored'/>
    </AppProvider>
  </StrictMode>,
)
