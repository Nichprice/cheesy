import AllCheese from "./AllCheese"
import CartCheese from "./CartCheese"
import React, {useState, useEffect} from 'react'

function CheesePage() {
  const [cheeses, setCheeses] = useState([])

  useEffect(() => {
  fetch("http://localhost:3000/cheeses")
  .then(r=>r.json())
  .then(d=>setCheeses(d))
  },[])

    return (
     <div>
         <button className="cart-button">
            Your Cart
         </button>
        <AllCheese cheeses={cheeses}/>
     </div>
    )
}

export default CheesePage;
