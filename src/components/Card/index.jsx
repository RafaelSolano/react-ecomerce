
const Card = () => {
  return (
    <div className='bg-white cursor-pointer w-56 h-60'>
      <figure className=' relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-md text-sm text-stone-800 px-3 py-0 m-0.5'>Electronics</span>
        <img className='w-full h-full object-cover rounded-lg' src="https://www.zdnet.com/a/img/resize/f9d045f514ea9f624eae17b3bc32f5fa9fbcc53c/2023/02/22/6b56b3af-c627-48d1-bbf3-e8e701ac7c0f/sonyoverfinished.jpg?auto=webp&fit=crop&height=1200&width=1200" alt=" headphones" />
        <div className='absolute top-0 right-0 pb-1  grid place-content-center  bg-white  w-6 h-6 rounded-full m-1'>+</div>
      </figure>

      <p className='flex justify-between'>
        <span className=' text-sm font-light'>Headphones</span>
        <span className=' text-lg font-medium'>$300</span>
      </p>
    </div>
  )
}

export default Card