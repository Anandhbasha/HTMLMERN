import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './Slice/Slice'

const Sample = () => {
    const counts = useSelector((state)=>state.counting.count)
    const dispatch = useDispatch()
  return (
    <div className='App'>
      <p>{counts}</p>
      <button onClick={()=>dispatch(increment(1))}>Increment</button>
      <button onClick={()=>dispatch(decrement(1))}>Decrement</button>
      <button onClick={()=>dispatch(reset(0))}>Reset</button>
    </div>
  )
}

export default Sample