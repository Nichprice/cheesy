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
      <img id="cheese-script" src="https://see.fontimg.com/api/renderfont4/g8P5/eyJyIjoiZnMiLCJoIjoxNDYsInciOjIwMDAsImZzIjo3MywiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiNCNDQxNDEiLCJ0IjoxfQ/Q2hlZXN5/cheese-and-mouse.png"/>
      <div className="cart-button">
      🛒
      </div>
    </h1>
    {/* <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/cheeselist">Cheese List</NavLink>
      <NavLink exact to="/addcheese">Add Cheese</NavLink>
      <NavLink exact to="/cheesecart">Cart</NavLink>
    </nav> */}
  </div>
 )
}

export default Header;