import { createContext, useState }  from 'react';

export const ShoppingCartContex = createContext([]);



// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [isProductDetailopen, setIsProductDetailopen] = useState(false)

  const openProductDetail=() => setIsProductDetailopen(true)
  const closeProductDetail=() => setIsProductDetailopen(false)

  
  return (
    <ShoppingCartContex.Provider
      value={{
        count,
        setCount,
        isProductDetailopen,
        openProductDetail,
        closeProductDetail,
        
      }}
    >
      {children}
    </ShoppingCartContex.Provider>
  )
}
