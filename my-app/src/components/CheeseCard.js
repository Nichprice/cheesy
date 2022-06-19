import React from "react";

function CheeseCard({cheese, addToCart}) {
  
    return (
        <div className="whole-card">
            <div  className="name">
                {cheese.name}
            </div>
            <div className="firmness">
                {cheese.firmness}
            </div>
            <div className="image">
                <img src={cheese.image}/>
            </div>
            <div className="card-footer">
                <button 
                    className="info-button"
                    onClick={() =>console.log(cheese)}>
                    Info
                </button>
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