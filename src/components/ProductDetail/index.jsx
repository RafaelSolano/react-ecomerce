
import { HiXMark } from "react-icons/hi2";

import './styles.css'

const ProductDetail = () => {
  return (
    <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white p-5'>
      <div className=' flex justify-between items-center '>
        <h2 className=' font-medium text-xl'>Detail</h2>
        <HiXMark className='cursor-pointer text-2xl  hover:text-slate-600'/>

      </div>
      
    </aside>
  )
}

export default ProductDetail