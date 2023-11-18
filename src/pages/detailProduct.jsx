/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import { getDetailProduct } from '../services/Fetchproducts';
import LayoutHomeUp from '../componen/layout/layoutHomeUp';
import { useParams } from 'react-router-dom';
import { Cart } from '../context/cart';
import { TotalCart } from '../context/totalCart';
import { WishList } from '../context/wislish';

export default function DetailProduct() {
  const { id } = useParams();
  useEffect(() => {
    getDetailProduct(id, (response) => {
      setProduct(response);
    });
  }, []);
  const [product, setProduct] = useState([]);
  const { wishList, setWishList } = useContext(WishList);

  function handleStatWish(id) {
    const updatedWishList = [...wishList];
    const wishIndex = updatedWishList.find((item) => item.id === parseInt(id));

    if (wishIndex) {
      wishIndex.wishcek = !wishIndex.wishcek;
    } else {
      updatedWishList.push({ id: parseInt(id), wishcek: true });
    }

    setWishList(updatedWishList);
    localStorage.setItem('wish', JSON.stringify(updatedWishList));
  }

  useEffect(() => {
    localStorage.setItem('wish', JSON.stringify(wishList));
  }, [wishList]);

  return (
    <>
      <LayoutHomeUp />
      <NavDetailProduct
        id={id}
        price={product.price}
        handleStatWish={handleStatWish}
        wishList={wishList}
      />
      <div className="w-full pt-24 px-5 lg:px-20 xl:px-32 mb-60">
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3">
          {Object.keys(product).length > 0 && (
            <>
              <Image image={product.image} />
              <Description
                title={product.title}
                desc={product.description}
                price={product.price}
                rate={product.rating.rate}
                rev={product.rating.count}
              />
              <ChangeBuy
                id={product.id}
                price={product.price}
                handleStatWish={handleStatWish}
                wishList={wishList}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

function Image(props) {
  const { image } = props;
  return (
    <div className="md:w-1/4 max-w-[20rem] w-full flex flex-col">
      <img
        src={image}
        alt=""
        className="w-full h-[20rem] rounded-lg border p-3 shadow-md object-contain"
      />
    </div>
  );
}

function Description(props) {
  const { title, desc, price, rate, rev } = props;
  return (
    <div className="md:w-[70%] w-full lg:w-2/4 flex flex-col ">
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      <p className="text-sm font-medium text-slate-500">
        {rate}/5 ({rev} reviews)
      </p>
      <h3 className="font-semibold text-2xl">$ {price}</h3>
      <hr className="my-3 border-b-2" />

      <table>
        <tbody>
          <tr>
            <td className="w-1/2">Kondisi</td>
            <td>Baru</td>
          </tr>
          <tr>
            <td>Minimal Pesan</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      <hr className="my-3 border-b-2" />

      <h3 className="font-bold text-base text-cyan-500 mb-2">Detail</h3>
      <p className="text-base font-medium text-slate-900">{desc}</p>
      <hr className="my-3 border-b-2" />
    </div>
  );
}

function ChangeBuy(props) {
  const { id, price, handleStatWish, wishList } = props;
  const { isCart, setIsCart } = useContext(Cart);
  const [qty, setQty] = useState(1);
  const [stock, setIsStock] = useState(30);
  const [totalPrice, setTotalPrice] = useState(0);
  const { setTotalCart } = useContext(TotalCart);

  // const cart = localStorage.getItem('cart');
  // const total = JSON.parse(cart).reduce((acc, item) => {
  //   acc + item.qty;
  // }, 0);
  // setTotal(total)

  useEffect(() => {
    setIsStock(30 - qty);
  }, [qty, isCart]);

  useEffect(() => {
    setTotalPrice(qty * price);
  }, [qty, price]);

  function handleAddQty() {
    if (qty < 30) {
      setQty(qty + 1);
    }
  }
  function handleMinQty() {
    if (qty > 0) {
      setQty(qty - 1);
    }
  }

  function handleAddCart(id) {
    const cartId = isCart.find((item) => item.id == id);

    if (cartId) {
      cartId.total = totalPrice;
      cartId.qty = qty;
    } else {
      setIsCart([
        ...isCart,
        { id, qty: qty, checked: false, total: totalPrice },
      ]);
    }
    localStorage.setItem('cart', JSON.stringify(isCart));
    setTotalCart(isCart.length);
  }

  useEffect(() => {
    setTotalCart(isCart.length);
  }, [isCart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(isCart));
  }, [isCart]);

  const checkWish = wishList.find(
    (item) => item.id === parseInt(id) && item.wishcek === true,
  );
  const svgStyle = checkWish ? 'fill-red-500' : 'fill-slate-400';
  const pStyle = checkWish ? 'Wislish (✅)' : 'Add To Wislish';

  return (
    <div className="hidden md:flex w-full lg:w-1/4 justify-center lg:justify-normal lg:flex-col">
      <div className=" p-5 rounded-xl w-full max-w-lg bg-slate-50 border-cyan-500 border-2 h-auto">
        <div>
          <h3 className="font-bold text-xl text-slate-900 mb-3">
            Atur Jumlah Belanjaan Anda
          </h3>
          <div className="flex items-center mb-3">
            <div className=" w-28 py-[2px] rounded-3xl border border-slate-400 flex items-center justify-evenly mr-3">
              <span
                onClick={handleMinQty}
                className={
                  'text-3xl cursor-pointer' +
                  (qty < 1 ? ' cursor-not-allowed text-slate-400' : '')
                }
              >
                {' '}
                -
              </span>
              <span className="font-bold ">{qty}</span>
              <span
                onClick={handleAddQty}
                className={
                  'text-2xl cursor-pointer' +
                  (qty >= 30 ? ' cursor-not-allowed text-slate-400' : '')
                }
              >
                +
              </span>
            </div>
            <p className="font-medium text-base">Stock : {stock}</p>
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="font-medium text-slate-600">Sub Total</p>
            <b className="text-xl font-bold">$ {totalPrice.toFixed(2)}</b>
          </div>
          <div className="flex justify-between gap-2 lg:flex-wrap mb-2">
            <div className="rounded-3xl border-2 border-cyan-400  px-3 py-1 lg:mb-2 flex items-center">
              <p className="font-bold text-cyan-400">Buy Now</p>
            </div>
            <div
              onClick={() => handleAddCart(id)}
              className="cursor-pointer rounded-3xl border-2 border-cyan-400 bg-cyan-400 px-3 py-1 lg:mb-3 flex items-center"
            >
              <p className="font-bold text-white">+ Cart</p>
            </div>
          </div>
          <hr className="border-b-2 mb-2 border-cyan-500" />
          <div className="flex justify-center items-center">
            <div onClick={() => handleStatWish(id)} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Filled"
                viewBox="0 0 24 24"
                width="20px"
                height="20px"
                className={svgStyle}
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
              </svg>
            </div>
            <p className="ml-2 font-bold">{pStyle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavDetailProduct({ id, price, handleStatWish, wishList }) {
  const [qty, setQty] = useState(1);
  const { isCart, setIsCart } = useContext(Cart);

  function handleAddCart(id) {
    const cartId = isCart.find((item) => item.id == id);

    if (cartId) {
      cartId.total = qty * price;
      cartId.qty = qty;
    } else {
      setIsCart([
        ...isCart,
        { id: parseInt(id), qty: qty, checked: false, total: qty * price },
      ]);
    }
    localStorage.setItem('cart', JSON.stringify(isCart));
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(isCart));
  }, [isCart]);

  const checkWish = wishList.find(
    (item) => item.id === parseInt(id) && item.wishcek === true,
  );
  const svgStyle = checkWish ? 'fill-red-500' : 'fill-slate-400';
  const pStyle = checkWish ? 'Wislish (✅)' : 'Add';

  return (
    <>
      <div className="z-10 border-t-2 bg-white border-cyan-500 md:hidden fixed flex justify-between items-center bottom-0 left-0 right-0 p-3 px-7 sm:px-9">
        <div>
          <div className="flex justify-center items-center">
            <div onClick={() => handleStatWish(id)} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Filled"
                viewBox="0 0 24 24"
                width="20px"
                height="20px"
                className={svgStyle}
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
              </svg>
            </div>
            <p className="ml-2 font-bold">{pStyle}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <button
              className={
                'bg-green-500 transition sm:px-14 font-bold text-white px-9 py-2 rounded-lg'
              }
            >
              BuyNow
            </button>
          </div>
          <div>
            <button
              onClick={() => handleAddCart(id)}
              className={
                'bg-cyan-500 font-bold transition sm:px-14 text-slate-200 px-9 py-2 rounded-lg'
              }
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
