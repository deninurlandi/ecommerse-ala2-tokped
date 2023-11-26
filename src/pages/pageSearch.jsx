import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../services/Fetchproducts';
import { addProducts } from '../redux/action/productsSlice';
import LayoutHomeUp from '../componen/layout/layoutHomeUp';
import LayoutHomeDown from '../componen/layout/layoutHomeDown';
import CardProduct from '../componen/pragment/cardProduct';

export default function PageSearch() {
  const { name } = useParams();
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

  const [getProductsSearch, setGetProductsSearch] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const newProduct = products.filter((product) =>
        product.title.toLowerCase().includes(name.toLowerCase()),
      );
      setGetProductsSearch(newProduct);
    }
  }, [products]);

  return (
    <section className="">
      <LayoutHomeUp />
      <LayoutHomeDown />

      <div className=" pt-24 pb-24 w-full gap-[5px] sm:gap-2 md:gap-3 px-5 md:px-10 xl:px-16 justify-center grid grid-cols-[repeat(auto-fit,minmax(9rem,1fr))]   ">
        {getProductsSearch.length > 0 &&
          getProductsSearch.map((product) => (
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
    </section>
  );
}
