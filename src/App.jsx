/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import LayoutHomeDown from './componen/layout/layoutHomeDown';
import LayoutHomeUp from './componen/layout/layoutHomeUp';
import { getProducts } from './services/Fetchproducts';
import { useDispatch } from 'react-redux';
import { addProducts } from './redux/action/productsSlice';
import Products from './pages/products';
import DetailProduct from './pages/detailProduct';
import { TotalCart } from './context/totalCart';
import Transaction from './pages/transaction';
import Profil from './pages/profil';
import DaftarWishlist from './pages/daftarWishList';

function App() {
  const { totalCart } = useContext(TotalCart);
  const [home, setHome] = useState(true);
  const [wish, setWish] = useState(false);
  const [transac, setTransac] = useState(false);
  const [profil, setProfil] = useState(false);

  return (
    <>
      <LayoutHomeUp total={totalCart} />
      {home && <Products />}
      {wish && <DaftarWishlist />}
      {transac && <Transaction />}
      {profil && <Profil />}

      <LayoutHomeDown
        home={home}
        setHome={setHome}
        wish={wish}
        setWish={setWish}
        transac={transac}
        setTransac={setTransac}
        profil={profil}
        setProfil={setProfil}
      />
    </>
  );
}

export default App;
