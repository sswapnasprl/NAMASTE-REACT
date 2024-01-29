import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search 
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Img
 *          - Name of Res, Star rating, cuisine, delivery time, etc 
 * Footer
 *  - CopyRight
 *  - Links
 *  - Address
 *  - Contact
 */

const styleCard = {
    backgroundColor: '#f0f0f0',
};

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.designevo.com/res/templates/thumb_small/quick-takeaway-icon.webp"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () => {
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yfyo8aklppbwdplv7ofp"></img>
            <h3>Meghana Foods</h3>
            <h4>North-Indian, Biryani, Asian</h4>
            <h4>4.4 starts</h4>
            <h4>38 minutes</h4>

        </div>
    );
};
const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    );
};
const AppLayout = () => {
    return(
        <div className="container">
        <Header/>
        <Body/>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering React functional component
root.render(<AppLayout />);
