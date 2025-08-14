import React, { useContext } from 'react'
import Card from '../../Components/Cards/Card'
import './Mens.css'
import { PassingValue } from '../../App'

const Mens = () => {
  const allProducts = useContext(PassingValue)

  const mensProduct = allProducts.filter((item)=>item.prodCat==="Mens")
  return (
    <div className='Mens'>
      {
        mensProduct.map((item)=>(
          <Card {...item}/>
        ))
      }
    </div>
  )
}

export default Mens