import React from 'react';
import CheeseCard from "./CheeseCard"



function AllCheese({cheeses, addToCart, renderInfo, capitalize}) {
  return (
    <div className='four-column-grid'>
      <div className='row'>
        {cheeses.map((cheese) => {
          return <CheeseCard key={cheese.id} capitalize={capitalize} renderInfo={renderInfo} addToCart={addToCart} cheese={cheese} />
        })}
      </div>
    </div>
  )  
}


export default AllCheese;