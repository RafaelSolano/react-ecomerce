/* eslint-disable react/prop-types */
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';

import { useContext } from 'react'
import { ShoppingCartContex } from '../../context';

const Card = ({ data: { id,title, price, category, image, description } }) => {
  const product = {id, title, price, category, image, description }
  const { count, setCount, openProductDetail,
    setProductToShow, cartProducts, setCartProducts,
    openCheckoutSideMenu, closeProductDetail, closeCheckoutSideMenu } = useContext(ShoppingCartContex)
  
  const showProduct = (productDetail) => {
    openProductDetail()
    setProductToShow(productDetail)
    closeCheckoutSideMenu()
    
  }
  const addProductsToCart = (event, newProduct) => {
    if (renderIcon(newProduct.id)) {
      event.stopPropagation()
      openCheckoutSideMenu()
      return
    }
    event.stopPropagation()
    setCartProducts([newProduct, ...cartProducts,])
    openCheckoutSideMenu()
    setCount(count + 1)
    closeProductDetail()
    console.log(cartProducts);

    
  }

  const renderIcon = (id) => {
    const isproductCar = cartProducts.filter(product => product.id === id).length > 0
    return isproductCar;
  }
  
  return (
    <div
      onClick={()=>showProduct(  product ) }
      className='bg-white cursor-pointer w-56 h-60  '>
      <figure className=' relative mb-2 w-full h-4/5 '>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-md text-sm text-stone-800 px-3 py-0 m-0.5'>{category}</span>
        <img className='w-full h-full object-contain rounded-lg ' src={ image } alt={ title } />
        
        <div className='absolute top-1 right-1   grid place-content-center  bg-white  w-6 h-6 rounded-full my-1 '
          onClick={(event) =>addProductsToCart(event, product )}>
          {(renderIcon(id)) ? <AiOutlineCheck className='w-5 h-5 text-green-400 ' /> : <AiOutlinePlus className='w-5 h-5' />}
        </div>

        


      </figure>
      <p className='flex justify-between'>
        <span className=' text-sm font-light'>{ title }</span>
        <span className=' text-lg font-medium'>${ price }</span>
      </p>
    </div>
  )
}

export default Card