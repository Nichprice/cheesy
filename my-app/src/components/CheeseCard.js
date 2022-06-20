import React from "react";


function CheeseCard({cheese, addToCart, capitalize, renderInfo}) {
  
    return (
        <div className="whole-card">
            <div  className="name">
                {capitalize(cheese.name)}
            </div>
            <div className="firmness">
                {cheese.firmness}
            </div>
            <div className="image">
                <img src={cheese.image} alt={cheese.name}/>
            </div>
            <div className="card-footer">
                <button 
                    className="info-button"
                    onClick={() =>renderInfo(cheese)}>
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