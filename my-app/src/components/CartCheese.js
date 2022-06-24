import React from "react";
import CartCard from "./CartCard";


//showing as two your carts
function CartCheese({cheeseCart, capitalize, renderInfo, removeFromCart}){
  return (
    <h2>
      <br></br>
      Cheese Cart
      <div className="row">  
      {cheeseCart.map((cheese) => {
        return <CartCard key={cheese.id} cheese={cheese} capitalize={capitalize} renderInfo={renderInfo} removeFromCart={removeFromCart}/>
      })}
      </div>
    </h2>
  )
}

export default CartCheese;