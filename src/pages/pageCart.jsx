/* eslint-disable react/prop-types */
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

  function handleMinusTotal(id, price) {
    // Find the index of the item in the cart
    const itemIndex = isCart.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      // Create a copy of the cart
      const updatedCart = [...isCart];

      // Decrease the quantity of the specified item
      if (updatedCart[itemIndex].qty > 1) {
        updatedCart[itemIndex].qty = updatedCart[itemIndex].qty - 1;
        updatedCart[itemIndex].total = updatedCart[itemIndex].qty * price;

        // Update state with the new cart
        setIsCart(updatedCart);

        // Update local storage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
    }
  }

  function handlePlusTotal(id, price) {
    // Find the index of the item in the cart
    const itemIndex = isCart.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      // Create a copy of the cart
      const updatedCart = [...isCart];

      // Decrease the quantity of the specified item
      if (updatedCart[itemIndex].qty < 30) {
        updatedCart[itemIndex].qty = updatedCart[itemIndex].qty + 1;
        updatedCart[itemIndex].total = updatedCart[itemIndex].qty * price;

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

  useEffect(() => {
    const checkedItems = isCart.filter((item) => item.checked);
    if (checkedItems.length === isCart.length) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [isCart]);

  const [priceCheckot, setPriceCheckot] = useState(0);
  const [lengthCheckout, setLengthCheckout] = useState(0);

  useEffect(() => {
    const checkoutItem = isCart.filter((item) => item.checked);
    setLengthCheckout(checkoutItem.length);
    const sum = checkoutItem.reduce((acc, item) => {
      return acc + item.total;
    }, 0);
    setPriceCheckot(sum);
  }, [isCart]);

  return (
    <>
      <LayoutHomeUp />
      <NavCart
        handleAllChecked={handleAllChecked}
        allChecked={allChecked}
        priceCheckot={priceCheckot}
        lengthCheckout={lengthCheckout}
      />
      {isCart.length > 0 && (
        <div className="w-full pt-24 px-6 md:flex md:justify-center md:gap-2">
          <div className="flex flex-col gap-3 justify-center items-center pb-24 ">
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
                      total={item.total}
                      handleRemove={handleRemoveCart}
                      handleMinusTotal={handleMinusTotal}
                      handlePlusTotal={handlePlusTotal}
                      handleChecked={handleChecked}
                    />
                  );
                }
              })}
          </div>
          <div className="relative w-1/4 hidden md:flex">
            <div className=" mt-3 border-2 rounded-lg w-full p-2 py-4 h-min fixed max-w-[170px]  lg:max-w-[290px]">
              <div className="mb-5">
                <input
                  onChange={handleAllChecked}
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
              <div className="flex flex-col items-end justify-center mb-4">
                <p className="font-bold text-base">Total Harga :</p>
                <p className="font-bold text-lg leading-4">
                  {priceCheckot === 0 ? '-' : '$ ' + priceCheckot.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  disabled={priceCheckot === 0}
                  className={
                    'bg-cyan-500 font-bold text-slate-200 px-3 py-2 rounded-lg' +
                    (priceCheckot === 0 ? ' opacity-50 cursor-not-allowed' : '')
                  }
                >
                  Checkout
                  {lengthCheckout > 0 ? ' (' + lengthCheckout + ')' : ''}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavCart(props) {
  const { allChecked, handleAllChecked, priceCheckot, lengthCheckout } = props;

  return (
    <>
      <div className="z-10 border-t-2 bg-white border-cyan-500 md:hidden fixed flex justify-between items-center bottom-0 left-0 right-0 p-5 px-7 sm:px-9">
        <div>
          <input
            onChange={handleAllChecked}
            type="checkbox"
            checked={allChecked}
            className="w-4 h-4 accent-sky-500"
            id="allCheck"
          />
          <label
            htmlFor="allCheck"
            className="ml-3 font-semibold text-slate-800 text-lg"
          >
            Ceklis Semua
          </label>
        </div>
        <div className="flex flex-row gap-3">
          <div className="flex flex-col items-end justify-center">
            <p className="font-bold text-base ">Total Harga :</p>
            <p className="font-bold text-lg leading-4">
              {priceCheckot === 0 ? '-' : '$ ' + priceCheckot.toFixed(2)}
            </p>
          </div>
          <button
            disabled={priceCheckot === 0}
            className={
              'bg-cyan-500 font-bold text-slate-200 px-3 py-2 rounded-lg' +
              (priceCheckot === 0 ? ' opacity-50 cursor-not-allowed' : '')
            }
          >
            Checkout
            {lengthCheckout > 0 ? ' (' + lengthCheckout + ')' : ''}
          </button>
        </div>
      </div>
    </>
  );
}
