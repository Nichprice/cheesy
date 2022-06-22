import React from "react";
import {NavLink} from "react-router-dom";
import "../CheeseCard.css";

function CheeseCard({cheese, addToCart, capitalize, renderInfo}) {
  
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
                    onClick={() => addToCart(cheese)}
                    className="addtocart-button">
                    Add to 🛒
                </button>
            </div>
        </div>
    )
}

export default CheeseCard;