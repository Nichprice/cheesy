import React from "react";
import cheeselogo from '../images/cheeselogo.png'


function Header() {
 return (
  <div>
    <img 
      className="cheesy-home-button" 
      src={cheeselogo}
      onClick
    /> 
    <h1>
      cheesy
    </h1>
    <button className="cart-button">
      Your Cart
    </button>
  </div>
 )
}

export default Header;