/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const CartContext = createContext();
function CartContextProvider({ children }) {
  const [isCart, setIsCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || [],
  );

  return (
    <CartContext.Provider value={{ isCart, setIsCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const Cart = CartContext;
export default CartContextProvider;
