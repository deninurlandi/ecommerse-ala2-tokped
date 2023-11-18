/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import LayoutHomeUp from '../componen/layout/layoutHomeUp';
import CardCart from '../componen/pragment/cardCart';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../services/Fetchproducts';
import { addProducts } from '../redux/action/productsSlice';
import { Cart } from '../context/cart';
import { TotalCart } from '../context/totalCart';

export default function PageCart() {
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts((response) => {
      dispatch(addProducts(response));
    });
  }, []);
  const { isCart, setIsCart } = useContext(Cart);
  const [newCart, setNewCart] = useState(isCart);
  const { setTotalCart } = useContext(TotalCart);

  const products = useSelector((state) => state.products.data);

  function handleRemoveCart(id) {
    const cartUpdate = isCart.filter((item) => item.id !== id);
    setNewCart(cartUpdate);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }
  useEffect(() => {
    setIsCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setTotalCart(newCart.length);
  }, [newCart]);

  function handleMinusTotal(id) {
    // Find the index of the item in the cart
    const itemIndex = isCart.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      // Create a copy of the cart
      const updatedCart = [...isCart];

      // Decrease the quantity of the specified item
      if (updatedCart[itemIndex].qty > 1) {
        updatedCart[itemIndex].qty = updatedCart[itemIndex].qty - 1;

        // Update state with the new cart
        setIsCart(updatedCart);

        // Update local storage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
    }
  }

  function handlePlusTotal(id) {
    // Find the index of the item in the cart
    const itemIndex = isCart.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      // Create a copy of the cart
      const updatedCart = [...isCart];

      // Decrease the quantity of the specified item
      if (updatedCart[itemIndex].qty < 30) {
        updatedCart[itemIndex].qty = updatedCart[itemIndex].qty + 1;

        // Update state with the new cart
        setIsCart(updatedCart);

        // Update local storage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
    }
  }

  function handleChecked(id) {
    const cartUpdate = isCart.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setNewCart(cartUpdate);
    localStorage.setItem('cart', JSON.stringify(cartUpdate));
  }

  const [allChecked, setAllChecked] = useState(false);
  function handleAllChecked() {
    const cartUpdate = isCart.map((item) => {
      return { ...item, checked: !allChecked };
    });
    setNewCart(cartUpdate);
    localStorage.setItem('cart', JSON.stringify(cartUpdate));
    setAllChecked(!allChecked);
  }

  return (
    <>
      <LayoutHomeUp />
      {isCart.length > 0 && (
        <div className="w-full pt-24 px-6">
          <div className="w-full flex flex-col gap-3 justify-center items-center mx-auto ">
            <div className="w-full max-w-2xl p-3">
              <input
                onClick={handleAllChecked}
                type="checkbox"
                checked={allChecked}
                className="w-4 h-4 accent-sky-500"
                id="allCheck"
              />
              <label
                htmlFor="allCheck"
                className="ml-2 font-semibold text-slate-800 text-lg"
              >
                Ceklis Semua
              </label>
            </div>
            {isCart.length > 0 &&
              products.length > 0 &&
              isCart.map((item) => {
                const product = products.find((pr) => pr.id === item.id);
                if (product) {
                  return (
                    <CardCart
                      key={item.id}
                      id={item.id}
                      checked={item.checked}
                      image={product.image}
                      title={product.title}
                      price={product.price}
                      qty={item.qty}
                      handleRemove={handleRemoveCart}
                      handleMinusTotal={handleMinusTotal}
                      handlePlusTotal={handlePlusTotal}
                      handleChecked={handleChecked}
                    />
                  );
                }
              })}
          </div>
        </div>
      )}
    </>
  );
}
