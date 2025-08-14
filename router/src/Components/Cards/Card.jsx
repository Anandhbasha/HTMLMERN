import React from 'react'
import './Card.css'

const Card = ({productName,productPrice,productDesrc,image}) => {
  return (
    <div className='Card'>
        <img src={image}></img>
        <h3>{productName}</h3>
        <h3>{productPrice}</h3>
        <p>{productDesrc}</p>
        <button>Add to cart</button>
    </div>
  )
}

export default Card