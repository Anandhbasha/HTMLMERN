import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const[count,setCount] = useState(0)
  useEffect(()=>{
    const fetchData = async()=>{
      const res = await axios.get("https://fakestoreapi.com/products")
      const datas = await res.data
      console.log(datas);
      
    }
    fetchData()
  },[count])
  const callfu = ()=>{
    setCount((prev)=>++prev)
  }
  return (
    <div className='App'>
      <button onClick={callfu}>{count}</button>
    </div>
  )
}

export default App