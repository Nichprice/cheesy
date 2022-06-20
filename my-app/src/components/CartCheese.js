import React from "react";
import CheeseCard from "./CheeseCard"


//showing as two your carts
function CartCheese({cheeseCart, capitalize}){
  return (
    <div>
      <h2>Cheese Cart</h2>
    {cheeseCart.map((cheese) => {
      return <CheeseCard key={cheese.id} capitalize={capitalize} cheese={cheese}/>
    })}
    </div>
  )
}

export default CartCheese;