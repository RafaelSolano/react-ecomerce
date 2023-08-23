import { createContext, useState } from 'react';

export const ShoppingCartContex = createContext([]);

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  //Product Detail  - open/Close
  const [isProductDetailopen, setIsProductDetailopen] = useState(false);
  const openProductDetail = () => setIsProductDetailopen(true);
  const closeProductDetail = () => setIsProductDetailopen(false);

  //cart Product- open / Close
  const [isCheckoutSideMenuopen, setCheckoutSideMenuopen] = useState(false);
  const openCheckoutSideMenu = () => setCheckoutSideMenuopen(true);
  const closeCheckoutSideMenu = () => setCheckoutSideMenuopen(false);

  //product detail  Show
  const [productToShow, setProductToShow] = useState({});
  //Shoping cart
  const [cartProducts, setCartProducts] = useState([]);

  //Shopping cart  - Order

  const [order, setOrder] = useState([]);

  return (
    <ShoppingCartContex.Provider
      value={{
        count,
        setCount,
        isProductDetailopen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        setCheckoutSideMenuopen,
        isCheckoutSideMenuopen,
        order,
        setOrder


      }}>
      {children}
    </ShoppingCartContex.Provider>
  );
};
