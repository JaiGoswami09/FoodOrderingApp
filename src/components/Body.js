// Not using keys is not adviced/acceptable and we should use keys.....<<<< we can use index as keys but it is not recommended <<<<<we should use unique id as keys(best practice).
import RestaurantCard from "./RestaurantCard";
import resList from "../util/mockData";
import { useState } from "react";

const Body = () => {

  //Local State Variable::
  const [listofRestaurants, setListOfRestaurant] = useState(resList);

  /************************************************
  // Normal Js Variable
  let listofRestaurantsJs = [
    {
    info: {
      id: "65330",
      name: "Domino's Pizza",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      locality: "Old Palasia",
      areaName: "Navneet Tower Road",
      costForTwo: "₹400 for two",
      cuisines: [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      avgRating: 3.3,
    },
  },
  { 
    info: {
    id: "65859",
    name: "Pizza Hut",
    cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
    locality: "Old Palasia",
    areaName: "Navneet Tower Road",
    costForTwo: "₹400 for two",
    cuisines: [
      "Pizzas",
      "Italian",
      "Pastas",
      "Desserts"
    ],
    avgRating: 4.5,

  },
},
  ];

  */
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                // Filter Logic Here.
                onClick={() => {
                  const filteredList = listofRestaurants.filter(
                    (res) => res.info.avgRating > 4
                  );
                  setListOfRestaurant(filteredList);
                  console.log(listofRestaurants);
                  }}>Top-Rated Restaurant</button>
            </div>
          //************************************************** 
            <div className="res-container">
              {
                listofRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData = {restaurant}/>))
              }
            
             </div>

             //*****************************1:53:00*************************** 

        </div>

    );
};

export default Body;