import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { WishList } from '../../context/wislish';

/* eslint-disable react/prop-types */
export default function CardCart(props) {
  const { wishList, setWishList } = useContext(WishList);
  const {
    image,
    title,
    price,
    qty,
    id,
    total,
    checked,
    handleRemove,
    handleMinusTotal,
    handlePlusTotal,
    handleChecked,
  } = props;

  function handleStatWish(id) {
    const updatedWishList = [...wishList];
    const wishIndex = updatedWishList.findIndex((item) => item.id === id);

    if (wishIndex !== -1) {
      updatedWishList[wishIndex].wishcek = !updatedWishList[wishIndex].wishcek;
    } else {
      updatedWishList.push({ id, wishcek: true });
    }

    setWishList(updatedWishList);
    localStorage.setItem('wish', JSON.stringify(updatedWishList));
  }

  useEffect(() => {
    localStorage.setItem('wish', JSON.stringify(wishList));
  }, [wishList]);

  const checkWish = wishList.find(
    (item) => item.id === id && item.wishcek === true,
  );
  const svgStyle = checkWish ? 'fill-red-500' : 'fill-slate-400';

  return (
    <div className="w-full max-w-2xl">
      <div className="border-b-2 p-3 pb-6 rounded-lg flex gap-4 shadow-md">
        <div>
          <input
            onChange={() => handleChecked(id)}
            type="checkbox"
            checked={checked}
            className="w-4 h-4 accent-sky-500"
          />
        </div>
        <div className="w-1/4 max-w-[122px] h-[23vw] max-h-[122px] border rounded-xl overflow-hidden">
          <Link to={`/product/${id}`}>
            <img src={image} alt="" className="w-full h-full object-contain" />
          </Link>
        </div>
        <div className="flex w-3/4 flex-wrap">
          <div className="w-full mb-2">
            <Link to={`/product/${id}`}>
              <h2 className="text-lg font-medium text-slate-900 mb-[6px] line-clamp-1 mt-2">
                {title}
              </h2>
            </Link>
            <h3 className="font-semibold text-xl mb-2">$ {price}</h3>
            <div className="flex gap-[5px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Filled"
                viewBox="0 0 24 24"
                width="12"
                height="12"
                className="fill-cyan-500"
              >
                <path d="M1.172,19.119A4,4,0,0,0,0,21.947V24H2.053a4,4,0,0,0,2.828-1.172L18.224,9.485,14.515,5.776Z" />
                <path d="M23.145.855a2.622,2.622,0,0,0-3.71,0L15.929,4.362l3.709,3.709,3.507-3.506A2.622,2.622,0,0,0,23.145.855Z" />
              </svg>
              <p className="text-sm text-cyan-500">Tulis Catatan</p>
            </div>
          </div>
          <div className="w-full flex justify-end items-center">
            <div
              className="mx-6 cursor-pointer"
              onClick={() => handleStatWish(id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Filled"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className={svgStyle}
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
              </svg>
            </div>
            <div onClick={() => handleRemove(id)} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="mr-6 fill-red-500"
              >
                <g id="_01_align_center" data-name="01 align center">
                  <path d="M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z" />
                  <rect x="9" y="10" width="2" height="8" />
                  <rect x="13" y="10" width="2" height="8" />
                </g>
              </svg>
            </div>

            <div className="flex border-2 border-cyan-500 p-1 justify-center rounded-3xl relative">
              <div className="absolute -bottom-6">
                <div className="text-sm font-bold">
                  Total : $ {total.toFixed(2)}
                </div>
              </div>
              <div
                onClick={() => handleMinusTotal(id, price)}
                className="cursor-pointer w-7 h-7 text-2xl font-bold rounded-full flex items-center justify-center border-2 border-cyan-500 mr-5"
              >
                -
              </div>
              <span className="text-xl font-bold">{qty}</span>
              <div
                onClick={() => handlePlusTotal(id, price)}
                className="cursor-pointer w-7 h-7 text-xl font-bold rounded-full flex items-center justify-center border-2 ml-5 border-cyan-500"
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
