import React from 'react';
import CheeseCard from "./CheeseCard"
import "../AllCheese.css";

function AllCheese({cheeses, addToCart, renderInfo}) {
  return (
    <div className='four-column-grid'>
      <div className='row'>
        {cheeses.map((cheese) => {
          return <CheeseCard renderInfo={renderInfo} addToCart={addToCart} cheese={cheese} key={cheese.id}/>
        })}
      </div>
    </div>
  )  
}


export default AllCheese;