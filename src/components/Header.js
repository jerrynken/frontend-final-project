import React from 'react';

function Header(){
    return(
        <header>
            <div className="main-background">
            <div className="background">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family-owned Mediterranean restaurant,
                   focused on traditional recipes served with a modern
                   twist.
                </p>
                <button>Reserve a Table</button>
            </div>
            <div className="background-image">
                <img
                    src={require("../assets/restauranfood.jpg")}
                    alt="little lemon restaurant"
                />
            </div>
        </div>
        </header> 
    )
}

export default Header;