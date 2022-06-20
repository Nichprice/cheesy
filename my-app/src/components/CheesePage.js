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
  
  function handleChange (e) {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  function submitForm() {
    fetch("http://localhost:3000/cheeses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([...cheeses, formData])
    })
    .then(response => response.json())
    .then(data => console.log(data))
    
    setFormData(formData)
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
          <input className="name" placeholder="Name" type="text" name="name" value={formData.name} onChange={handleChange}></input>
          <input className="firmness" placeholder="Firmness" type="text" name="firmness" value={formData.firmness} onChange={handleChange}></input>
          <input className="image" placeholder="Image URL" type="text" name="image" value={formData.image} onChange={handleChange}></input>
          <input className="description" placeholder="Description" type="text" name="description" value={formData.description} onChange={handleChange}></input>
          <button className="submit-button">Cut The Cheese!</button>
        </form>
        <CartCheese capitalize={capitalize} cheeseCart={cheeseCart} />
        <CheeseInfo info={info} capitalize={capitalize} cheeses={cheeses} />
     </div>
    )
}

export default CheesePage;
