import React from 'react';
import CheeseCard from "./CheeseCard"

function AllCheese({cheeses, addToCart}) {
  return (
    <div className='four-column-grid'>
      <div className='row'>
        {cheeses.map((cheese) => {
          return <CheeseCard addToCart={addToCart} cheese={cheese} key={cheese.id}/>
        })}
      </div>
    </div>
  )  
}


export default AllCheese;