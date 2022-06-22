import React from "react";
import {NavLink} from "react-router-dom";

function CartCard({cheese, removeFromCart, capitalize, renderInfo}) {
  
    return (
        <div className="whole-card">
            <div className="name">
                {capitalize(cheese.name)}
            </div>
            <div className="image">
                <img src={cheese.image} alt={cheese.name}/>
            </div>
            <div className="card-footer">
                <NavLink to="/info">
                    <button 
                        className="info-button"
                        onClick={() =>renderInfo(cheese)}>
                        Info
                    </button>
                </NavLink>
                <button 
                    onClick={() => removeFromCart(cheese)}
                    className="remove-from-cart-button">
                    Remove from 🛒
                </button>
            </div>
        </div>
    )
}

export default CartCard;