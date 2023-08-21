import { createContext }  from 'react';

const ShopingCartContex = createContext();


// eslint-disable-next-line react/prop-types
const ShopingCartProvider = ({children}) => {
  return (
    <ShopingCartContex.Provider>
      {children}
    </ShopingCartContex.Provider>
  )
}

export default ShopingCartProvider