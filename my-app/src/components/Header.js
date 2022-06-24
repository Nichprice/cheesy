import React from "react";
import cheeselogo from '../images/cheeselogo.png';
import '../Header.css';
import {NavLink} from "react-router-dom";



function Header() {
 return (
  <nav>
  <div id="header">
    <NavLink exact to="/">
      <img 
      alt="cheese-logo"
      className="cheesy-home-button" 
      src={cheeselogo}
      />
    </NavLink>
    <span id="title">
      <br></br>
      <NavLink exact to="/">
        <img id="cheese-script" src="https://see.fontimg.com/api/renderfont4/g8P5/eyJyIjoiZnMiLCJoIjoxNDYsInciOjIwMDAsImZzIjo3MywiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiNCNDQxNDEiLCJ0IjoxfQ/Q2hlZXN5/cheese-and-mouse.png" alt=""/>
      </NavLink>
    </span>
    <span>
      <NavLink to="/cart" id="cart">
        {/* <br></br> */}
        <div className="cart-button">
          <img id="cart-image" src="https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-17.jpg" alt=""/>
        </div>
      </NavLink>
    </span>
      <NavLink to="/form" id="form">
        <span className="form">
          Cut the Cheese!
        </span>
      </NavLink>
     
  </div>
  </nav>
 )
}

export default Header;