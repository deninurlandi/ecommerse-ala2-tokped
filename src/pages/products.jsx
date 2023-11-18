import { useSelector } from 'react-redux';
import CardProduct from '../componen/pragment/cardProduct';
import { useContext } from 'react';
import { Cart } from '../context/cart';

export default function Products() {
  const products = useSelector((state) => state.products.data);
  const { isCart } = useContext(Cart);
  console.log(isCart);
  return (
    <>
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
