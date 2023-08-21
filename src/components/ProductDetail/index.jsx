
import { HiXMark } from "react-icons/hi2";

import './styles.css'
import { ShoppingCartContex } from '../../context';
import { useContext } from 'react';

const ProductDetail = () => {

  const {isProductDetailopen, closeProductDetail }  = useContext(ShoppingCartContex)

  return (
    <aside className={`${isProductDetailopen?'flex': 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white p-5`}>
      <div className=' flex justify-between items-center '>
        <h2 className=' font-medium text-xl'>Detail</h2>
        <HiXMark onClick={()=>closeProductDetail()} className='cursor-pointer h-6 w-6 hover:text-slate-600'/>

      </div>
      
    </aside>
  )
}

export default ProductDetail