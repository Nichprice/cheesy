import React from "react";
import CheeseCard from "./CheeseCard";
import "../AllCheese.css";


//showing as two your carts
function CartCheese({cheeseCart, capitalize, renderInfo}){
  return (
    <h2>Cheese Cart
      <div className="row">  
      {cheeseCart.map((cheese) => {
        return <CheeseCard key={cheese.id} cheese={cheese} capitalize={capitalize} renderInfo={renderInfo}/>
      })}
      </div>
    </h2>
  )
}

export default CartCheese;