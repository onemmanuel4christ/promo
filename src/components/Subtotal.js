import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'

const Subtotal = () => {
  return (
    <div className='subtotal'>
    <CurrencyFormat 
          renderText={(value) =>(
              <>
                  <p>
                      Subtotal (0 items) : <strong>0</strong>
                      {/* Subtotal ({basket?.length} items):<strong>{value}</strong> */}
                   </p>
                  <small className='subtotal__gift'>
                      <input type="checkbox" /> 
                      This order contains a gift
                  </small>
              </>
          )}
          decimalScale={2}
          value={0}
          // value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₦"}
    />  
    <button className='btn btn-primary'>Proceed to checkout</button>
</div>
  )
}

export default Subtotal
