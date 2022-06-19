import React from "react";
import CheeseCard from "./CheeseCard"


//showing as two your carts
function CartCheese({cheeseCart}){
  return (
    <div>
    {cheeseCart.map((cheese) => {
      return <CheeseCard key={cheese.id} cheese={cheese}/>
    })}
    </div>
  )
}

export default CartCheese;