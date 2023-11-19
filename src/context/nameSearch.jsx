/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const NameSearchContext = createContext();

function NameSearchContextProvider({ children }) {
  const [nameSearch, setNameSearch] = useState('');
  return (
    <NameSearchContext.Provider value={{ nameSearch, setNameSearch }}>
      {children}
    </NameSearchContext.Provider>
  );
}

export const NameSearch = NameSearchContext;
export default NameSearchContextProvider;
