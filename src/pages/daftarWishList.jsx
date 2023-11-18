/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import CardProduct from '../componen/pragment/cardProduct';
import { WishList } from '../context/wislish';
import LayoutHomeUp from '../componen/layout/layoutHomeUp';
import LayoutHomeDown from '../componen/layout/layoutHomeDown';
export default function DaftarWishlist() {
  const { wishList, setWishList } = useContext(WishList);
  const products = useSelector((state) => state.products.data);
  console.log(wishList);
  return (
    <section className="">
      <LayoutHomeUp />
      <LayoutHomeDown />

      <div className=" pt-24 pb-24 w-full gap-[5px] sm:gap-2 md:gap-3 px-5 md:px-10 xl:px-16 flex flex-wrap ">
        {wishList.length > 0 &&
          products.length > 0 &&
          wishList.map((item) => {
            if (item.wishcek) {
              const product = products.find((pr) => pr.id === item.id);
              if (product) {
                return (
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
                );
              }
            }
          })}
      </div>
    </section>
  );
}
