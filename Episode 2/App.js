
import React from "react";
import ReactDom from "react-dom/client";

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="data:image/png;base64,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" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}



const RestaurantCard = () => {
    return(
        <div className="res-card" >
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/y0ssisttf1abijyrwelp" alt="Res Logo" />
            <h3>Res Name</h3>
            <h4>Cuisine1, Cuisine2</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}


const Body = () =>{
    return(
        <div className="body">            
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                
            </div>
        </div>
        
    )
}


const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />)