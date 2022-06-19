import React from "react";

function CheeseCard() {
    return (
        <div className="whole-card">
            <div  className="name">
                {cheese.name}
            </div>
            <div className="firmness">
                {cheese.firmness}
            </div>
            <div className="image">
                {cheese.image}
            </div>
            <div className="card-footer">
                <button 
                    className="info-button"
                    onClick={}>
                    Info
                </button>
                <button 
                    className="addtocart-button">
                    Add to 🛒
                </button>
            </div>
        </div>
    )
}

export default CheeseCard;