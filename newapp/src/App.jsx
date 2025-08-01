import React, { useState } from 'react'

const App = () => {
  let [count,setCount] = useState(0)
  let [bg,setBg] = useState("dark")
  const option = [10,20,30,40,50]
  const handleCount = ()=>{
   setCount(++count)
    console.log(count);    
  }
  const handleBg = ()=>{
    setBg(bg==="dark"?"light":"dark")
  }
  let [filter,setFilter] = useState(10)

  const handleDrop = (event)=>{
      setFilter(event.target.value)
    console.log(filter);
  }
  
  
  return (
    <div className='App'>
      <button onClick={handleCount}>Count{count}</button>
      <button onClick={handleBg} style={{backgroundColor:bg==="dark"?"black":"white",color:bg==="dark"?"white":"black"}}>{bg}</button>
      <select onChange={handleDrop}>
        {option.map((x)=>(
          <option value={x}>{x}</option>
        ))}
      </select>
    </div>
  )
}

export default App