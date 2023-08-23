import { useContext } from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { ShoppingCartContex } from '../../context';

const SearchInput = () => {

  const { setSearchBar } = useContext(ShoppingCartContex)
  

  
  return (
    <div className='w-80 mb-8 mt-2'>
      <label
        to='default-search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <HiMagnifyingGlass className='text-gray-400'/>
        </div>
        <input
          onChange={({target})=> setSearchBar(target.value)}
          type='search'
          id='default-search'
          className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 d focus:outline-gray-400'
          placeholder='Gold, Backpack, Jacke...'
          required
        />
      </div>
    </div>
  );
};

export default SearchInput;
