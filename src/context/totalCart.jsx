/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const TotalCartContext = createContext();

function TotalCartContextProvider({ children }) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const [totalCart, setTotalCart] = useState(cart.length);
  return (
    <TotalCartContext.Provider value={{ totalCart, setTotalCart }}>
      {children}
    </TotalCartContext.Provider>
  );
}

export const TotalCart = TotalCartContext;
export default TotalCartContextProvider;
