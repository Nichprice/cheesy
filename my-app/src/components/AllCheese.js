import React from 'react';
import CheeseCard from "./CheeseCard"
import "../AllCheese.css";

function AllCheese({cheeses, addToCart, renderInfo}) {
  return (
    <div className='four-column-grid'>
      <div className='row'>
        {cheeses.map((cheese) => {
          return <CheeseCard key={cheese.id} renderInfo={renderInfo} addToCart={addToCart} cheese={cheese} />
        })}
      </div>
    </div>
  )  
}


export default AllCheese;