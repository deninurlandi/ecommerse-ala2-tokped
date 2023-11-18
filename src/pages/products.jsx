/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import CardProduct from '../componen/pragment/cardProduct';
import { useContext, useEffect } from 'react';
import { Cart } from '../context/cart';
import { getProducts } from '../services/Fetchproducts';
import { addProducts } from '../redux/action/productsSlice';
import LayoutHomeUp from '../componen/layout/layoutHomeUp';
import LayoutHomeDown from '../componen/layout/layoutHomeDown';

export default function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts((response) => {
      dispatch(addProducts(response));
    });
  }, []);

  const products = useSelector((state) => state.products.data);
  const { isCart } = useContext(Cart);
  console.log(isCart);
  return (
    <>
      <LayoutHomeUp />
      <LayoutHomeDown />
      <div className="pt-24 pb-24 w-full gap-[5px] sm:gap-2 md:gap-3 px-5 md:px-10 xl:px-16 justify-center grid grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] md:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] ">
        {products.length > 0 &&
          products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Image
                key={`image-${product.id}`}
                image={product.image}
                id={product.id}
              />
              <CardProduct.Title
                key={`title-${product.id}`}
                title={product.title}
              />
              <CardProduct.Price
                key={`price-${product.id}`}
                price={product.price}
              />
            </CardProduct>
          ))}
      </div>
    </>
  );
}
