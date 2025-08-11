import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  let [datas,setDatas]  = useState([])
  const[count,setCount] = useState(0)
  useEffect(()=>{
    const fetchData = async()=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const value = await res.data
        setDatas(value)  
        console.log("useEffect");
            
    }  

    fetchData()
  },[count])
  console.log(datas);
  const add = ()=>{
    setCount((prev)=>++prev)
  }
  return (
    <div className='App'>
      <button onClick={add}>Add{count}</button>
      {datas.map((item)=>(
        <div className='values'>
          <h1>{item.userId}</h1>
          <h1>{item.id}</h1>
          <h1>{item.title}</h1>
          <h1>{item.body}</h1>
        </div>
      ))}
    </div>
  )
}

export default App