import React, {useState, useEffect} from 'react'
import AllCheese from "./AllCheese"
import CartCheese from "./CartCheese"
import CheeseInfo from "./CheeseInfo"
import CheeseForm from "./CheeseForm"
import "../CheesePage.css";


function CheesePage() {
  const [cheeses, setCheeses] = useState([])
  const [cheeseCart, setCheeseCart] = useState([])
  const [info, setInfo] = useState([])


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
  
  function capitalize(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

    return (
     <div>
        <AllCheese renderInfo={renderInfo} capitalize={capitalize}addToCart={addToCart} cheeses={cheeses}/>
        <CartCheese capitalize={capitalize} cheeseCart={cheeseCart} />
        <CheeseInfo info={info} capitalize={capitalize} cheeses={cheeses} />
        <CheeseForm cheeses={cheeses} />
     </div>
    )
}

export default CheesePage;
