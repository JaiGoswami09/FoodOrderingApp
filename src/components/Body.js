// Not using keys is not adviced/acceptable and we should use keys.....<<<< we can use index as keys but it is not recommended <<<<<we should use unique id as keys(best practice).
import RestaurantCard from "./RestaurantCard";
import resList from "../util/mockData";

const Body = () => {
    return (
        <div className="body">
          //************************************************** 
            <div className="res-container">
              {
                resList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData = {restaurant}/>))
              }
            
             </div>

             //*****************************1:53:00*************************** 

        </div>

    );
};

export default Body;