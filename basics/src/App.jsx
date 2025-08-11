// import Button from "./Button"

// const App = ()=>{
//   return (
//     <div className="App">
//       <Button x="Click" color="blue"/>
//       <Button x="Login" color="green"/>
//       <Button x="Logout" color="orange"/>
//       <Button x="Delete" color="red"/>
//       <Button x="Edit" color="skyblue"/>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  let[count,setCount] = useState(0)
  let[bg,setBg] = useState("light")
  const handleChange = ()=>{    
    setCount(++count)
    console.log(count);    
  }
  const handleChangeColor= ()=>{
    setBg(bg==="light"?"dark":"light")
  }
  return (
    <div className='App'>
      <button onClick={handleChange}>Add{count}</button>
      <button onClick={handleChangeColor}>{bg}</button>
    </div>
  )
}

export default App