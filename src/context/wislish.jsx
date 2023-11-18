/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const wishListContext = createContext();

function WishListContextProvider({ children }) {
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem('wish')) || [],
  );
  return (
    <wishListContext.Provider value={{ wishList, setWishList }}>
      {children}
    </wishListContext.Provider>
  );
}

export const WishList = wishListContext;
export default WishListContextProvider;
