import React from "react";
import ReactDOM from "react-dom/client";

// Component is just a normal javascript function which return some JSX. 

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0UhLKALBi5PVOyXGJIZtSfmcWXCuPAm9qyA&s" />
            </div>
            <div className="search">Search</div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul> 
            </div>     
        </div>
     );
};

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7" />
            <h3>Pizza Hut</h3>
            <h5>Pizzas, Italian, Fast Food, Desserts</h5>
            <h5>4.4 stars</h5>
            <h5>28 minutes</h5>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
           
            <div className="res-container">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
             </div>

        </div>

    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};
            

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 