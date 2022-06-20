import AllCheese from "./AllCheese"
import CartCheese from "./CartCheese"
import React, {useState, useEffect} from 'react'
import CheeseInfo from "./CheeseInfo"
import "../CheesePage.css";


//6/19 get clicks working
//new state for cartCheese
//get routing working? 
function CheesePage() {
  const [cheeses, setCheeses] = useState([])
  const [cheeseCart, setCheeseCart] = useState([])
  const [info, setInfo] = useState([])
  const [formData, setFormData] = useState({})

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
  
  function renderInfo(clickedCheese){
    return setInfo(clickedCheese)
  }

  function submitForm(e) {
    e.name.value
  }

  function capitalize(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

    return (
     <div>
        <AllCheese renderInfo={renderInfo} capitalize={capitalize}addToCart={addToCart} cheeses={cheeses}/>
        <form onSubmit={(e) => {
          e.preventDefault()
          submitForm()}}>
          Not Cheesy Enough? Add Your Own!
          <input className="name" placeholder="Name" type="text"></input>
          <input className="firmness" placeholder="Firmness" type="text"></input>
          <input className="image" placeholder="Image URL" type="text"></input>
          <button className="submit-button">Cut The Cheese!</button>
        </form>
        <CartCheese capitalize={capitalize} cheeseCart={cheeseCart} />
        <CheeseInfo info={info} capitalize={capitalize} cheeses={cheeses} />
     </div>
    )
}

export default CheesePage;
