/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
export default function CardProduct({ children }) {
  return (
    <div className=" md:max-w-[18rem] max-w-[12rem] flex flex-col justify-between bg-white rounded-lg shadow-md overflow-hidden pb-5 box-border border">
      {children}
    </div>
  );
}

CardProduct.Image = Image;
CardProduct.Title = Title;
CardProduct.Price = Price;
function Image(props) {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt=""
        className="w-full mb-3 md:h-[16rem] h-[9rem] sm:h-[12rem] object-contain"
      />
    </Link>
  );
}

function Title(props) {
  const { title } = props;
  return (
    <div className="px-3">
      <h4 className="text-base font-medium text-slate-900 mb-3 line-clamp-2">
        {title}
      </h4>
    </div>
  );
}

function Price(props) {
  const { price } = props;
  return (
    <div className="px-3">
      <p className="text-lg font-semibold text-slate-900">$ {price}</p>
      <div className="flex items-center">
        <p className="text-sm font-medium line-through text-slate-900">
          ${(price + (price * 10) / 100).toFixed(2)}{' '}
        </p>
        <p className="text-xs shadow rounded-lg px-1.5 py-0.5 ml-3 font-semibold text-white bg-emerald-500">
          Discont 10%
        </p>
      </div>
    </div>
  );
}
