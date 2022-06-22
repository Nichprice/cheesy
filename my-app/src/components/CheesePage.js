import React, {useState, useEffect} from 'react'
import AllCheese from "./AllCheese"
import CartCheese from "./CartCheese"
import CheeseInfo from "./CheeseInfo"
import CheeseForm from "./CheeseForm"
import "../CheesePage.css";
import {Switch, Route} from "react-router-dom";


function CheesePage() {
  const [cheeses, setCheeses] = useState([])
  const [cheeseCart, setCheeseCart] = useState([])
  const [info, setInfo] = useState([])
  const initialValues = {
    name: "",
    firmness: "",
    image: "",
    description: ""
  }
  const [formData, setFormData] = useState(initialValues)

  
  useEffect(() => {
    fetch("http://localhost:3000/cheeses")
    .then(r=>r.json())
    .then(d=>setCheeses(d))
  },[])
  
  function submitForm() {
    fetch("http://localhost:3000/cheeses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...formData})
    })
    .then(response => response.json())
    .then(data => setCheeses([...cheeses, data]))
    
    setFormData(initialValues)
  }
  
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
    return (str.toLowerCase().split(' ').map((word) => {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' '))
  }
  
  function removeFromCart(clickedCheese) {
    const modifiedCart = cheeseCart.filter(cheese => clickedCheese !== cheese);
    setCheeseCart(modifiedCart);
  }

    return (
     <div id="background">
      <Switch>
        <Route exact path="/">
          <AllCheese capitalize={capitalize} renderInfo={renderInfo}  addToCart={addToCart} cheeses={cheeses}/>
        </Route>
        <Route path="/cart">
          <CartCheese cheeseCart={cheeseCart} capitalize={capitalize} renderInfo={renderInfo} removeFromCart={removeFromCart}/>
        </Route>
        <Route path="/info">
          <CheeseInfo info={info} cheeses={cheeses} capitalize={capitalize}/>
        </Route>
        <Route path="/form">
          <CheeseForm formData={formData} setFormData={setFormData} submitForm={submitForm} cheeses={cheeses} />
        </Route>
      </Switch>
     </div>
    )
}

export default CheesePage;
