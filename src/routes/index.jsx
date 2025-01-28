
import { Route, Routes, } from 'react-router-dom';

import { Login, Home, Menu, Register, Cart, CompletePayment,
     Checkout, NewProducts, EditProducts, Products, Orders } from '../containers';
import { UserLayout } from '../layout/UserLayout';
import { AdminLayout } from '../layout/AdminLayout';



export function Router() {
    return (
        <Routes>
            <Route path='/' element={<UserLayout/>} >
            <Route path='/' element={<Home/>} />
            <Route path='/cardapio' element={<Menu/>} />
            <Route path='/carrinho' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/complete' element={<CompletePayment/>} />
            </Route>

            <Route path='/admin' element={<AdminLayout/>}>
                <Route path='/admin/pedidos' element={<Orders/>}/>
                <Route path='/admin/novo-produto' element={<NewProducts/>}/>
                <Route path='/admin/editar-produto' element={<EditProducts/>}/>
                <Route path='/admin/produtos' element={<Products/>}/>
            </Route>
            
            <Route path='/login' element={<Login/>} />
            <Route path='/cadastro' element={<Register/>} />
        </Routes>
    )
}


/* modelo antes do Outlet{<UserLayout/>}
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
    {
        path: '/checkout',
        element: <Checkout/>,
    },
    {
        path: '/complete',
        element: <CompletePayment/>,
    },
    
]);*/