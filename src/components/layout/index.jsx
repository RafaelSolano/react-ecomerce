
// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <div className='flex flex-col items-center mt-2'>
      {children}
    </div>
  )
}

export default Layout