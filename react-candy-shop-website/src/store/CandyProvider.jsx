import React from 'react'
import CartContext from './candy-context'

const CandyProvider = (props) => {

    const 

    const cartContent= {
        items:,
        count:,
    }
  return (
    <CartContext.Provider value={cartContent}>
      {props.chilren}
    </CartContext.Provider>
  )
}

export default CandyProvider
