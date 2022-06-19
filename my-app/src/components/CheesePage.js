import AllCheese from "./AllCheese"
import CartCheese from "./CartCheese"
import React, {useState, useEffect} from 'react'


//6/19 get clicks working
//new state for cartCheese
//get routing working? 
function CheesePage() {
  const [cheeses, setCheeses] = useState([])
  const [cheeseCart, setCheeseCart] = useState([])

  useEffect(() => {
  fetch("http://localhost:3000/cheeses")
  .then(r=>r.json())
  .then(d=>setCheeses(d))
  },[])

  function addToCart(clickedCheese) {
    if(cheeseCart.includes(clickedCheese) === false){
      return setCheeseCart([...cheeseCart, clickedCheese])
    } else {
      return alert(`Don't hog all the cheese!`)
    }
  }
  // console.log(addToCart);
    return (
     <div>
        <CartCheese cheeseCart={cheeseCart} />
        <AllCheese addToCart={addToCart} cheeses={cheeses}/>
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log("Submitted!")}}>
          Not Cheesy Enough? Add Your Own!
          <input className="name" placeholder="Name"></input>
          <input className="firmness" placeholder="Firmness"></input>
          <input className="image" placeholder="Image URL"></input>
          <button className="submit-button">Cut The Cheese!</button>
        </form>
     </div>
    )
}

export default CheesePage;
