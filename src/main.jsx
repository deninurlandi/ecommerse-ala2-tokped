import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import products from './redux/products.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import DetailProduct from './pages/detailProduct.jsx';
import CartContextProvider from './context/cart.jsx';
import TotalCartContextProvider from './context/totalCart.jsx';
import PageCart from './pages/pageCart.jsx';
import WishListContextProvider from './context/wislish.jsx';
import DaftarWishlist from './pages/daftarWishList.jsx';
import Profil from './pages/profil.jsx';
import Products from './pages/products.jsx';
import Transaction from './pages/transaction.jsx';
import NameSearchContextProvider from './context/nameSearch.jsx';
import PageSearch from './pages/pageSearch.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/product/:id',
    element: <DetailProduct />,
  },
  {
    path: '/cart',
    element: <PageCart />,
  },
  {
    path: '/transaction',
    element: <Transaction />,
  },
  {
    path: '/wishlist',
    element: <DaftarWishlist />,
  },
  {
    path: '/profile',
    element: <Profil />,
  },
  {
    path: '/search/:name',
    element: <PageSearch />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={products}>
      <CartContextProvider>
        <NameSearchContextProvider>
          <TotalCartContextProvider>
            <WishListContextProvider>
              <RouterProvider router={router} />
            </WishListContextProvider>
          </TotalCartContextProvider>
        </NameSearchContextProvider>
      </CartContextProvider>
    </Provider>
  </React.StrictMode>,
);
