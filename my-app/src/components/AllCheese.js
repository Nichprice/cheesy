import React from 'react';
import CheeseCard from "./CheeseCard"

function AllCheese({cheeses}) {
  return (
    <div className='four-column-grid'>
      <div className='row'>
        {cheeses.map((cheese) => {
          return <CheeseCard cheese={cheese} key={cheese.id}/>
        })}
      </div>
    </div>
  )  
}


export default AllCheese;