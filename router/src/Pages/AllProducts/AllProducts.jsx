import React, { useContext } from 'react'
import './AllProducts.css'
import Card from '../../Components/Cards/Card'
import { PassingValue } from '../../App'

const AllProducts = () => {
 const allProducts = useContext(PassingValue)
  return (
    <div className='AllProducts'>
      {allProducts.map((item)=>(
        <Card {...item}/>
      ))}
    </div>
  )
}

export default AllProducts