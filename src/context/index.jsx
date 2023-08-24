import { createContext, useEffect, useState } from 'react';

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

  //get ptoducts
  const [searchBar, setSearchBar] = useState('')

  //filter items
  const [items, setItems] = useState(null)

  const [filteredItems, setfilteredItems] = useState([])



  const [category, setCategory] = useState(null)

  


  const filteredItemsByTitle = (items, searchBar,  ) => {
    return (items?.filter((item) =>
    item.title.toLocaleLowerCase().includes(searchBar.toLocaleLowerCase())
  ))
  };

  //categorys
  const filteredByCategory = (items, category) => {
    return items?.filter((item) => item.category.includes(category));
  };

  
  useEffect(() => {
    if (searchBar) setfilteredItems(filteredItemsByTitle(items, searchBar))
    if (category) setfilteredItems(filteredByCategory(items ,category))

    
  }, [items, searchBar, category])
  


  //

  

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

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
        setOrder,
        items,
        setItems,
        searchBar,
        setSearchBar,
        filteredItems,
        setfilteredItems,
        setCategory,
        category,
        filteredByCategory,
        




      }}>
      {children}
    </ShoppingCartContex.Provider>
  );
};
