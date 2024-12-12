import { useState } from 'react'
import PlaceOrderComp from './components/PlaceOrderComp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PlaceOrderComp/>
    </>
  )
}

export default App
