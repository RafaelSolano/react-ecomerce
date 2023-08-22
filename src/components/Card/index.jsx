/* eslint-disable react/prop-types */
import { AiOutlinePlus } from 'react-icons/ai';
import { useContext } from 'react'
import { ShoppingCartContex } from '../../context';

const Card = ({ data: { id,title, price, category, image, description } }) => {
  const product = {id, title, price, category, image, description }
  const { count, setCount, openProductDetail, setProductToShow,cartProducts,setCartProducts } = useContext(ShoppingCartContex)
  
  const showProduct = (productDetail) => {
    openProductDetail()
    setProductToShow(productDetail)
    
  }
  const addProductsToCart = (newProduct) => {
    setCartProducts([...cartProducts, newProduct  ])
    setCount(count + 1)
    console.log(cartProducts);

    
  }
  
  
  return (
    <div
      onClick={()=>showProduct( product ) }
      className='bg-white cursor-pointer w-56 h-60  '>
      <figure className=' relative mb-2 w-full h-4/5 '>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-md text-sm text-stone-800 px-3 py-0 m-0.5'>{category}</span>
        <img className='w-full h-full object-contain rounded-lg ' src={ image } alt={ title } />
        <div className='absolute top-1 right-1   grid place-content-center  bg-white  w-6 h-6 rounded-full my-1 '
          onClick={() =>addProductsToCart( product )}>
          <AiOutlinePlus className='w-5 h-5'/>
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