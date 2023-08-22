import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Layout from '../../components/layout'
import ProductDetail from '../../components/ProductDetail'

const Home = () => {

  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])
    
  return (
    <Layout>
      <h1>Home</h1>

      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map(item => (
            <Card
              data={item}
              key={item.id}
          

            />
          ))
        }
      </div>
      <ProductDetail/>
      
    </Layout>
  )
}
export default Home