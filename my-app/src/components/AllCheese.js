import React from 'react';
import CheeseCard from "./CheeseCard"
import "../AllCheese.css";

function AllCheese({cheeses, addToCart, capitalize, renderInfo}) {
  return (
    <div className='four-column-grid'>
      <div className='row'>
        {cheeses.map((cheese) => {
          return <CheeseCard renderInfo={renderInfo} addToCart={addToCart} capitalize={capitalize} cheese={cheese} key={cheese.id}/>
        })}
      </div>
    </div>
  )  
}


export default AllCheese;