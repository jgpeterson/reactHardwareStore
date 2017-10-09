import React from 'react'

const Product = ({ productName, price, description }) => {
  return (
    <div>
      <h3>{productName}</h3>
      <h4>${price}</h4>
      <p>{description}</p>
      <button>Delete</button>
      <button>Add to Cart</button>
    </div>
  )
}

export default Product