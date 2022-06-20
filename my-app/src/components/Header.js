import React from "react";
import cheeselogo from '../images/cheeselogo.png';
import '../Header.css';


function Header() {
 return (
  <div id="header">
    <img 
      alt="cheese-logo"
      className="cheesy-home-button" 
      src={cheeselogo}
      // onClick
    /> 
    <h1>
      <br></br>
      Cheesy
      <div className="cart-button">
      🛒
      </div>
    </h1>
    
  </div>
 )
}

export default Header;