/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import CardProduct from '../componen/pragment/cardProduct';
import { useEffect } from 'react';

import { getProducts } from '../services/Fetchproducts';
import { addProducts } from '../redux/action/productsSlice';
import LayoutHomeUp from '../componen/layout/layoutHomeUp';
import LayoutHomeDown from '../componen/layout/layoutHomeDown';
import ImageSlider from './imageSlider';
import Footer from '../componen/layout/footer';

export default function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts((error, response) => {
      if (error) {
        console.error('Error fetching products:', error);
        // Tambahkan logika atau pesan kesalahan yang sesuai untuk pengguna
      } else {
        dispatch(addProducts(response));
      }
    });
  }, []);

  const products = useSelector((state) => state.products.data);
  return (
    <>
      <LayoutHomeUp />
      <LayoutHomeDown />
      <ImageSlider />
      <div className="pt-8 relative pb-24 w-full gap-[5px] sm:gap-2 md:gap-3 px-5 md:px-10 xl:px-28 2xl:px-28 justify-center grid grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] md:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] ">
        {products &&
          products.length > 0 &&
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

        <Footer />
      </div>
    </>
  );
}
