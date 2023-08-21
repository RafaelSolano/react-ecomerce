import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Layout from '../../components/layout'

const Home = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])
  
  
  return (
    <Layout>
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
    </Layout>
  )
}
export default Home