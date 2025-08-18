import React, { useReducer, useState } from 'react'

const App = () => {
  const reduce = (state,action)=>{
    switch(action.type){
      case "increment":
        return {...state,count:state.count+1}
      case "lightblue":
        return{...state,bg:state.bg==="dark"?"lightblue":"dark"}
      case "Yellow":
        return{...state,bg2:state.bg2==="dark"?"Yellow":"dark"}
      case "Green":
        return{...state,bg1:state.bg1==="dark"?"Green":"dark"}
    }
  }
  const[state,dispatch] = useReducer(reduce,{count:0,bg:"dark",bg1:"dark",bg2:"dark"})
  return (
    <div className='App'>
      <button onClick={()=>dispatch({type:"increment"})}>{state.count}</button>
      <button onClick={()=>dispatch({type:"lightblue"})}>{state.bg}</button>
      <button onClick={()=>dispatch({type:"Green"})}>{state.bg1}</button>
      <button onClick={()=>dispatch({type:"Yellow"})}>{state.bg2}</button>
    </div>
  )
}

export default App