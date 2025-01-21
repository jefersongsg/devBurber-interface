
import { createBrowserRouter } from 'react-router-dom';

import { Login, Home, Menu, Register, Cart } from '../containers';
import { Footer, Header } from '../components';


export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
            <Header/>
            <Home/>
            <Footer/>
            </>
        ),
    },
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/cadastro',
        element: <Register/>,
    },
    {
        path: '/cardapio',
        element: (
            <>
            <Header/>
            <Menu/>
            </>
        ),
    },
    {
        path: '/carrinho',
        element: <Cart/>,
    },
    
]);